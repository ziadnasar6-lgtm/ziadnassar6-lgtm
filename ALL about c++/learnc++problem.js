
// ========== بيانات كل درس ==========
const lessons = {
  1: {
    title: "🎯 Lesson 1: Introduction to C++",
    desc: "Learn how to write and run your first C++ program.",
    link: "https://www.youtube.com/watch?v=8jLOx1hD3_o",
    task: "Write a program that prints 'Hello, World!'",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, World!";\n    return 0;\n}`
  },
  2: {
    title: "💡 Lesson 2: Variables & Data Types",
    desc: "Understand variables, constants, and data types in C++.",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
    task: "Create a variable for your age and print it.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    int age = 20;\n    cout << "My age is " << age;\n    return 0;\n}`
  },
  3: {
    title: "🔁 Lesson 3: Loops & Conditions",
    desc: "Learn to use if-statements and loops effectively.",
    link: "https://www.youtube.com/watch?v=fvOAbDMzB2E",
    task: "Write a loop that prints numbers from 1 to 10.",
    solution: `#include <iostream>\nusing namespace std;\nint main() {\n    for(int i=1; i<=10; i++) {\n        cout << i << " ";\n    }\n    return 0;\n}`
  },
  // باقي الدروس بنفس التنسيق لحد 30
};

const circles = document.querySelectorAll(".fire-circle");
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

let currentLesson = 1;
let attempts = 0;
let completedLessons = parseInt(localStorage.getItem("completedLessons")) || 0;

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

  // حركة دخول الصندوق
  const box = document.querySelector(".lesson-box");
  box.style.opacity = 0;
  box.style.transform = "scale(0.9)";
  setTimeout(() => {
    box.style.opacity = 1;
    box.style.transform = "scale(1)";
  }, 200);
}

// ========== تصحيح الكود ==========



// ========== تصحيح الكود (ذكي) ==========
submitBtn.addEventListener("click", async () => {
  const userCode = codeEditor.value.trim();
  const lesson = lessons[currentLesson];
  const expectedOutput = getExpectedOutput(lesson.solution);
  attempts++;

  if (!userCode) {
    alert("⚠️ Write your code first!");
    return;
  }

  // تحليل أولي للكود قبل التشغيل
  const feedback = analyzeCode(userCode, lesson);
  if (feedback) {
    resultBox.classList.remove("hidden");
    resultMessage.textContent = feedback;
    resultMessage.style.color = "#ffaa00";
    return;
  }

  resultBox.classList.remove("hidden");
  resultMessage.textContent = "⏳ Checking your solution...";
  resultMessage.style.color = "#ffaa00";

  try {
    // 🧠 تشغيل الكود فعليًا أونلاين باستخدام Piston API
    const response = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: "cpp",
        version: "10.2.0",
        files: [{ content: userCode }]
      })
    });

    const result = await response.json();
    const output = result.run.output ? result.run.output.trim() : "";

    // مقارنة ذكية للناتج
    if (compareOutputs(output, expectedOutput)) {
      resultMessage.textContent = "✅ Correct output! Great job!";
      resultMessage.style.color = "#00ff88";
      correctSolution.textContent = "";
      doneBtn.classList.remove("hidden");
    } else if (attempts >= 2) {
      resultMessage.textContent = "❌ Output incorrect. Here's the correct solution:";
      resultMessage.style.color = "#ff5555";
      correctSolution.textContent = lesson.solution;
      doneBtn.classList.remove("hidden");
    } else {
      resultMessage.textContent = "⚠️ Output not matching yet. Try again!";
      resultMessage.style.color = "#ffaa00";
    }

    // حفظ عدد المحاولات الفاشلة
    if (!compareOutputs(output, expectedOutput)) {
      let wrongAttempts = JSON.parse(localStorage.getItem("wrongAttempts") || "{}");
      wrongAttempts[currentLesson] = (wrongAttempts[currentLesson] || 0) + 1;
      localStorage.setItem("wrongAttempts", JSON.stringify(wrongAttempts));
    }

  } catch (err) {
    resultMessage.textContent = "❌ Error: Cannot run the code right now.";
    resultMessage.style.color = "#ff3333";
    console.error(err);
  }
});


// 🔍 دالة لاستخراج الناتج المتوقع من الحل الصحيح
function getExpectedOutput(solutionCode) {
  if (solutionCode.includes("Hello, World")) return "Hello, World!";
  if (solutionCode.includes("My age is")) return "My age is 20";
  if (solutionCode.includes("for(int i=1")) return "1 2 3 4 5 6 7 8 9 10";
  return "";
}


// 🔁 مقارنة ذكية بين ناتجين بناءً على التشابه بنسبة مئوية
function compareOutputs(a, b) {
  const cleanA = a.trim().toLowerCase().replace(/\s+/g, " ");
  const cleanB = b.trim().toLowerCase().replace(/\s+/g, " ");

  if (cleanA === cleanB) return true; // تطابق تام ✅
  const similarity = stringSimilarity(cleanA, cleanB);
  return similarity >= 0.8; // قبول لو التشابه ≥ 80%
}


// 🧮 دوال حساب التشابه (Levenshtein Distance)
function stringSimilarity(str1, str2) {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  const longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  const same = editDistance(longer, shorter);
  return (longerLength - same) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1[i - 1] !== s2[j - 1])
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}


// 🧩 تحليل الكود لمعرفة الالتزام بمحتوى الدرس
function analyzeCode(userCode, lesson) {
  if (lesson.title.includes("Loop") && !userCode.includes("for") && !userCode.includes("while"))
    return "⚠️ Your code should include a loop (for/while).";
  if (lesson.title.includes("Variable") && !userCode.includes("int") && !userCode.includes("float"))
    return "⚠️ Try declaring a variable as instructed.";
  if (!userCode.includes("main"))
    return "⚠️ Missing main() function.";
  return null;
}



// ========== إنهاء الدرس والانتقال ==========
// doneBtn.addEventListener("click", () => {
//   const next = currentLesson + 1;
//   const nextCircle = document.querySelector(`.fire-circle[data-lesson="${next}"]`);

//   if (nextCircle) {
//     nextCircle.classList.remove("locked");
//     nextCircle.classList.add("active");
//     circles.forEach(c => {
//       if (c !== nextCircle) c.classList.remove("active");
//     });
//     loadLesson(next);
//   }

//   completedLessons++;
//   localStorage.setItem("completedLessons", completedLessons);
//   updateProgress();
// });





doneBtn.addEventListener("click", () => {
  const next = currentLesson + 1;
  const nextCircle = document.querySelector(`.fire-circle[data-lesson="${next}"]`);

  if (nextCircle) {
    nextCircle.classList.remove("locked");
    nextCircle.classList.add("active");
    circles.forEach(c => {
      if (c !== nextCircle) c.classList.remove("active");
    });
    loadLesson(next);

    // ⬆️ السطر ده هو الجديد
    nextCircle.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  completedLessons++;
  localStorage.setItem("completedLessons", completedLessons);
  localStorage.setItem("lastLesson", next);
  updateProgress();
});


// ========== تحديث التقدم ==========
function updateProgress() {
  const levelIndex = Math.min(Math.floor(completedLessons / 6), dots.length - 1);
  dots.forEach((dot, i) => {
    if (i <= levelIndex) {
      dot.style.background = "#ff0040";
    }
  });
}

// ========== الضغط على الدايرة ==========
circles.forEach(circle => {
  circle.addEventListener("click", () => {
    if (circle.classList.contains("locked")) return;
    circles.forEach(c => c.classList.remove("active"));
    circle.classList.add("active");
    const num = parseInt(circle.dataset.lesson);
    loadLesson(num);

    // حركة
    circle.animate(
      [
        { transform: "scale(1)", boxShadow: "0 0 0px red" },
        { transform: "scale(1.2)", boxShadow: "0 0 25px orange" },
        { transform: "scale(1)", boxShadow: "0 0 0px red" }
      ],
      { duration: 400, easing: "ease-in-out" }
    );

    const targetSection = document.querySelector(".lesson-section");
    if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// ========== تحميل أول درس ==========
// loadLesson(1);
const savedLesson = parseInt(localStorage.getItem("lastLesson")) || 1;
loadLesson(savedLesson);

// فك القفل عن الدواير لحد آخر درس وفعّل آخر دايرة
for (let i = 1; i <= savedLesson; i++) {
  const circle = document.querySelector(`.fire-circle[data-lesson="${i}"]`);
  if (circle) {
    circle.classList.remove("locked");
    if (i === savedLesson) circle.classList.add("active");
  }
}

updateProgress();




