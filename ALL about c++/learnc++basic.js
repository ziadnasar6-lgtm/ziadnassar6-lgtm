

// ========== بيانات كل درس ==========
const lessons = {
  1: {
    title: "🎯 C++ Lesson 1: Introduction",
    desc: "Learn how to write your first C++ program.",
    link: "https://www.youtube.com/watch?v=XDuWyYxksXU&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=1",
    task: "Write a C++ program that prints 'Hello, World!'",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, World!";\n    return 0;\n}`
  },




  2: {
    title: "💻 C++ Lesson 2: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },






  3: {
    title: "🔁 C++ Lesson 3: Loops & Conditions",
    desc: "Learn about if-statements and loops in C++.",
    link: "https://www.youtube.com/watch?v=fvOAbDMzB2E&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=3",
    task: "Write a loop that prints numbers from 1 to 10.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    for(int i=1; i<=10; i++) {\n        cout << i << " ";\n    }\n    return 0;\n}`
  },
  4: {
    title: "🧠 C++ Lesson 4: Functions",
    desc: "Learn how to write and call your own functions.",
    link: "https://www.youtube.com/watch?v=8jLOx1hD3_o&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=4",
    task: "Write a function that returns the sum of two numbers.",
    solution: `#include <iostream>\nusing namespace std;\nint add(int a, int b) {\n    return a + b;\n}\nint main() {\n    cout << add(5, 7);\n    return 0;\n}`
  },
  5: {
    title: "📦 C++ Lesson 5: Arrays",
    desc: "Understand how to use arrays to store multiple values.",
    link: "https://www.youtube.com/watch?v=QeKkxWj6p3s&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=5",
    task: "Create an array of 5 numbers and print their average.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {1,2,3,4,5};\n    int sum = 0;\n    for(int i=0;i<5;i++) sum += arr[i];\n    cout << "Average = " << sum/5.0;\n    return 0;\n}`
  },





  
  6: {
    title: "💻 C++ Lesson 6: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },

  
  7: {
    title: "💻 C++ Lesson 7: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },

  
  8: {
    title: "💻 C++ Lesson 2: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },

  
  9: {
    title: "💻 C++ Lesson 2: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },

  
  10: {
    title: "💻 C++ Lesson 2: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },

  
  11: {
    title: "💻 C++ Lesson 2: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },

  
  12: {
    title: "💻 C++ Lesson 2: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },

  
  13: {
    title: "💻 C++ Lesson 2: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },

  
  14: {
    title: "💻 C++ Lesson 2: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },

  

  
  15: {
    title: "💻 C++ Lesson 2: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },

  
  16: {
    title: "💻 C++ Lesson 2: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },

  
  17: {
    title: "💻 C++ Lesson 2: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },

  
  18: {
    title: "💻 C++ Lesson 2: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },

  
  19: {
    title: "💻 C++ Lesson 2: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },

  
  20: {
    title: "💻 C++ Lesson 2: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },

  
  21: {
    title: "💻 C++ Lesson 2: Variables & Data Types",
    desc: "Understand how to declare and use variables in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    task: "Create a program that stores your name and prints it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    string name = "Ziad";\n    cout << "My name is " << name;\n    return 0;\n}`
  },







































};

// ========== عناصر الصفحة ==========
const circles = document.querySelectorAll(".lesson-circle");
const lessonTitle = document.getElementById("lesson-title");
const lessonDesc = document.getElementById("lesson-desc");
const lessonLink = document.getElementById("lesson-link");
const lessonTask = document.getElementById("lesson-task");
const codeEditor = document.getElementById("code-editor");
const submitBtn = document.getElementById("submit-btn");
const resultBox = document.getElementById("result-box");
const resultMessage = document.getElementById("result-message");
const correctSolution = document.getElementById("correct-solution");
const doneBtn = document.getElementById("done-btn");

const dots = document.querySelectorAll(".dot");
const rankText = document.querySelector(".sidebar p strong:last-child");

let currentLesson = 1;
let attempts = 0;
let completedLessons = 0;

// ========== تحميل بيانات الدرس ==========
function loadLesson(num) {
  const l = lessons[num];
  if (!l) return;

  currentLesson = num;
  attempts = 0;

  lessonTitle.textContent = l.title;
  lessonDesc.textContent = l.desc;
  lessonLink.href = l.link;
  lessonTask.textContent = l.task;
  codeEditor.value = "";
  resultBox.classList.add("hidden");
  doneBtn.classList.add("hidden");
  correctSolution.textContent = "";
  resultMessage.textContent = "";

  const box = document.querySelector(".lesson-box");
  box.style.opacity = 0;
  box.style.transform = "scale(0.9)";
  setTimeout(() => {
    box.style.opacity = 1;
    box.style.transform = "scale(1)";
  }, 200);
}

// ========== تصحيح الواجب ==========
submitBtn.addEventListener("click", () => {
  const code = codeEditor.value.trim();
  const solution = lessons[currentLesson].solution.trim();

  attempts++;

  if (code === solution) {
    resultMessage.textContent = "✅ Great job! Your solution is correct!";
    resultMessage.style.color = "#00ff88";
    correctSolution.textContent = "";
    doneBtn.classList.remove("hidden");
  } else if (attempts >= 2) {
    resultMessage.textContent = "❌ You made two attempts. Here's the correct solution:";
    resultMessage.style.color = "#ff5555";
    correctSolution.textContent = solution;
    doneBtn.classList.remove("hidden");
  } else {
    resultMessage.textContent = "⚠️ Try again, your code isn't correct yet.";
    resultMessage.style.color = "#ffaa00";
  }

  resultBox.classList.remove("hidden");
});

// ========== زرار Done ==========
// doneBtn.addEventListener("click", () => {
//   // ========== زرار Done ==========
// doneBtn.addEventListener("click", () => {
//   const next = currentLesson + 1;
//   const nextCircle = document.querySelector(`.lesson-circle[data-lesson="${next}"]`);

//   // 🔹 تحديث التقدم
//   completedLessons++;
//   updateProgress();

//   if (nextCircle) {
//     nextCircle.classList.remove("locked");
//     nextCircle.classList.add("active");

//     // شيل النشط عن الباقي
//     circles.forEach(c => {
//       if (c !== nextCircle) c.classList.remove("active");
//     });

//     // حمّل الدرس الجديد
//     loadLesson(next);

//     // ✅ انزل تلقائيًا لحد الدايرة الجديدة
//     nextCircle.scrollIntoView({ behavior: "smooth", block: "center" });

//     // 🔥 حركة أنيمشن عند التفعيل
//     nextCircle.animate(
//       [
//         { transform: "scale(1)", boxShadow: "0 0 0px red" },
//         { transform: "scale(1.3)", boxShadow: "0 0 25px orange" },
//         { transform: "scale(1)", boxShadow: "0 0 0px red" }
//       ],
//       { duration: 500, easing: "ease-in-out" }
//     );
//   } else {
//     alert("🔥 Congratulations! You finished all lessons!");
//   }
// });

// ========== تحديث التقدم في الشريط الجانبي ==========a
function updateProgress() {
  const levelIndex = Math.min(Math.floor(completedLessons / 8), dots.length - 1);

  dots.forEach((dot, i) => {
    if (i <= levelIndex) {
      dot.style.background = "#ff0040"; // 🔥 تنوير أحمر عند نهاية كل 8 دروس
    }
  });

  if (completedLessons >= 40) {
    const rankElem = document.querySelector(".sidebar p:nth-of-type(3)");
    if (rankElem) rankElem.innerHTML = "<strong>Rank:</strong> Intermediate 🧠";
  }
}

// ========== الضغط على الدواير ==========
// circles.forEach(circle => {
//   circle.addEventListener("click", () => {
//     if (circle.classList.contains("locked")) return;
//     circles.forEach(c => c.classList.remove("active"));
//     circle.classList.add("active");
//     const num = parseInt(circle.dataset.lesson);
//     loadLesson(num);
//     circle.animate(
//       [
//         { transform: "scale(1)", boxShadow: "0 0 0px #007bff" },
//         { transform: "scale(1.2)", boxShadow: "0 0 25px #00ff99" },
//         { transform: "scale(1)", boxShadow: "0 0 0px #007bff" }
//       ],
//       { duration: 500, easing: "ease-in-out" }
//     );
//   });
// });


circles.forEach(circle => {
  circle.addEventListener("click", () => {
    if (circle.classList.contains("locked")) return;
    circles.forEach(c => c.classList.remove("active"));
    circle.classList.add("active");
    const num = parseInt(circle.dataset.lesson);
    loadLesson(num);

    // ✅ حركة بسيطة عند الضغط
    circle.animate(
      [
        { transform: "scale(1)", boxShadow: "0 0 0px #007bff" },
        { transform: "scale(1.2)", boxShadow: "0 0 25px #00ff99" },
        { transform: "scale(1)", boxShadow: "0 0 0px #007bff" }
      ],
      { duration: 500, easing: "ease-in-out" }
    );

    // ✅ هنا الإضافة الجديدة:
    const targetSection = document.querySelector(".lesson-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ========== تشغيل أول درس ==========
loadLesson(1);










/* =============================
   🔥 NEW FEATURES by Tshatoo 🔥
   ============================= */

// 🟢 1. حفظ التقدّم في LocalStorage
function saveProgress() {
  localStorage.setItem("cpp_progress", currentLesson);
  localStorage.setItem("cpp_completed", completedLessons);
}

function loadProgressOnStart() {
  const savedLesson = localStorage.getItem("cpp_progress");
  const savedCompleted = localStorage.getItem("cpp_completed");

  if (savedLesson) {
    currentLesson = parseInt(savedLesson);
    completedLessons = parseInt(savedCompleted) || 0;
    loadLesson(currentLesson);

    // تحديث الألوان للدرس المكتمل
    for (let i = 0; i < completedLessons; i++) {
      circles[i].classList.remove("active", "locked");
      circles[i].classList.add("completed");
    }
    circles[currentLesson - 1].classList.add("active");
  } else {
    loadLesson(1);
  }
}

// 🟢 نربطها بحيث تتنفذ لما الصفحة تفتح
window.addEventListener("load", loadProgressOnStart);


// 🟡 2. تمييز الدرس المكتمل ✅
function markLessonCompleted(num) {
  if (circles[num - 1]) {
    circles[num - 1].classList.remove("active");
    circles[num - 1].classList.add("completed");
  }
  saveProgress();
}

// ✳️ غيّر في مكان زرار الـ Done (في نفس ملفك)
doneBtn.addEventListener("click", () => {
  markLessonCompleted(currentLesson);
  completedLessons++;

  // فتح الدرس اللي بعده
  if (circles[currentLesson]) {
    circles[currentLesson].classList.remove("locked");
    circles[currentLesson].classList.add("active");
    currentLesson++;
    loadLesson(currentLesson);
    showEncouragement(); // ← استدعاء الميزة الثالثة هنا
  } else {
    alert("🎉 You finished all lessons! Excellent work!");
  }

  updateProgress();
  saveProgress();
});


// 🟣 3. رسالة تشجيع بعد كل إنجاز 🎉
function showEncouragement() {
  const messages = [
    "🔥 Great job, Ziad! Keep going!",
    "🚀 You’re mastering C++ step by step!",
    "💪 Awesome! Lesson unlocked!",
    "⭐ Keep shining, future developer!",
    "🎯 Perfect! Next lesson awaits!"
  ];

  // إنشاء عنصر الرسالة
  const popup = document.createElement("div");
  popup.className = "encouragement-popup";
  popup.textContent = messages[Math.floor(Math.random() * messages.length)];
  document.body.appendChild(popup);

  // اختفاء تلقائي بعد 3 ثوانٍ
  setTimeout(() => {
    popup.classList.add("fade-out");
    setTimeout(() => popup.remove(), 600);
  }, 3000);
}
