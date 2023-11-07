
 if(localStorage.getItem("spot1") == null){
    localStorage.setItem("spot1", 0);
    localStorage.setItem("spot2", 0);
    localStorage.setItem("spot3", 0);
    localStorage.setItem("spot4", 0);
    localStorage.setItem("spot5", 0);
  }
  let loggedIn = false;
  const logInBtn = document.getElementById("logInBtn");
  const logInto = document.getElementById("logInto");
  var modal = document.getElementById("logIn");
  const signUp = document.getElementById("signUp");
  const userInputField = document.getElementById("journalInput");
  const storeInputButton = document.getElementById("logEntry");

  if(localStorage.getItem("loggedIn") !== null){
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
      alert("You need to log in or sign up before accessing the leaderboard.")
      document.getElementById("leaderboard").href = "index.html";
    }
  });

  logInBtn.addEventListener("click", function() {
    modal.style.display = "block";
  });
  
  logInto.addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    document.getElementById("username").textContent = "";
    document.getElementById("password").textContent = "";
    const loggedInValue = localStorage.getItem("username for " + username) || null;
    const realPassword = localStorage.getItem("password for " + username) || null;
    if(loggedInValue == null){
      alert("Wrong username");
    } else if (password == null || !(realPassword === password)){
      alert("Wrong password");
    } else {
      modal.style.display = "none";
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("currentUser", username);
      logInBtn.style.display = "none";
      document.getElementById("logOutBtn").style.display = "block";
      document.getElementById("loggedInUsername").style.display = "block";
      document.getElementById("loggedInUsername").textContent = username;
    }
  });

  signUp.addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    localStorage.setItem("username for " + username, username);
    localStorage.setItem("password for " + username, password);
    localStorage.setItem("record for " + username, 0);
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
    if(localStorage.getItem("currentUser") == null){
      alert("You need to log in before logging an entry!");
    } else {
      var username = localStorage.getItem("currentUser");
      const userValue = userInputField.value; 
      var currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const day = currentDate.getDate().toString().padStart(2, '0');
      const dateStr = year + "-" + month + "-" + day;
      var entry = dateStr + ": " + userValue + "\n";
      var existingItems = localStorage.getItem("journal for " + username);
      if(existingItems == null) {
        existingItems = entry;
      } else {
        existingItems += entry;
      }
      var entries = parseInt(localStorage.getItem("record for " + username), 10) + 1;
      console.log(entries);
      localStorage.setItem("record for " + username, entries);
      addToLeaderboard("record for " + username, entries);
      localStorage.setItem("journal for " + username, existingItems);
      document.getElementById("journalInput").value = "";
    }
    
    
  });

  function addToLeaderboard(username, entries){
    if(entries == '0'){
      return;
    } 
    if(localStorage.getItem(localStorage.getItem("spot1")) < entries){
      var tempStorage = localStorage.getItem("spot1");
      if(already(username)){
        return;
      }
      localStorage.setItem("spot1", username)
      console.log(tempStorage);
      console.log(username);
      addToLeaderboard(tempStorage, localStorage.getItem(tempStorage));
    } else if(localStorage.getItem(localStorage.getItem("spot2")) < entries){
      var tempStorage = localStorage.getItem("spot2");
      if(already(username)){
        return;
      }
      localStorage.setItem("spot2", username)
      if(tempStorage !== '0' && !(tempStorage === username)){
        addToLeaderboard(tempStorage, localStorage.getItem(tempStorage));
      }
      

    } else if(parseInt(localStorage.getItem(localStorage.getItem("spot3"))) < parseInt(entries)){
      var tempStorage = localStorage.getItem("spot3");
      if(already(username)){
        return;
      }
      localStorage.setItem("spot3", username)
      if(tempStorage !== 0 && tempStorage !== username){
        addToLeaderboard(tempStorage, localStorage.getItem(tempStorage));
      }
    } else if(parseInt(localStorage.getItem(localStorage.getItem("spot4"))) < parseInt(entries)){
      var tempStorage = localStorage.getItem("spot4");
      if(already(username)){
        return;
      }
      localStorage.setItem("spot4", username)
      if(tempStorage !== 0 && tempStorage !== username){
        addToLeaderboard(tempStorage, localStorage.getItem(tempStorage));
      }
    } else if(parseInt(localStorage.getItem(localStorage.getItem("spot5"))) < parseInt(entries)){
      var tempStorage = localStorage.getItem("spot5");
      if(already(username)){
        return;
      }
      localStorage.setItem("spot5", username)
      if(tempStorage !== 0 && tempStorage !== username){
        addToLeaderboard(tempStorage, localStorage.getItem(tempStorage));
      }
    }
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