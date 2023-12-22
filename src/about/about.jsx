import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';

export function About() {
  return (
    <main className='container-fluid bg-secondary text-center'>
  <ul className="nav-bar">
    <li><a className="nav-link" href="#whyRem">Why Remember?</a></li>
    <li><a className="nav-link" href="#inspiration">Inspiration</a></li>
    <li><a className="nav-link" href="#aboutMe">About me</a></li>
  </ul>
  <form>
    <ul>
      <li>
        <div className="grid" id="whyRem">
          <div className="column1">
            <h1>Why Remember?</h1>
            <p><br />I'm sure you've been told before that you need to journal. <br /><br />After all, you don't want to forget the best years of your life! The problem is: who has the time? What do you even write? With 'Remember Your Day' you can follow one of our quick prompts, and in a minute or less write something significant that you can look back on forever. <br /><br />Journaling is what you make of it! It can be about writing what you had for lunch, small things you learned, or a new friend you made. <br />It's time to start remembering your day!</p>
          </div>
          <div className="column2">
            <img src="pictures/angelo-casto-gb3sQuG9SCQ-unsplash.jpg" height="425" className="wrap" alt="Description" />
          </div>
        </div>
      </li>
      <li>
        <div className="grid" id="inspiration">
          <div className="column1">
            <img src="pictures/alex-moliski-pBFZf7sx7Ew-unsplash.jpg" height="800" className="wrap" alt="Description" />
          </div>
          <div className="column2">
            <h1>The Inspiration</h1>
            <p><br />The idea for the ‘Remember Your Day’ website came from a talk from an Apostle of the Church of Jesus Christ of Latter-Day Saints, Elder Henry B. Eyring. He spoke on the importance of remembrance when it came to faith in Christ and familiar relationships. When he was a young father, he discovered the importance that journaling could play in his life and for his family and faith. He says, that one night,</p>
            <p className="quote">“Although I was tired, I took out some paper and began to write. And as I did, I understood the message I had heard in my mind. I was supposed to record for my children to read, someday in the future, how I had seen the hand of God blessing our family … I wrote down a few lines every day for years. I never missed a day no matter how tired I was or how early I would have to start the next day. Before I would write, I would ponder this question: ‘Have I seen the hand of God reaching out to touch us or our children or our family today?’ As I kept at it, something began to happen. As I would cast my mind over the day, I would see evidence of what God had done for one of us that I had not recognized in the busy moments of the day. As that happened, and it happened often, I realized that trying to remember had allowed God to show me what He had done.” </p>
            <p>Maybe sometimes, we are tired. We don’t feel like we have time to remember the day we lived. But when we think about our future, can we afford to forget it? Whether you want to grow closer to Christ, become more meaningful with the things you do, or create a record for your posterity, creating meaningful time to remember can change your life, as well as those to come.</p>
            <p>Want to read the full talk from Elder Eyring? <a href="https://www.churchofjesuschrist.org/study/general-conference/2007/10/o-remember-remember?lang=eng ">Check it out!</a></p>
          </div>
        </div>
      </li>
      <li>
        <div className="grid" id="aboutMe">
          <div className="column1">
            <h1>About Me</h1>
            <p><br />Hi! My name's Amber, I love everything about life, especially trying new things! While serving as a missionary for the Church of Jesus Christ in Peru, I tested my limits by exploring and adapting to a whole new culture! During my mission, I developed the habit of writing in my journal daily! Writing from my perspective, the days turned into weeks, and into a story! I am a big believer that everyone has a story, and it deserves to be written! </p>
            <p>Now that I'm a college student, finding the time is hard. Between every assignment, shift at work, and the sliver of social life, I found it difficult to continue my beloved hobby! That's when I was inspired (by <a href="https://www.churchofjesuschrist.org/study/general-conference/2007/10/o-remember-remember?lang=eng ">this talk</a>) to write a short sentence about my day on my monthly calendar. I might not have a full 30 minutes, but I do have 10 seconds. That's why I love this site! Whether you want to create big journal entries, or only a sentence or two, this application is for you! </p>
            <p>One of my strongest beliefs is the power of remembrance. I know that God is in the intricate details of my life, and I can feel it every time I take a pen to paper and give Him a second to show me. Journaling has changed my life, and I hope this easy-to-manage platform can help you create a simple habit that can make your life more joyful and purposeful!</p>
          </div>
          <div className="column2">
            <img src="pictures/amberAboutMe.jpg" height="650" className="wrap" alt="Description" />
          </div>
        </div>
      </li>
    </ul>
  </form>
</main>

  );
}