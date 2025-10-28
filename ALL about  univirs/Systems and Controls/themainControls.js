


// ========== Zoz Academy JS ==========

// عناصر أساسية
const rank = document.getElementById("rank-level");
const rankMessage = document.getElementById("rank-message");
const translateBtn = document.getElementById("translate-btn");
const darkModeBtn = document.getElementById("darkmode-btn");
const viewRankBtn = document.getElementById("view-rank");
const startButtons = document.querySelectorAll(".start-btn");

// رتب الرتب
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

    // كل ما المستخدم يخلص كل الكورسات يترفع مستوى
    if (coursesCompleted % totalCourses === 0) {
      currentRank = (currentRank + 1) % ranks.length;
      rank.textContent = ranks[currentRank];
      rank.style.color = "#f9b233";
    }
  });
});

// 🌙 تفعيل الوضع الليلي
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// 🌐 زر الترجمة
let isArabic = false;
translateBtn.addEventListener("click", () => { 
  isArabic = !isArabic;

  if (isArabic) {
    translateBtn.textContent = "🌐 English";
    document.querySelector(".intro-box h1").textContent = "ليه بندرس الرياضة في هندسة البرمجيات";
    document.querySelector(".courses h2").textContent = "كورسات الرياضيات";
    document.querySelector(".branches h2").textContent = "فروع الرياضيات";
  } else {
    translateBtn.textContent = "🌐 Arabic";
    document.querySelector(".intro-box h1").textContent = "Why We Study Mathematics";
    document.querySelector(".courses h2").textContent = "Mathematics Courses";
    document.querySelector(".branches h2").textContent = "Mathematics Branches";
  }
});

// 💬 عند الضغط على الرانك تظهر رسالة في السايد بار
viewRankBtn.addEventListener("click", () => {
  rankMessage.textContent = `🎉 Your current rank is "${rank.textContent}". Keep going to unlock the next level!`;
  rankMessage.classList.toggle("show");
});



