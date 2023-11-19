const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/leaderboard', async (_req, res) => {
  const leaderboard = await DB.getHighScores();
  res.send(leaderboard);
});

// SubmitScore
apiRouter.post('/record', async (req, res) => {
  DB.addRecord(req.body);
  const leaderboard = await DB.getHighScores();
  res.send(leaderboard);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.
// let leaderboard = [];
// function updateLeaderboard(newRecord, leaderboard) {
//   let found = false;
//   for (const [i, prevRecord] of leaderboard.entries()) {
//     if (newRecord.record > prevRecord.record) {
//       leaderboard.splice(i, 0, newRecord);
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     leaderboard.push(newRecord);
//   }

//   if (leaderboard.length > 10) {
//     leaderboard.length = 10;
//   }

//   return leaderboard;
// }
