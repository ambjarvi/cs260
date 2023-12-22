import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

export function Home() {
    
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
  document.addEventListener("DOMContentLoaded", function() {
    logInBtn.addEventListener("click", function() {
        modal.style.display = "block";
      });
      
      logInto.addEventListener("click", function() {
        loginOrCreate(`/api/auth/login`);
      });
    
      signUp.addEventListener("click", function() {
        loginOrCreate(`/api/auth/create`);
      });
  });
  
 
 

 
 

  return (
    <main className='container-fluid bg-secondary text-center'>
        <div class="buttonElements">
        <li><button type="button" class="logInBtn" id="logInBtn">Log In/Sign Up</button></li>
            <li><button type="button" class="logOutBtn" id="logOutBtn">Log Out</button></li>
            <li><button type="button" class="loggedInUsername" id="loggedInUsername"></button></li>
    
        </div>
        
        <div id="logIn" class="popUpLogIn">
            <div class="logInElements">
                <form>
                    <label for="username">Username: </label>
                    <input type="text" name="username" id="username"/>
                    
                </form>
                <form>
                    <label for="password">Password: </label>
                    <input type="text" name="password" id="password"/>
                    
                </form>
            </div>
            <button class="close" id="logInto">Log In</button>
            <button class="close" id="signUp">Sign Up</button>
            
        </div>
        <form class="mainPage">
            <li class="mainPageElements"><label for="journalInput" class="questionAsked">What happened today?</label></li>
            <li class ="mainPageElements"><textarea id="journalInput" rows="2" cols="30" placeholder="Type here..."></textarea></li>
            <li class ="mainPageElements"><input type="submit" value="Log My Entry" id="logEntry"/></li>
            
            
        </form>
        <script src="home.js"></script>
    <script src="ideas.js"></script>
        
        
    </main>
  );
}