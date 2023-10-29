
  document.getElementById("logInBtn").addEventListener("click", function() {
    
    var modal = document.getElementById("logIn");
    modal.style.display = "block";
  });
  
  document.getElementById("logInto").addEventListener("click", function() {
    var modal = document.getElementById("logIn");
    modal.style.display = "none";
  });

  document.getElementById("signUp").addEventListener("click", function() {
    var modal = document.getElementById("logIn");
    modal.style.display = "none";
  });
  
  document.getElementById("giveIdea").addEventListener("click", function() {
    event.preventDefault();
    
    var outputElement = document.getElementById("question");
    var newText = "random question"
    outputElement.innerHTML = newText;
  });
