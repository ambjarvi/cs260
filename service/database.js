const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('../dbConfig.json');

// mongodb+srv://myDatabaseUser:D1fficultP%40ssw0rd@mongodb0.example.com/?authSource=admin&replicaSet=myRepl

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const scoreCollection = db.collection('leaderboard');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(inputname) {
  return userCollection.findOne({ name: inputname });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(name, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    name: name,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addRecord(inputrecord) {
  const query = { name: inputrecord.name };
  const update = { $inc: { record: 1 }, $setOnInsert: {name: inputrecord.name}};
  const options = { upsert:true};

  const result = await scoreCollection.updateOne(query,update,options);
    //insertOne(record);
  return result;
}

async function getRecord(username) {
  const query = { name: username };
  return scoreCollection.findOne(query);
}

function getHighScores() {
  const query = { record: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { record: -1 },
    limit: 5,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = { 
  getUser,
  getUserByToken,
  createUser,
  addRecord,
  getHighScores,
 };