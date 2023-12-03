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
1. **Fourth Screen:** *Remember with Friends!*, gives a leadershipboard showing who has posted the most journal entries for the most days consecutively.

A sequence diagram that shows how people would put a journal entry in the backend

<img width="355" alt="Screenshot 2023-09-22 153759" src="https://github.com/ambjarvi/cs260/assets/65629654/e85228bb-6e4a-4a74-85a5-14c1552d1885">

### Key Features
- Secure login over HTTPS
- Randomly generated questions from a large set to respond to
- Ability to log text and save it to the user
- Logged text is stored permanently unless deleted by the user
- Leadership board showing who has posted the most journal entries
  
### Technologies

I will implement the required technologies in these listed ways.

- **HTML** - Will use 4 HTML pages, and div to create pop-ups in the Home Screen and other screens as necessary. 
- **CSS** - Coded to appear clear and simple in mobile and computer-sized display. 
- **JavaScript** - Provides log-in/sign-in options with pop-ups, ability to type in entries, shows different past journal entries, gives questions, and gives leaderboard   
- **Service** - Backend service that helps with:
  - login
  - retrieving entries 
  - submitting entries
  - retrieving question
  - retrieving and showing leaderboard
- **DB** - Store users, entires, questions and journal 'scores' in database.
- **Login** - Register and login users. Credentials securely stored in database. Can't enter journal entries, view old ones, or share/revcieve memories unless authenticated.
- **WebSocket** - a leadership board shows who has entered the most journal entries for consecutive days
- **React** - application ported to use the react web framework



## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - four HTML pages that represent the ability to login/give entries, view journal entries, about page and leaderboard.
- **Links** - The home page automatically links to the entries page, about page, leaderboard and vice versa.
- **Text** - the about page has blocks of text.
- **Images** - the about page has pictures. 
- **Login** - button to open login module, username/password text input, sign up and log in buttons.
- **Database** - The journal entries and random questions represent data in database.
- **WebSocket** - The count of journaling results (leaderboard) represent realtime data.

## CSS deliverable

For this deliverable I styled my website.

- **Header, footer, and main content body**
- **Navigation elements** - I dropped the underlines and changed the color for anchor elements, and put hover elements.
- **Responsive to window resizing** - My app looks great on all window sizes and devices
- **Application elements** - Used good contrast and whitespace
- **Application text content** - Consistent fonts
- **Application images** - photos go on different sides in about page

## JavaScript deliverable

For this deliverable I implemented by JavaScript so that the application works for a multiple users. I also added placeholders for adding random questions.

- **login** - When you press enter or the login button it opens and module, and as you log in the user is stored localStorage and allows you to go to other pages.
- **database** - Displayed the journal entries and leaderboard. Currently this is stored and retrieved from local storage, but it will be replaced with the database data later.
- **WebSocket** - I used the function to periodically increase a random vote count. This will be replaced with WebSocket messages later.
- **application logic** - The entry number change based up the user's entries.

## Service deliverable

For this deliverable I added backend endpoints that receives votes and returns the leadership totals.

- **Node.js/Express HTTP service** - Hopefully I did this right. 
- **Static middleware for frontend** - I am not sure if I did this right.
- **Calls to third party endpoints** - ''
- **Backend service endpoints** - added!
- **Frontend calls service endpoints** - I believe I did this right.
  
## DB deliverable

For this deliverable I stored the record of journaling in the database.

- **MongoDB Atlas database created** - created!
- **Endpoints for data** - My endpoints process the data and send it to Mongo.
- **Stores data in MongoDB** - done!

## Login deliverable

For this deliverable I associate the journal entries/records with the logged in user.

- **User registration** - Creates a new account in the database.
- **existing user** - Stores the new journal entry under the same user if the user already exists.
- **Use MongoDB to store credentials** - Stores both user and their record #.
- **Restricts functionality** - You cannot log an entry or go to other pages w/o logging in successfully.
## WebSocket deliverable

For this deliverable I used webSocket to add a chat feature to create user interaction while journaling

- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - All chats from users display in real time
