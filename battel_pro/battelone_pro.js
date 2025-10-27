// ===============================
// ⚔️ Battle Effects + AI Voice
// ===============================

// 🔊 موسيقى الخلفية

document.addEventListener("click", function() {
  const music = document.getElementById("bgMusic");
  music.play();
}, { once: true });


// 🎙️ AI Voice مقاتل
function aiSpeak(text) {
  fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini-tts",
      voice: "alloy",
      input: text
    })
  })
  .then(res => res.blob())
  .then(blob => {
    const audio = new Audio(URL.createObjectURL(blob));
    audio.play();
  })
  .catch(err => console.log("TTS Error:", err));
}

// ===============================
// 💨 مشهد افتتاحي مع دخان كثيف
// ===============================
window.addEventListener("load", () => {
  startIntroSequence();
});

function startIntroSequence() {
  // Overlay
  const overlay = document.createElement("div");
  overlay.className = "intro-overlay";
  overlay.innerHTML = `<h1 class="intro-text">⚔️ The Battle is about to begin!</h1>`;
  document.body.appendChild(overlay);

  // موسيقى وخطاب المعلق

const bgMusic = document.getElementById("bgMusic");
document.addEventListener("click", () => {
  bgMusic.play();
}, { once: true });

  setTimeout(() => aiSpeak("Warriors, prepare for battle!"), 500);

  // دخان كثيف
  createSmokeEffect(250); // عدد الجزيئات 400 → كثافة أعلى

  // اختفاء المشهد بعد 8 ثواني
  setTimeout(() => {
    overlay.classList.add("fade-out");
    setTimeout(() => overlay.remove(), 1500);
  }, 4000);
}

// ===============================
// 💨 دالة رسم الدخان
// ===============================
function createSmokeEffect(particleCount = 200) {
  const canvas = document.createElement("canvas");
  canvas.id = "smokeCanvas";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 200,
      size: Math.random() * 80 + 50, // أكبر حجم لجعل الدخان كثيف
      speedY: Math.random() * 2 + 0.5, // سرعة متغيرة
      opacity: Math.random() * 0.4 + 0.3 // شفافية أكثر كثافة
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
      gradient.addColorStop(0, `rgba(255,255,200,${p.opacity})`);
      gradient.addColorStop(1, `rgba(0,0,0,0)`);
      ctx.fillStyle = gradient;
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      p.y -= p.speedY;
      if (p.y + p.size < 0) p.y = canvas.height + 100;
    }
    requestAnimationFrame(draw);
  }
  draw();
}


















// ===============================
// 🔊 تحكم بالموسيقى
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const volUp = document.getElementById("volUp");
  const volDown = document.getElementById("volDown");

  if (volUp && volDown) {
    volUp.addEventListener("click", () => { bgMusic.volume = Math.min(1, bgMusic.volume + 0.1); });
    volDown.addEventListener("click", () => { bgMusic.volume = Math.max(0, bgMusic.volume - 0.1); });
  }
});
