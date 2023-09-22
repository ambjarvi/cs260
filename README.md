# Startup Specification
## Remember my Day

### Elevator Pitch

I'm sure you've been told before that you need to journal. After all, you don't want to forget the best years of your life! The problem is: who has the time? What do you even write? With 'Remember my Day' you can follow one of our quick prompts, and in a minute or less write something significant that you can look back on forever. Journaling is what you make of it! It can be about writing what you had for lunch, small things you learned, or a new friend you made. It's time to start remembering your day! 

### Sketch-up

***rough sketch of the remembermyday.click website***

<img width="528" alt="homePage" src="https://github.com/ambjarvi/cs260/assets/65629654/a842d5c2-f3b7-4578-9572-da7fb817d833">

Home Screen includes access to 4 pages, including itself

1. **First Screen:** *Remember Today*, the user can respond to a randomly generated question, ask for a different question, or log in using a pop-up window. After pressing log in on the right-hand corner, a pop-up window appears where a returning user can log in or a new user can create an account.
1. **Second Screen:** *My Journal*, gives the existing user access to access previous journal entries, using a calendar system
1. **Third Screen:** *Why Remember?*, gives a short bio of the creator, and the purpose behind the site
1. **Fourth Screen:** *Remember with Friends!*, allows users to share memories with other users, using a code-system (unique 'friend code').

### Key Features
- Secure login over HTTPS
- Randomly generated questions from a large set to respond to
- Ability to log text and save it to the user
- Logged text is stored permanently unless deleted by the user
- Each user has a unique 'friend code' to share/receive memories from other users 
- Ability to share text with other users in real-time
  
### Technologies

I will implement the required technologies in these listed ways.

- **HTML** - Will use 4 HTML pages, and div to create pop-ups in the Home Screen and other screens as necessary. 
- **CSS** - Coded to appear clear and simple in mobile and computer-sized display. 
- **JavaScript** - Provides log-in/sign-in options with pop-ups, ability to type in entries, shows different past journal entries, gives randomized questions, and gives shared memories   
- **Service** - Backend service that helps with:
  - login
  - retrieving entries 
  - submitting entries
  - retrieving randomized question
  - retrieving and comparing 'friend code'
- **DB** - Store users, entires, randomized questions and 'friend-codes' in database.
- **Login** - Register and login users. Credentials securely stored in database. Can't enter journal entries, view old ones, or share/revcieve memories unless authenticated.
- **WebSocket** - 
- **React** - 
