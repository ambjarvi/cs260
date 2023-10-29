document.getElementById("dateBtn").addEventListener("click", function() {
    event.preventDefault();
    
    var dateInput = document.getElementById("dateInput");
    var selectedDate = dateInput.value;
    var displayDate = document.getElementById("displayDate");
    displayDate.innerText = "Journal Entries from: " + selectedDate;
    //at this part it will call memory and display past entries
    var journalEntry = document.getElementById("journalEntry");
    journalEntry.innerText = "No entries to show.";
})