
  let loggedIn = false;
  const logInBtn = document.getElementById("logInBtn");
  const logInto = document.getElementById("logInto");
  var modal = document.getElementById("logIn");
  const signUp = document.getElementById("signUp");
  const userInputField = document.getElementById("journalInput");
  const storeInputButton = document.getElementById("logEntry");

  if(localStorage.getItem("loggedIn") != null){
    loggedIn = localStorage.getItem("loggedIn");
  }
  if(localStorage.getItem("currentUser") != null){
    logInBtn.textContent = localStorage.getItem("currentUser");
    document.getElementById("logInBtn").style.display = "none";
    document.getElementById("logOutBtn").style.display = "block";
    document.getElementById("loggedInUsername").style.display = "block";
    document.getElementById("loggedInUsername").textContent = localStorage.getItem("currentUser");
  }

  document.getElementById("myJournal").addEventListener("click", function() {
    if(!loggedIn){
      alert("You need to log in or sign up before accessing your journal.")
      document.getElementById("myJournal").href = "index.html";
    }
  });

  document.getElementById("about").addEventListener("click", function() {
    if(!loggedIn){
      alert("You need to log in or sign up before accessing the about page.")
      document.getElementById("about").href = "index.html";
    }
  });

  document.getElementById("leaderboard").addEventListener("click", function() {
    console.log(loggedIn);
    if(!loggedIn){
      alert("You need to log in or sign up before accessing the leaderboard.");
      document.getElementById("leaderboard").href = "index.html";
    }
  });

  logInBtn.addEventListener("click", function() {
    modal.style.display = "block";
  });
  
  logInto.addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    const realPassword = localStorage.getItem("password for " + username) || null;

    if (password == null || !(realPassword === password)){
      alert("Wrong password");
    } else if (localStorage.getItem(username) != null){
      modal.style.display = "none";
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("currentUser", username);
      logInBtn.style.display = "none";
      document.getElementById("logOutBtn").style.display = "block";
      document.getElementById("loggedInUsername").style.display = "block";
      document.getElementById("loggedInUsername").textContent = username;
    } else {
      alert("Wrong username");
    }
  });

  signUp.addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    localStorage.setItem(username, 0);
    localStorage.setItem("password for " + username, password);
    modal.style.display = "none";
    localStorage.setItem("currentUser", username);
    localStorage.setItem("loggedIn", true);
    logInBtn.style.display = "none";
    document.getElementById("logOutBtn").style.display = "block";
    document.getElementById("loggedInUsername").style.display = "block";
    document.getElementById("loggedInUsername").textContent = username;
  });

  document.getElementById("logOutBtn").addEventListener("click", function() {
    localStorage.setItem("currentUser", null);
    localStorage.setItem("loggedIn", false);
    logInBtn.style.display = "block";
    document.getElementById("logOutBtn").style.display = "none";
    document.getElementById("loggedInUsername").style.display = "none";
    document.getElementById("loggedInUsername").textContent = "";
    document.getElementById("username").value = "";
    document.getElementById("username").value = "";
  })
  
  document.getElementById("giveIdea").addEventListener("click", function(event) {
    event.preventDefault();
    
    var outputElement = document.getElementById("question");
    var newText = "random question"
    outputElement.innerHTML = newText;
  });



  storeInputButton.addEventListener("click", function(event) {
    event.preventDefault();
    var username = localStorage.getItem("currentUser") ?? null;
    var score = localStorage.getItem(username);
    var currentDate = new Date();
    var dateStr = currentDate.getFullYear() + '-' + ((currentDate.getMonth() + 1).toString().padStart(2, '0')) + '-' + (currentDate.getDate().toString().padStart(2, '0'));
    if(username == null){
      alert("You need to log in before logging an entry!");
    } else {
      
      const userValue = userInputField.value; 
      var entry = dateStr + ": " + userValue + "\n";
      var existingItems = localStorage.getItem("journal for " + username);
      if(existingItems == null) {
        existingItems = entry;
      } else {
        existingItems += entry;
      }
      var entries = parseInt(localStorage.getItem(username), 10) + 1;
      console.log(entries);
      localStorage.setItem(username, entries);
      addToLeaderboard(username);
      localStorage.setItem("journal for " + username, existingItems);
      document.getElementById("journalInput").value = "";
    }
    
    
  });

  async function addToLeaderboard(username){
    const entryNum = localStorage.getItem(username);
    const newRecord = {name: username, record: entryNum}
    try { 
      const response = await fetch ('/api/record', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newRecord),
      })

      const records = await response.json();
      localStorage.setItem('leaderboard', JSON.stringigy(records));
    } catch {
      this.addToLeaderboardLocal(newRecord);
    }
  }

  function addToLeaderboardLocal(newRecord) {
    let leaderboard = [];
    const leaderboardText = localStorage.getItem('leaderboard');
    if(leaderboardText) {
      leaderboard = JSON.parse(leaderboardText);
    }

    let found = false;
    for(const [i, prevRecord] of leaderboard.entries()) {
      if(newRecord > prevRecord.record) {
        leaderboard.splice(i, 0, newRecord);
        found = true;
        break;
      }
    }

    if(!found) {
      leaderboard.push(newRecord);
    }

    if(leaderboard.length > 5) {
      leaderboard.length = 5;
    }

    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    // if(entries == '0'){
    //   return;
    // } 
    // if(localStorage.getItem(localStorage.getItem("spot1")) < entries){
    //   var tempStorage = localStorage.getItem("spot1");
    //   if(already(username)){
    //     return;
    //   }
    //   localStorage.setItem("spot1", username)
    //   console.log(tempStorage);
    //   console.log(username);
    //   addToLeaderboard(tempStorage, localStorage.getItem(tempStorage));
    // } else if(localStorage.getItem(localStorage.getItem("spot2")) < entries){
    //   var tempStorage = localStorage.getItem("spot2");
    //   if(already(username)){
    //     return;
    //   }
    //   localStorage.setItem("spot2", username)
    //   if(tempStorage !== '0' && !(tempStorage === username)){
    //     addToLeaderboard(tempStorage, localStorage.getItem(tempStorage));
    //   }
      

    // } else if(parseInt(localStorage.getItem(localStorage.getItem("spot3"))) < parseInt(entries)){
    //   var tempStorage = localStorage.getItem("spot3");
    //   if(already(username)){
    //     return;
    //   }
    //   localStorage.setItem("spot3", username)
    //   if(tempStorage !== 0 && tempStorage !== username){
    //     addToLeaderboard(tempStorage, localStorage.getItem(tempStorage));
    //   }
    // } else if(parseInt(localStorage.getItem(localStorage.getItem("spot4"))) < parseInt(entries)){
    //   var tempStorage = localStorage.getItem("spot4");
    //   if(already(username)){
    //     return;
    //   }
    //   localStorage.setItem("spot4", username)
    //   if(tempStorage !== 0 && tempStorage !== username){
    //     addToLeaderboard(tempStorage, localStorage.getItem(tempStorage));
    //   }
    // } else if(parseInt(localStorage.getItem(localStorage.getItem("spot5"))) < parseInt(entries)){
    //   var tempStorage = localStorage.getItem("spot5");
    //   if(already(username)){
    //     return;
    //   }
    //   localStorage.setItem("spot5", username)
    //   if(tempStorage !== 0 && tempStorage !== username){
    //     addToLeaderboard(tempStorage, localStorage.getItem(tempStorage));
    //   }
  }
  

  function already(username) {
    if(localStorage.getItem("spot1") === username) {
      return true;
    }
    if(localStorage.getItem("spot2") === username) {
      return true;
    }
    if(localStorage.getItem("spot3") === username) {
      return true;
    }
    if(localStorage.getItem("spot4") === username) {
      return true;
    }
    if(localStorage.getItem("spot5") === username) {
      return true;
    }

  }