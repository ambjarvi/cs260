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

user1.textContent = "NULL";
entry1.textContent = "NULL";
user2.textContent = "NULL";
entry2.textContent = "NULL";
user3.textContent = "NULL";
entry3.textContent = "NULL";
user4.textContent = "NULL";
entry4.textContent = "NULL";
user5.textContent = "NULL";
entry5.textContent = "NULL";

if(spot1 !== '0'){
    user1.textContent = spot1;
    entry1.textContent = localStorage.getItem(spot1);
}
if(spot2 !== '0'){
    user2.textContent = spot2
    entry2.textContent = localStorage.getItem(spot2);
} 
if(spot3 !== '0'){
    user3.textContent = spot3;
    entry3.textContent = localStorage.getItem(spot3);
} 
if(spot4 !== '0'){
    user4.textContent = spot4;
    entry4.textContent = localStorage.getItem(spot4);
} 
if(spot5 !== '0'){
    user5.textContent = spot5;
    entry5.textContent = localStorage.getItem(spot5);
}
