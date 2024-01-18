# Install

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`

# MathWars

MathWars is an exciting and interactive web application designed specifically for elementary school students to enhance their math skills through play. With a colorful and engaging interface, MathWars offers a variety of entertaining math challenges that make learning enjoyable. Students can compete with friends, track their progress, and explore different math topics in a playful and educational environment. Make math practice a thrilling adventure with MathWars – where learning meets fun for elementary learners!

Link to project: https://mathwars-a069d8c7d704.herokuapp.com/


![MathWars Gif](<MathWars Gif - Made with Clipchamp.gif>)

# How It's Made:

Tech used: HTML, CSS, JavaScript, Node.js, Express, MongoDB, EJS, Passport.js

Frontend

The frontend of MathWars is built using modern web technologies to deliver a seamless and visually appealing user experience. Key frontend technologies include:

HTML5: Providing the structure for the web pages.
CSS3: Styling the application and ensuring a responsive design for various screen sizes.
JavaScript (ES6+): Implementing the interactive features and game logic.

Backend

MathWars leverages a backend server to handle user authentication, store high scores, and manage game data. The backend is powered by:

Node.js: Executing server-side JavaScript code.
Express.js: A lightweight web application framework for Node.js, simplifying the creation of robust APIs.
MongoDB: A NoSQL database for storing user information, high scores, and other relevant data.
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, facilitating interaction with the database.

Game Logic

The core game logic is implemented in JavaScript, making extensive use of asynchronous programming to handle user input, generate math problems, and update the game state in real-time. The game engine ensures a dynamic and responsive experience for players.

# Current Optimizations & Updates:

MathWars is continuously evolving to provide an optimized and enjoyable experience for players. Here are some recent optimizations and updates:

Performance Improvements
I've implemented various performance optimizations to enhance the overall responsiveness and speed of the MathWars game. These optimizations include:

Code Refactoring: Streamlining and improving code efficiency to reduce load times and enhance gameplay responsiveness.

User Interface Enhancements
MathWars has undergone updates to its user interface, aiming to provide a more intuitive and visually appealing experience. Notable UI enhancements include:

Responsive Design: Ensuring that MathWars adapts seamlessly to different screen sizes, making the game accessible on various devices.
Visual Feedback: Incorporating enhanced visual feedback for correct and incorrect answers to provide a more engaging gaming experience.

Bug Fixes
As part of my commitment to delivering a bug-free experience, I have addressed various reported issues and fixed bugs to ensure a smooth and error-free gameplay environment.

Future Features

Highscore Leaderboard
One of the exciting features in the pipeline is the introduction of a highscore leaderboard. Players will be able to see how their scores compare to others, fostering healthy competition and encouraging players to strive for the top spot.

Multiplayer Sessions
I'm working on incorporating multiplayer sessions, allowing entire classes or groups to join and compete against each other in real-time. This feature will enable collaborative learning and friendly competition within a classroom setting.