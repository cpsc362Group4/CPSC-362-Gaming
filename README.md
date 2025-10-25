
# 🎮 CPSC-362 Group 4 Gaming Project  
### A collection of simple browser-based games built using HTML, CSS, and JavaScript

---

## 🧭 Table of Contents
- [Project Description](#project-description)
- [Installation Instructions](#installation-instructions)
- [Diagram / Visual Explanation](#diagram--visual-explanation)
- [Known Issues](#known-issues)
- [To-Do Items](#to-do-items)
- [Contributors](#contributors)

---

## 📖 Project Description
The **CPSC-362 Group 4 Gaming Project** is a collaborative software engineering assignment that showcases the principles of **DevOps**, **continuous integration**, and **team collaboration**.  
Our goal is to design multiple small, interactive browser games under a single platform, following good software development practices such as modularity, code reusability, and testing.

### Main Features
- Central main menu to access multiple mini-games  
- Individual HTML/CSS/JS files for each game (e.g., Blackjack, Tic-Tac-Toe, Flappy Bird clone)  
- Clean folder structure following MVC concepts  
- ESLint and HTMLHint for maintaining code quality  
- GitHub Actions for automated lint checks and testing  

---

## ⚙️ Installation Instructions

### For Developers
1. Clone the repository:
   ```bash
   git clone https://github.com/cpsc362Group4/CPSC-362-Gaming.git
   cd CPSC-362-Gaming
2. Open the folder in VS Code (or any preferred IDE).
3. Install dependencies (if any).
4. Run using the Live Server extension or simply open index.html in a browser.
5. To lint the project:
   ```bash
   npx eslint .
   npx htmlhint .
For Non-Developers

1. Download the repository ZIP or open it online.
2. Locate and open the index.html file in your web browser.
3. Click any game from the main menu to start playing — no installation required!

### 🧩 Diagram / Visual Explanation

High-Level Project Structure (MVC Overview)
```css
Main Menu
   ↓
Controller → Game Logic (Model)
   ↓
HTML/CSS UI (View)
```
Each mini-game is an independent module connected through the main menu interface.

### 🐞 Known Issues

- Some games may not scale properly on mobile devices.
- Audio files may not load in all browsers.
- Shared scoreboard feature still under development.

### 🧱 To-Do Items

- Add leaderboard tracking for all games
- Improve responsive layout for smaller screens
- Implement difficulty settings for each game
- Add sound effects and background music toggle
- Polish UI with consistent color themes


