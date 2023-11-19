var user1 = document.getElementById("user1");
var user2 = document.getElementById("user2");
var user3 = document.getElementById("user3");
var user4 = document.getElementById("user4");
var user5 = document.getElementById("user5");

var entry1 = document.getElementById("entry1");
var entry2 = document.getElementById("entry2");
var entry3 = document.getElementById("entry3");
var entry4 = document.getElementById("entry4");
var entry5 = document.getElementById("entry5");

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");

var spot1 = localStorage.getItem("spot1");
var spot2 = localStorage.getItem("spot2");
var spot3 = localStorage.getItem("spot3");
var spot4 = localStorage.getItem("spot4");
var spot5 = localStorage.getItem("spot5");

async function loadScores() {
    let leaderboard = [];
    try {
      // Get the latest high scores from the service
      const response = await fetch('/api/leaderboard');
      leaderboard = await response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    } catch {
      // If there was an error then just use the last saved scores
      const leaderboardText = localStorage.getItem('leaderboard');
      if (leaderboardText) {
        leaderboard = JSON.parse(leaderboardText);
      }
    }
    console.log(String(leaderboard[0].name));
    user1.textContent = String(leaderboard[0].name) || "    ";
    entry1.textContent = String(leaderboard[0].record) || "    ";
    user2.textContent = String(leaderboard[1].name) || "    ";
    entry2.textContent = String(leaderboard[1].record) || "    ";
    user3.textContent = String(leaderboard[2].name) || "    ";
    entry3.textContent = String(leaderboard[2].record) || "    ";
    user4.textContent = String(leaderboard[3].name) || "    ";
    entry4.textContent = String(leaderboard[3].record) || "    ";
    user5.textContent = String(leaderboard[4].name) || "     ";
    entry5.textContent = String(leaderboard[4].record) || "    ";
  }

// function displayScores(leaderboard) {
//     console.log(String(leaderboard[0].name));
//     console.log(String(leaderboard[0].record));
    
// }





// if(spot1 !== '0'){
//     user1.textContent = spot1;
//     entry1.textContent = localStorage.getItem(spot1);
// }
// if(spot2 !== '0'){
//     user2.textContent = spot2
//     entry2.textContent = localStorage.getItem(spot2);
// } 
// if(spot3 !== '0'){
//     user3.textContent = spot3;
//     entry3.textContent = localStorage.getItem(spot3);
// } 
// if(spot4 !== '0'){
//     user4.textContent = spot4;
//     entry4.textContent = localStorage.getItem(spot4);
// } 
// if(spot5 !== '0'){
//     user5.textContent = spot5;
//     entry5.textContent = localStorage.getItem(spot5);
// }
