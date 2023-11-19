const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

// mongodb+srv://myDatabaseUser:D1fficultP%40ssw0rd@mongodb0.example.com/?authSource=admin&replicaSet=myRepl

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const scoreCollection = db.collection('leaderboard');

console.log("start");

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addRecord(inputrecord) {
  const query = { name: inputrecord.name };
  const update = { $set: {name: inputrecord.name, record: inputrecord.record}};
  const options = {upsert:true};

  const result = await scoreCollection.updateOne(query,update,options);
    //insertOne(record);
  return result;
}

function getHighScores() {
  const query = { score: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = { addRecord, getHighScores };