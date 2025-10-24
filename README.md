🎮 CPSC-362 Group 4 Gaming Project
A simple collection of browser-based games demonstrating DevOps and software engineering principles
🧭 Table of Contents

Project Description

Installation Instructions

Diagram / Visual Explanation

Known Issues

To-Do Items

Contributors

📖 Project Description

The CPSC-362 Group 4 Gaming Project is a collaborative software engineering assignment focused on developing a suite of simple web-based games, such as Blackjack, Tic-Tac-Toe, and Flappy Bird.
It serves as a demonstration of team collaboration, continuous integration, and DevOps workflows through GitHub.

The project applies software engineering concepts like:

MVC architecture to separate logic, UI, and control flow

Backlog and Kanban tracking for progress management

Linting and automation using ESLint/HTMLHint and GitHub Actions

Continuous development with shared team contributions

Main features:

Interactive HTML/CSS/JS-based mini-games

Central menu to access each game

Lightweight and beginner-friendly code structure

Modular organization for easy maintenance

⚙️ Installation Instructions
For Developers

Clone the repository:

git clone https://github.com/cpsc362Group4/CPSC-362-Gaming.git
cd CPSC-362-Gaming


Open the project in VS Code or your preferred IDE.

Use Live Server (or open index.html directly in a browser).

Run ESLint/HTMLHint to check for style and syntax errors:

npx eslint .  
npx htmlhint .

For Non-Developers

Visit the deployed version (if available) or open the index.html file in your browser.

Click a game from the main menu to play.

Enjoy simple, interactive gameplay — no setup required!

🧩 Diagram / Visual Explanation

Architecture (MVC Overview):

[ Main Menu ] → [ Controller ] → [ Game Logic (Model) ]
                       ↓
                  [ HTML / CSS UI (View) ]


Each game (e.g., Blackjack, Tic-Tac-Toe) follows a similar modular structure with its own HTML, CSS, and JS components.

🐞 Known Issues

Some games may not display properly on smaller screens.

Sound effects and animations may vary by browser.

Score tracking between games is still under development.

🧱 To-Do Items

 Implement shared leaderboard across all games

 Add unit tests for each game module

 Improve mobile responsiveness

 Add background music toggle

 Refine UI and color themes for consistency
