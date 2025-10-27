


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
    startLearning: "Start Learning",
    descriptions: [
      "Teaches programming and controlling small devices like Arduino and Raspberry Pi. Crucial for developing robots, smart devices, and Internet of Things (IoT) systems.",
      "Studies binary logic, logic gates, and sequential circuits. It’s essential for understanding computers, microcontrollers, and digital system design.",
      "Focuses on how current and voltage flow through electrical circuits. Forms the foundation for understanding hardware and embedded programming applications.",
      "Covers analyzing and transforming audio, video, and digital signals. Important for data processing, computer vision, and voice or image recognition."
    ]
  },
  ar: {
    startLearning: "ابدأ التعلم",
    descriptions: [
      "بتتعلم فيها إزاي تبرمج وتتحكم في أجهزة صغيرة زي الأردوينو والراسبيري باي — الأساس لأي مشروع روبوت أو جهاز ذكي 🔥",
      "هتفهم المنطق الرقمي والبوابات المنطقية، وازاي الكمبيوتر بيفكر بالأصفار والواحدات 💡",
      "هتتعلم ازاي الكهربا بتتحرك في الدواير وتتعامل مع الفولت والتيار — الأساس لأي مهندس إلكترونيات ⚡",
      "بتغوص في عالم معالجة الصوت والصورة — زي إزاي الكمبيوتر بيفهم الصوت أو الصورة 🎧📸"
    ]
  }
};

translateBtn.addEventListener("click", () => {
  isArabic = !isArabic;
  const lang = isArabic ? "ar" : "en";

  // غيّر نص زرار الترجمة نفسه
  translateBtn.textContent = isArabic ? "🌐 English" : "🌐 Translate";

  // غير أوصاف المواد كلها
  const descriptions = document.querySelectorAll(".course-card p");
  descriptions.forEach((desc, i) => {
    if (translations[lang].descriptions[i]) {
      desc.textContent = translations[lang].descriptions[i];
    }
  });

  // غير زرار Start Learning
  document.querySelectorAll(".start-btn").forEach(btn => {
    btn.textContent = translations[lang].startLearning;
  });
});

// 💬 عرض رسالة الرتبة
viewRankBtn.addEventListener("click", () => {
  rankMessage.textContent = `🎉 Your current rank is "${rank.textContent}". Keep going to unlock the next level!`;
  rankMessage.classList.toggle("show");
});
