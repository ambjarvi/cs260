import React from 'react';

export function Leaderboard() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <form>
            <li>
                <h1>Leaderboard</h1>
                <h4>These pros have entered the MOST journal entries for consecutive days:</h4>
            </li>
            <li>
                <table>
                    <tr className="bold" id="labels">
                        <td className="rank">#</td>
                        <td className="user">User</td>
                        <td className="consecutiveDays">Streak (days)</td>
                    </tr>
                    <tr id="num1">
                        <td className="rank">1</td>
                        <td className="user" id="user1"></td>
                        <td className="consecutiveDays" id="entry1"></td>
                    </tr>
                    <tr id="num2">
                        <td className="rank">2</td>
                        <td className="user" id="user2"></td>
                        <td className="consecutiveDays" id ="entry2"></td>
                    </tr>
                    <tr id="num3">
                        <td className="rank">3</td>
                        <td className="user" id="user3"></td>
                        <td className="consecutiveDays" id="entry3"></td>
                    </tr>
                    <tr id="num4">
                        <td className="rank">4</td>
                        <td className="user" id="user4"></td>
                        <td className="consecutiveDays" id="entry4"></td>
                    </tr>
                    <tr id="num5">
                        <td className="rank">5</td>
                        <td className="user" id="user5"></td>
                        <td className="consecutiveDays" id="entry5"></td>
                    </tr>
                </table>
            </li>
            <li><h5 id="personalStreak"></h5></li>
        </form>
      
        
    </main>
  );
}