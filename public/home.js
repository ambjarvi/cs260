
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
    loginOrCreate(`/api/auth/login`);
  //   const username = document.getElementById("username").value;
  //   const password = document.getElementById("password").value;
  //   document.getElementById("username").value = "";
  //   document.getElementById("password").value = "";
  //   const realPassword = localStorage.getItem("password for " + username) || null;

  //   if (password == null || !(realPassword === password)){
  //     alert("Wrong password");
  //   } else if (localStorage.getItem(username) != null){
  //     modal.style.display = "none";
  //     localStorage.setItem("loggedIn", true);
  //     localStorage.setItem("currentUser", username);
  //     logInBtn.style.display = "none";
  //     document.getElementById("logOutBtn").style.display = "block";
  //     document.getElementById("loggedInUsername").style.display = "block";
  //     document.getElementById("loggedInUsername").textContent = username;
  //   } else {
  //     alert("Wrong username");
  //   }
  });

  signUp.addEventListener("click", function() {
    loginOrCreate(`/api/auth/create`);

    // const username = document.getElementById("username").value;
    // const password = document.getElementById("password").value;
    // localStorage.setItem(username, 0);
    // localStorage.setItem("password for " + username, password);
    // modal.style.display = "none";
    // localStorage.setItem("currentUser", username);
    // localStorage.setItem("loggedIn", true);
    // logInBtn.style.display = "none";
    // document.getElementById("logOutBtn").style.display = "block";
    // document.getElementById("loggedInUsername").style.display = "block";
    // document.getElementById("loggedInUsername").textContent = username;
  });

  async function loginOrCreate(endpoint) {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ name: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    localStorage.setItem("currentUser", userName);
    modal.style.display = "none";
    localStorage.setItem("loggedIn", true);
    logInBtn.style.display = "none";
    document.getElementById("logOutBtn").style.display = "block";
    document.getElementById("loggedInUsername").style.display = "block";
    document.getElementById("loggedInUsername").textContent = userName;
  } else {
    const body = await response.json();
    //const modalEl = document.querySelector('#msgModal');
    alert("⚠ Error: " + String(body.msg));
    //const msgModal = new bootstrap.Modal(modalEl, {});
    //msgModal.show();
  }
}


  document.getElementById("logOutBtn").addEventListener("click", function() {
    localStorage.removeItem("currentUser");
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
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
      addToLeaderboard(username);
      localStorage.setItem("journal for " + username, existingItems);
      document.getElementById("journalInput").value = "";
    }
    
    
  });

  async function addToLeaderboard(username){
    // TODO: get the existing record for the username 

    const newRecord = {name: username}
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