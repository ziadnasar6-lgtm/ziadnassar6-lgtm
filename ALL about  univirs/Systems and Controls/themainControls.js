// ========== Zoz Academy JS ==========

// عناصر أساسية
const rank = document.getElementById("rank-level");
const rankMessage = document.getElementById("rank-message");
const translateBtn = document.getElementById("translate-btn");
const darkModeBtn = document.getElementById("darkmode-btn");
const viewRankBtn = document.getElementById("view-rank");
const startButtons = document.querySelectorAll(".start-btn");

// نظام الرتب
const ranks = ["Beginner", "Learner", "Smart Coder", "Pro Developer", "Math Master 👑"];
let currentRank = 0;
let coursesCompleted = 0;
const totalCourses = startButtons.length;

// 🧠 عند الضغط على كورس
startButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 400);

    coursesCompleted++;
    alert(`✅ You finished: ${btn.parentElement.querySelector("h3").textContent}`);

    // رفع الرتبة عند إكمال الكورسات
    if (coursesCompleted % totalCourses === 0) {
      currentRank = (currentRank + 1) % ranks.length;
      rank.textContent = ranks[currentRank];
      rank.style.color = "#f9b233";
    }
  });
});

// 🌙 الوضع الليلي
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// ================== 🌐 الترجمة ==================
let isArabic = false;

const translations = {
  en: {
    rankTitle: "👑 Rank",
    viewRank: "🔍 View Rank Info",
    translate: "🌐 Translate",
    darkMode: "🌙 Dark Mode",
    home: "🏠 Home",
    askChatwoo: "💬 Ask Chatwoo",
    progress: "📈 My Progress",
    settings: "⚙ Settings",
    intro: "🩵 1. Introduction to Computer Science",
    branches: "Systems & Controls",
    courses: "Intelligent Systems",
    readMore: "📘 Read More",
    startQuiz: "🎯 Start Intro Quiz",
    startLearning: "Start Learning"
  },
  ar: {
    rankTitle: "👑 المستوى",
    viewRank: "🔍 عرض المستوى",
    translate: "🌐 English",
    darkMode: "🌙 الوضع الليلي",
    home: "🏠 الرئيسية",
    askChatwoo: "💬 تحدث مع تشاتو",
    progress: "📈 تقدمي",
    settings: "⚙ الإعدادات",
    intro: "🩵 1. مقدمة في علوم الحاسب",
    branches: "الأنظمة والتحكم",
    courses: "الأنظمة الذكية",
    readMore: "📘 اقرأ المزيد",
    startQuiz: "🎯 ابدأ الاختبار",
    startLearning: "ابدأ التعلم"
  }
};

translateBtn.addEventListener("click", () => {
  isArabic = !isArabic;
  const lang = isArabic ? "ar" : "en";

  document.querySelector(".sidebar h2").textContent = translations[lang].rankTitle;
  viewRankBtn.textContent = translations[lang].viewRank;
  translateBtn.textContent = translations[lang].translate;
  darkModeBtn.textContent = translations[lang].darkMode;

  const links = document.querySelectorAll(".sidebar-links a");
  if (links[0]) links[0].textContent = translations[lang].home;
  if (links[1]) links[1].textContent = translations[lang].askChatwoo;
  if (links[2]) links[2].textContent = translations[lang].progress;
  if (links[3]) links[3].textContent = translations[lang].settings;

  const introTitle = document.querySelector(".intro-box h2");
  if (introTitle) introTitle.textContent = translations[lang].intro;

  const branchesTitle = document.querySelector(".branches h2");
  if (branchesTitle) branchesTitle.textContent = translations[lang].branches;

  const coursesTitle = document.querySelector(".courses h2");
  if (coursesTitle) coursesTitle.textContent = translations[lang].courses;

  const introButtons = document.querySelectorAll(".intro-buttons button");
  if (introButtons[0]) introButtons[0].textContent = translations[lang].readMore;
  if (introButtons[1]) introButtons[1].textContent = translations[lang].startQuiz;

  document.querySelectorAll(".start-btn").forEach(btn => {
    btn.textContent = translations[lang].startLearning;
  });
});

// 💬 عرض رسالة الرتبة
viewRankBtn.addEventListener("click", () => {
  rankMessage.textContent = `🎉 Your current rank is "${rank.textContent}". Keep going to unlock the next level!`;
  rankMessage.classList.toggle("show");
});
