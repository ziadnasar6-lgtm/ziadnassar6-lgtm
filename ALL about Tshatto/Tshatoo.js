
/* =========================================================
 🧠 Tshattto Pro Max 10.0 – Part 1
 Author: Zozo & Tshattto AI
 Description: Core System (Sound, Memory, Mode, Control)
========================================================= */

// ========== INITIAL SETUP ==========
console.log("🤖 Tshattto Pro Max 10.0 Loaded | Part 1 Active");

// DOM Elements
const codeInput = document.getElementById("codeInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const responseBox = document.getElementById("response");
const systemStatus = document.getElementById("systemStatus");

// Control Buttons
const volumeUpBtn = document.getElementById("volumeUp");
const volumeDownBtn = document.getElementById("volumeDown");
const stopVoiceBtn = document.getElementById("stopVoice");
const toggleModeBtn = document.getElementById("toggleMode");
const clearBtn = document.getElementById("clearCode");
const switchLangBtn = document.getElementById("switchLanguage");

// ========== VARIABLES ==========
let currentMode = "light";
let currentLang = "en-US"; // Default English
let currentVolume = 1.0; // Default volume
let isSpeaking = false;
let userName = localStorage.getItem("tshatttoUserName") || null;

// ========== SPEECH SYNTHESIS ==========
const synth = window.speechSynthesis;

// Speak Function
function speak(text) {
  if (!text) return;
  if (isSpeaking) synth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = currentLang;
  utter.volume = currentVolume;
  synth.speak(utter);
  isSpeaking = true;

  utter.onend = () => {
    isSpeaking = false;
  };
}

// Stop Voice
function stopSpeaking() {
  synth.cancel();
  isSpeaking = false;
  systemStatus.textContent = "🟢 Ready";
  systemStatus.className = "status ready";
}

// Volume Control
function adjustVolume(change) {
  currentVolume = Math.min(1, Math.max(0, currentVolume + change));
  const message = `Volume: ${(currentVolume * 100).toFixed(0)}%`;
  speak(message);
  console.log(message);
}

// ========== MODE TOGGLE ==========
function toggleMode() {
  document.body.classList.toggle("dark");
  currentMode = document.body.classList.contains("dark") ? "dark" : "light";
  const msg = currentMode === "dark" ? "Dark mode activated" : "Light mode activated";
  speak(msg);
}

// ========== LANGUAGE SWITCH ==========
function switchLanguage() {
  if (currentLang === "en-US") {
    currentLang = "de-DE";
    speak("Sprache auf Deutsch umgestellt.");
  } else {
    currentLang = "en-US";
    speak("Language switched to English.");
  }
}

// ========== CLEAR CODE ==========
function clearCode() {
  codeInput.value = "";
  responseBox.textContent = "";
  speak("Code area cleared.");
}

// ========== NAME MEMORY ==========
function greetUser() {
  if (!userName) {
    userName = prompt("Hey there! What's your name?");
    if (userName) {
      localStorage.setItem("tshatttoUserName", userName);
      speak(`Nice to meet you, ${userName}.`);
    } else {
      speak("Hello, friend!");
    }
  } else {
    speak(`Welcome back, ${userName}.`);
  }
}

// ========== STATUS HANDLER ==========
function setStatus(state) {
  if (state === "busy") {
    systemStatus.textContent = "🔴 Analyzing...";
    systemStatus.className = "status busy";
  } else {
    systemStatus.textContent = "🟢 Ready";
    systemStatus.className = "status ready";
  }
}

// ========== EVENT LISTENERS ==========
document.addEventListener("DOMContentLoaded", () => {
  greetUser();
  setStatus("ready");
});

volumeUpBtn?.addEventListener("click", () => adjustVolume(0.1));
volumeDownBtn?.addEventListener("click", () => adjustVolume(-0.1));
toggleModeBtn?.addEventListener("click", toggleMode);
clearBtn?.addEventListener("click", clearCode);
switchLangBtn?.addEventListener("click", switchLanguage);
analyzeBtn?.addEventListener("click", () => {
  setStatus("busy");
  setTimeout(() => {
    speak("Code analysis initialized.");
    responseBox.textContent = "🔍 Tshattto is analyzing your code...";
    setStatus("ready");
  }, 1000);
});





/* =========================================================
 🧠 Tshattto Pro Max 10.0 – Part 1 (continued)
 Advanced Memory + Typing Effect + UI Animations
========================================================= */

// ========== TYPING EFFECT FOR RESPONSES ==========
function typeResponse(text) {
  responseBox.textContent = "";
  let index = 0;
  const typingSpeed = 25;

  const typer = setInterval(() => {
    responseBox.textContent += text[index];
    index++;
    if (index >= text.length) {
      clearInterval(typer);
      responseBox.scrollTop = responseBox.scrollHeight;
    }
  }, typingSpeed);
}

// ========== SIMULATED LOADING ANIMATION ==========
function showLoadingAnimation(message = "Analyzing your code...") {
  responseBox.textContent = message;
  let dots = 0;
  const loading = setInterval(() => {
    dots = (dots + 1) % 4;
    responseBox.textContent = message + ".".repeat(dots);
  }, 400);

  // stop animation automatically after 3 seconds
  setTimeout(() => {
    clearInterval(loading);
  }, 3000);
}

// ========== MEMORY EXTENSION ==========
function rememberUserPreference(key, value) {
  localStorage.setItem(key, value);
}

function getUserPreference(key) {
  return localStorage.getItem(key);
}

function clearMemory() {
  localStorage.clear();
  speak("All memory has been reset.");
  alert("All saved data cleared!");
}

// ========== SMOOTH BUTTON FEEDBACK ==========
const allButtons = document.querySelectorAll("button");
allButtons.forEach(btn => {
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.95)";
  });
  btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1)";
  });
});

// ========== DYNAMIC STATUS ANIMATION ==========
// function pulseStatus() {
//   systemStatus.animate([
//     { transform: "scale(1)", opacity: 1 },
//     { transform: "scale(1.1)", opacity: 0.7 },
//     { transform: "scale(1)", opacity: 1 }
//   ], {
//     duration: 1500,
//     iterations: Infinity
//   });
// }
// pulseStatus();


// 🟢 Get the element first
const systemStatu = document.getElementById("systemStatus");

// ========== DYNAMIC STATUS ANIMATION ==========
function pulseStatus() {
  systemStatus.animate([
    { transform: "scale(1)", opacity: 1 },
    { transform: "scale(1.1)", opacity: 0.7 },
    { transform: "scale(1)", opacity: 1 }
  ], {
    duration: 1500,
    iterations: Infinity
  });
}

pulseStatus();


// ========== WELCOME ANIMATION ==========
function introAnimation() {
  responseBox.style.opacity = "0";
  responseBox.style.transition = "opacity 1.5s ease-in-out";
  setTimeout(() => {
    responseBox.style.opacity = "1";
    typeResponse("🤖 Tshattto Pro Max initialized successfully.\nSystem ready for code analysis.");
    speak("Tshattto system is now online and ready.");
  }, 1200);
}
window.addEventListener("load", introAnimation);

// ========== ADVANCED ANALYZE HANDLER ==========
function analyzeCode() {
  const code = codeInput.value.trim();
  if (code === "") {
    speak("Please enter some code first.");
    typeResponse("⚠️ No code detected. Please write some code and try again.");
    return;
  }

  setStatus("busy");
  showLoadingAnimation();

  setTimeout(() => {
    const lines = code.split("\n").length;
    const langGuess = detectLanguage(code);
    const msg = `✅ Analysis complete.\nDetected language: ${langGuess}\nTotal lines: ${lines}\n\nPreparing insights...`;
    typeResponse(msg);
    speak(`Analysis complete. I think this is ${langGuess} code with ${lines} lines.`);
    setStatus("ready");
  }, 3000);
}

// Replace button event listener
analyzeBtn.removeEventListener("click", () => {});
analyzeBtn.addEventListener("click", analyzeCode);

// ========== SIMPLE LANGUAGE DETECTOR ==========
function detectLanguage(code) {
  const patterns = {
    html: /<[^>]+>/,
    css: /\{[\s\S]*?\}/,
    javascript: /(function|const|let|=>|console\.log)/,
    python: /(def |print\(|import )/,
    cpp: /(int |#include|std::)/,
    php: /<\?php|echo|->/
  };

  for (let lang in patterns) {
    if (patterns[lang].test(code.toLowerCase())) {
      return lang.toUpperCase();
    }
  }
  return "UNKNOWN";
}

// ========== SMOOTH SCROLL ON RESPONSE ==========
responseBox.addEventListener("DOMSubtreeModified", () => {
  responseBox.scrollTop = responseBox.scrollHeight;
});

// ========== FINAL READY MESSAGE ==========
setTimeout(() => {
  console.log("✅ Tshattto Core Ready");
  speak("System fully operational. You may begin coding now.");
}, 2500);




