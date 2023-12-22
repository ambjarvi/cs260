import React from 'react';

export function Leaderboard() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <form>
            <li><label for="dateInput">What day do you want to remember?</label></li>
            <li><input type="date" id="dateInput"/></li>
            <li><input type="submit" value="Remember this Day" id="dateBtn"/></li>
            <div id="pastEntry">
                <li id="displayDate"></li>
                <p id="journalEntry"></p>
            </div>
            
        </form>
        
    </main>
  );
}