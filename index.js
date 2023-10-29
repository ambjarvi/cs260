
  document.getElementById("logInBtn").addEventListener("click", function() {
    var modal = document.getElementById("logIn");
    modal.style.display = "block";
  });
  
  document.addEventListener("logInto", function(event) {
    var modal = document.getElementById("logIn");
    modal.style.display = "none";
  });

  document.addEventListener("signUp", function(event) {
    var modal = document.getElementById("logIn");
    modal.style.display = "none";
  });