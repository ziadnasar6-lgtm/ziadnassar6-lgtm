
// ==============================
// 📘 نظام التبويبات (Popup System)
// ==============================

// عناصر النافذة المنبثقة
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const closeBtn = document.querySelector(".close-btn");

// زر الإغلاق ❌
closeBtn.addEventListener("click", () => {
  closePopup();
});

// غلق بالضغط خارج المربع
window.addEventListener("click", (e) => {
  if (e.target === popup) closePopup();
});

// دالة الفتح
function openPopup(title, text) {
  popupTitle.textContent = title;
  popupText.textContent = text;
  popup.classList.add("show");
  popup.style.display = "flex";
  document.body.style.overflow = "hidden"; // لمنع التمرير أثناء الفتح
}

// دالة الغلق
function closePopup() {
  popup.classList.remove("show");
  setTimeout(() => {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  }, 250);
}

// ==============================
// 💾 بيانات كل كارد (شرح مطوّل)
// ==============================
const cardDetails = {
  frontend: {
    title: "Front-End Development",
    text: `


    
🌐 Full Detailed Explanation
💡 What Is Front-End Development?

Front-end development is the client-side part of web development — the side
 that runs inside your browser.
It’s responsible for the layout, colors, animations, buttons, forms, and 
all elements users interact with.

It combines:

HTML → the structure (like the skeleton of a web page).

CSS → the style (colors, fonts, layouts).

JavaScript → the logic (interactions, animations, data updates).

So whenever you click a button, scroll smoothly, or see a popup — that’s
 front-end code working.

🧠 Real-World Examples

E-commerce Website: Front-end controls how products are displayed, 
the cart updates instantly, and how filters or search bars respond.

Social Media App: Likes, comments, and infinite scroll are all handled by front-end JavaScript.

Online Form: When the form checks 
if your email is valid before sending it — that’s front-end validation.

🛠️ Common Tools & Frameworks

HTML5 / CSS3 / JavaScript (ES6+) — core building blocks

Frameworks/Libraries: React ⚛️, Vue.js, Angular

CSS Tools: Tailwind CSS, Bootstrap, SASS

Version Control: Git & GitHub

Build Tools: Vite, Webpack, npm, or Yarn

🎓 Learning Path (Step-by-Step)

Start with Basics
Learn HTML for structure and CSS for design.
→ Practice building small layouts (portfolio, landing pages).

Add Interactivity
Learn JavaScript to make your site dynamic (buttons, animations, events).

Responsive Design
Study how to make websites fit all devices (media queries, flexbox, grid).

Move to Frameworks
Learn React.js (most popular for modern apps).

Version Control & Deployment
Use GitHub for saving code and learn how to host your site on Netlify or Vercel.

Optional Advanced Topics

APIs (fetching data from servers)

Performance Optimization

TypeScript

UI/UX basics

🎯 Goal

To become a Front-End Developer capable of creating fast, modern, 
and beautiful interfaces that provide users
 with the best experience possible.

`




  },
  backend: {
    title: "Back-End Development",
    text: `

    🧠 Full Detailed Explanation
💡 What Is Back-End Development?

Back-end development focuses on what happens behind the scenes when you use a website or an app.
While the front-end shows the interface, the back-end powers
 it — processing requests, saving data, and delivering the right response.

For example:
When you log in to a site — the front-end sends your username and password to the back-end.
The back-end checks them in the database and sends back either “✅ success” or “❌ error”.

So, back-end development is all about logic, databases, and server communication.

🧩 Real-World Examples

Online Shopping: When you add items to your cart, the back-end saves that info and updates your total.

Social Media: Every time you post, like, or comment — the back-end stores and fetches that data.

Streaming Platforms: When Netflix loads your personalized
 movie list — it’s using a back-end algorithm connected to databases.

🛠️ Main Tools & Technologies
🔹 Languages & Frameworks

Node.js (JavaScript) → fast, great for modern web apps

Python (Django / Flask) → easy, clean syntax, perfect for beginners

PHP (Laravel) → common in WordPress and CMS sites

Java (Spring Boot) → powerful for enterprise systems

C# (.NET) → used for Windows and large-scale applications

🔹 Databases

SQL Databases: MySQL, PostgreSQL (structured data)

NoSQL Databases: MongoDB, Firebase (flexible data)

🔹 APIs & Communication

RESTful APIs

GraphQL

WebSockets (for real-time apps like chat systems)

🔹 Other Essentials

Authentication & Security (JWT, bcrypt)

Version Control (Git, GitHub)

Server Management (Linux, Docker, Cloud Platforms)

🎓 Learning Path (Step-by-Step)

Learn the Basics of Programming Logic
→ Understand variables, loops, functions, and conditionals.

Pick a Back-End Language
→ Start with Node.js or Python (Django is very beginner-friendly).

Understand How Servers Work
→ Learn about HTTP, requests, and responses.

Work with Databases
→ Practice CRUD operations (Create, Read, Update, Delete) using MySQL or MongoDB.

Build APIs
→ Create your own API to connect with a front-end.

Add Authentication & Security
→ Learn how to manage users safely (login, tokens, encryption).

Deploy Your Application
→ Use platforms like Render, Vercel, or AWS to publish your app online.

Optional Advanced Topics

Docker & Containers

Microservices Architecture

Cloud Databases (Firebase, Supabase)

🎯 Goal

To become a Back-End Developer capable of building 
reliable servers, secure databases, and smooth communication between the user
 and the system — the true “engine” of any web or mobile app.


`



  },
  database: {
    title: "Database & Data Management",
    text: `

Full Detailed Explanation
💡 What Is a Database?

A database is where all your application’s information lives.
Think of it like a giant, organized spreadsheet — but much smarter and faster.
When you log into Instagram, post a photo, or comment on a video, everything 
you do is stored and retrieved from a database.

So, databases are essential for saving user data, app settings, transactions, and
 any form of digital information.

🧩 Real-World Examples

Banking Systems: Store account balances, transactions, and user identities.

E-Commerce Sites: Keep product info, prices, customer data, and orders.

Social Media: Save posts, comments, likes, and user profiles.

Streaming Services: Organize thousands of movies, songs, and user preferences.

Every app that remembers something you did — uses a database.

🛠️ Main Types of Databases
1️⃣ Relational Databases (SQL)

Data is stored in tables with rows and columns — like Excel sheets.
Each table is linked to others through relationships (like connecting users with their orders).

Examples:

MySQL

PostgreSQL

SQLite

Microsoft SQL Server

Language Used: SQL (Structured Query Language)

📘 Example:

SELECT * FROM users WHERE age > 18;


This retrieves all users over 18 years old from a table.

2️⃣ Non-Relational Databases (NoSQL)

Data is stored in flexible formats like documents, key-value pairs, or graphs.
Used in modern apps that need speed and scalability.

Examples:

MongoDB (document-based)

Firebase (cloud-based)

Redis (in-memory key-value store)

📘 Example (MongoDB):

db.users.find({ age: { $gt: 18 } });


This does the same thing but in a more flexible, JSON-like structure.

🔐 Core Concepts in Data Management

CRUD Operations: Create, Read, Update, Delete

Indexes: Speed up search operations

Primary Keys & Foreign Keys: Define relationships between data

Normalization: Organize data to avoid duplication

Transactions: Ensure data accuracy (especially in financial systems)

Backups & Security: Protect against data loss or attacks

🧰 Tools You’ll Use

MySQL Workbench – visual interface for SQL databases

MongoDB Compass – manage and visualize NoSQL data

Firebase Console – real-time cloud database

pgAdmin – for PostgreSQL management

ORM Tools: Prisma, Sequelize, Django ORM — make working with databases easier through code

🎓 Learning Path (Step-by-Step)

Understand Data Basics
→ Learn what tables, rows, columns, and records mean.

Learn SQL Language
→ Practice basic queries: SELECT, INSERT, UPDATE, DELETE.

Work with Relational Databases
→ Start with MySQL or PostgreSQL.

Move to NoSQL
→ Learn MongoDB or Firebase for flexible data.

Study Relationships & Normalization
→ Learn how to connect tables efficiently.

Handle Real Projects
→ Build a small app (e.g., a login system, todo list, or e-commerce database).

Learn Security & Backup Techniques
→ Understand how to protect and recover data.

Explore Advanced Topics

Database optimization

Cloud databases (Firebase, AWS RDS)

Big data and analytics basics

🎯 Goal

To become a Database Developer or Data Engineer who can design reliable data structures, 
manage huge amounts of information, and ensure fast, secure access — the “memory” of any software system.


`
  },
  logic: {
    title: "Software Logic & Algorithms",
    text: `

Full Detailed Explanation
💡 What Are Logic and Algorithms?

When you write code, you’re teaching the computer how to think.
Software logic defines rules and decisions, while algorithms define how to perform a task effectively.
For example:

When a user clicks “Login”, your program needs to:
Check if the user exists.
Verify the password.
Grant or deny access.
That’s logic + algorithm in action. Logic decides what to do, algorithms decide how to do it.

🧩 Real-World Examples

ATM Machine:
Algorithm decides how to check your balance, verify PIN, and dispense cash.
Logic ensures it won’t allow withdrawals greater than your account balance.

Google Search:
The algorithm ranks billions of pages using mathematical rules (PageRank).
Logic decides which results are most relevant to your keywords.

E-commerce:
Algorithms recommend products (“You might also like…”),
Logic applies discounts or stock limitations during checkout.

🔢 Core Concepts You Must Know
🧠 1. Conditional Logic

Makes decisions using if, else if, and else.

if (age >= 18) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

🔁 2. Loops

Repeat tasks automatically.

for i in range(5):
    print("Hello")  # Runs 5 times

⚙️ 3. Functions

Reusable blocks of code that perform a specific job.

function add(a, b) {
  return a + b;
}

🧮 4. Data Structures

Efficient ways to organize data.

Arrays → list of values

Stacks & Queues → order-based

Trees & Graphs → hierarchical connections

Hash Tables → fast lookups

🧭 5. Algorithms

Step-by-step problem-solving methods, e.g.:

Sorting: Bubble Sort, Merge Sort

Searching: Binary Search

Pathfinding: Dijkstra’s Algorithm

Recursion: Function calling itself

⚙️ Real-Life Analogy

Think of cooking a meal:

The logic: “If we have eggs, make an omelet. If not, make pancakes.”

The algorithm: The recipe — step-by-step instructions to cook it perfectly.

Without logic → your code doesn’t decide.
Without algorithms → your code doesn’t know how to execute that decision.

🧰 Tools & Languages for Practicing

Python: Great for learning algorithms due to simple syntax

C++ / Java: Used in competitive programming
JavaScript: For logical front-end or game-based problems
Visual Tools: Scratch or Flowgorithm for beginners
🎓 Learning Path (Step-by-Step)
Start with Basic Programming Logic
Understand if/else, loops, and variables in Python or JavaScript.
Learn Functions & Recursion
Practice breaking big problems into smaller parts.
Study Data Structures
Arrays, linked lists, stacks, queues, trees, and graphs.
Master Common Algorithms
Sorting, searching, recursion, and greedy algorithms.
Analyze Efficiency
Learn about Big O Notation — how fast your algorithm runs.
Solve Real Problems
Practice on platforms like LeetCode, HackerRank, or Codeforces.
Apply in Projects
Use algorithms in real apps (e.g., sorting tasks, route finding, AI logic).

🎯 Goal

To become a problem solver — a developer who can think like a computer:
break problems into steps, find patterns, and design 
efficient, logical solutions for any challenge.


`
  },
  ai: {
    title: "AI & Automation",
    text: `
    

Perfect 🔥 — here’s the complete explanation of Artificial Intelligence (AI) in the same format: short summary → 
full breakdown → real-world examples → learning roadmap.

🤖 3-Line Summary

Artificial Intelligence (AI) is the science of making computers think, learn, and make decisions like humans.
It uses data, algorithms, and logic to recognize patterns, solve problems, and predict outcomes.
AI powers everything from chatbots and self-driving cars to voice assistants and recommendation systems.

🧠 Full Detailed Explanation
💡 What Is AI?

AI stands for Artificial Intelligence, which means teaching machines to think and act intelligently.
Instead of giving step-by-step instructions, you train computers using data and examples so they can make their own decisions.

AI learns from experience, just like humans — the more data it sees, the smarter it gets.

🧩 Real-World Examples

Chatbots (like me 🤭):
Understand language, respond to questions, and hold conversations naturally.
Self-Driving Cars:
Use AI to detect traffic lights, pedestrians, and other vehicles to drive safely.
Netflix & YouTube:
Recommend videos or movies based on what you’ve watched before — using machine learning algorithms.
Healthcare AI:
Analyzes X-rays, predicts diseases, and helps doctors make accurate diagnoses.
Smart Assistants:
Alexa, Siri, and Google Assistant — they understand your voice, process meaning, and perform actions.

⚙️ How AI Works (Simplified)

Input Data → Images, text, voice, or numbers.
Processing & Learning → AI analyzes data, finds patterns, and builds models.
Decision Making → Based on what it learned, it predicts or acts.
Feedback → Learns from mistakes and improves accuracy over time.

🧮 Core Areas of AI
1. 🤓 Machine Learning (ML)

The heart of AI — systems learn automatically from data instead of manual programming.
Example: Detecting spam emails by analyzing thousands of examples.

2. 🧠 Deep Learning

Advanced ML using neural networks that mimic the human brain.
Example: Image recognition (how Facebook recognizes faces).

3. 🗣️ Natural Language Processing (NLP)

Allows computers to understand and generate human language.
Example: ChatGPT, Google Translate, and voice assistants.

4. 👁️ Computer Vision

Enables computers to “see” and interpret images or videos.
Example: Face unlock on your phone or automatic image tagging.
5. 🎮 Reinforcement Learning

AI learns by trial and error, improving decisions based on rewards.
Example: Robots learning to walk, or AI beating humans in games like Chess and Go.
Start with Python — it’s simple, powerful, and has great AI libraries.

🪜 2. Study Mathematics for AI

You’ll need:

Linear Algebra → matrices, vectors
Probability → for prediction
Calculus → for model optimization
Statistics → for data understanding

🪜 3. Learn Machine Learning Fundamentals

Understand types of ML:

Supervised (trained with labeled data)

Unsupervised (finds patterns in unlabeled data)

Reinforcement (learns by feedback)

🪜 4. Work with Real Data

Use datasets from Kaggle or UCI Machine Learning Repository.
🪜 5. Build Projects
Start small:

Spam detector
Movie recommendation system

Handwritten digit recognizer (MNIST dataset)

Then move to advanced:

Chatbot

Face recognition

AI game agent

🪜 6. Learn AI Ethics
Understand responsible AI use — fairness, privacy, and avoiding bias.

🚀 Future of AI
AI is shaping the future of every industry — from education and medicine to finance and art.
Learning AI means learning how to create intelligent, data-driven systems that can change the world.

🎯 Final Goal
To become an AI Developer or Data Scientist who can design, train, 
and deploy smart systems that learn and adapt — not just follow rules.


`
  }
};

// ==============================
// 🧩 فتح النافذة عند الضغط
// ==============================
document.querySelectorAll(".zozBT").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.target;
    const info = cardDetails[key];
    if (info) openPopup(info.title, info.text);
  });
});
