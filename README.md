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