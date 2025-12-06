# 🎮 Camelot Arcade – CPSC 362 Gaming Project

Camelot Arcade is a browser-based collection of mini-games built for **CPSC 362 – Software Engineering**.  
The project features a fantasy-themed **main menu** that lets players choose from several classic games, all implemented using **HTML, CSS, and JavaScript**.  

The focus of the project is practicing **team collaboration**, **modular design**, and **DevOps fundamentals** such as linting and continuous integration.

---

## 🧭 Table of Contents

- [Overview](#overview)
- [Games Included](#games-included)
- [How to Run the Project](#how-to-run-the-project)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Code Quality (ESLint + GitHub Actions)](#code-quality-eslint--github-actions)
- [Known Limitations / Future Work](#known-limitations--future-work)
- [Contributors](#contributors)

---

## 📖 Overview

This project brings together several independent web-based mini-games under a unified **Camelot-themed main menu**.  
Each game exists in its own HTML file and operates independently, but the menu provides a cohesive arcade experience.

The goals for this assignment were:

- Implement multiple small software components within a single system
- Practice **requirements**, **design**, **iteration planning**, and **team communication**
- Use **Git**, **GitHub**, and **ESLint** to maintain code quality
- Introduce **CI/CD pipelines** with GitHub Actions

The main entry point is:

```
MainMenu.html
```

Opening that file loads the animated background, menu layout, and links to each game.

---

## 🕹 Games Included

All games run completely in the browser with no backend required.

### **1. Blackjack**
- Hit / Stand system  
- Dealer logic  
- Card value calculations  

### **2. Connect Four**
- Two-player grid game  
- Disc-dropping mechanics  
- Win detection (horizontal, vertical, diagonal)

### **3. Snake**
- Classic snake movement  
- Random food spawning  
- Collision game-over rules  

### **4. Othello (Reversi)**
- Flip-based gameplay  
- Valid move detection  
- Two-player mode  

### **5. Chess (Prototype)**
- Chessboard rendering  
- Basic piece movement  

### **6. Monopoly (Prototype)**
- Board rendering  
- Player turn rotation  
- Early logic implementation  

---

## 🚀 How to Run the Project

### ✔ Option 1 — Easiest (Open Locally)
1. Download or clone the repository  
2. Double-click **MainMenu.html**  
3. Select any game from the Camelot Arcade menu  

No server or special setup is needed.

---

### ✔ Option 2 — Run with VS Code Live Server (Recommended)
1. Open the folder in **VS Code**  
2. Install the **Live Server** extension  
3. Right-click **MainMenu.html** → “Open with Live Server”  

---

## 🗂 Project Structure

```
CPSC-362-Gaming/
├── MainMenu.html
├── testing.html
├── testing2.html
├── games/
│   ├── Blackjack.html
│   ├── ChessBoard_v1.html
│   ├── Monopoly.html
│   ├── OThelloPvP.html
│   ├── SnakeGame.html
│   └── connectfour.html
├── assets/
├── eslint.config.mjs
├── package.json
├── .github/
│   └── workflows/
│       └── lint.yml
└── docs/
    ├── ARCHITECTURE.md
    ├── FEATURES.md
    └── BACKLOG.md
```

---

## 🧰 Technology Stack

- HTML5  
- CSS3  
- JavaScript  
- Node.js (for tooling)  
- ESLint  
- GitHub Actions  

---

## ✅ Code Quality (ESLint + GitHub Actions)

The project uses an ESLint configuration that checks JavaScript and HTML files.  
GitHub Actions runs linting on every push or pull request.

---

## ⚠️ Known Limitations / Future Work

- Some games are prototypes  
- Mobile responsiveness varies  
- Potential improvements:
  - Leaderboard  
  - Sound system  
  - Difficulty settings  
  - Save system  
  - Better shared UI components  

---

## 🫡 Contributors

- Cody Nguyen  
- Joshua Kang  
- Jonathan  
- Arianna  
- Muhummad  
- Chase  
