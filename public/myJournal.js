
document.getElementById("dateBtn").addEventListener("click", function(event) {
    event.preventDefault();
    var username = localStorage.getItem("currentUser");
    var selectedDate = document.getElementById("dateInput").value;
      var existingItems = localStorage.getItem("journal for " + username);
    var displayDate = document.getElementById("displayDate");
    if(selectedDate == ""){
        alert("No date selected");
    } else {
        displayDate.innerText = "Journal Entries:" + selectedDate;
    
        var journalEntry = document.getElementById("journalEntry");
        if(existingItems == null){
            journalEntry.innerText = "No entries to show.";
        } else {
            journalEntry.innerText = existingItems;
    }
    }
    
    
})