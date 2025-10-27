


/* ===========================================================
   Tshattto Pro Max 10 – PART 3A (Advanced Memory & Interaction)
   ~150 lines (safe, offline, localStorage-based "learning")
   =========================================================== */

(() => {
  console.log("⚡ Tshattto Part 3A loaded");

  // ---- Query DOM (defensive: if not found, create minimal fallback) ----
  const $ = (sel) => document.querySelector(sel);
  const codeInput = $("#codeInput") || (() => {
    const ta = document.createElement("textarea");
    ta.id = "codeInput"; document.body.appendChild(ta); return ta;
  })();
  const analyzeBtn = $("#analyzeBtn") || (() => {
    const b = document.createElement("button"); b.id = "analyzeBtn"; b.textContent = "Analyze"; document.body.appendChild(b); return b;
  })();
  const responseBox = $("#response") || (() => { const d = document.createElement("div"); d.id = "response"; document.body.appendChild(d); return d; })();
  const systemStatus = $("#systemStatus") || (() => { const s = document.createElement("div"); s.id = "systemStatus"; s.className = "status ready"; document.body.prepend(s); return s; })();
  const controls = document.querySelector(".controls") || (() => { const c = document.createElement("div"); c.className = "controls"; document.body.insertBefore(c, document.body.firstChild); return c; })();

  // ---- Storage keys and defaults ----
  const KEY = "tshattto_v10";
  const defaults = {
    userName: null,
    preferredLang: "en-US",
    experience: 0,
    analyses: 0,
    lastSeen: null
  };
  function loadState() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? Object.assign({}, defaults, JSON.parse(raw)) : Object.assign({}, defaults);
    } catch (e) { console.warn("loadState err", e); return Object.assign({}, defaults); }
  }
  function saveState(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { console.warn("saveState err", e); }
  }
  let state = loadState();

  // ---- Small UI widgets (language label + xp badge) ----
  let langLabel = $("#tsh-lang-label");
  if (!langLabel) {
    langLabel = document.createElement("span");
    langLabel.id = "tsh-lang-label";
    langLabel.style.marginLeft = "8px";
    langLabel.style.fontWeight = "600";
    controls.appendChild(langLabel);
  }
  let xpBadge = $("#tsh-xp-badge");
  if (!xpBadge) {
    xpBadge = document.createElement("span");
    xpBadge.id = "tsh-xp-badge";
    xpBadge.style.marginLeft = "12px";
    xpBadge.style.fontSize = "0.95em";
    xpBadge.style.opacity = "0.85";
    controls.appendChild(xpBadge);
  }

  function updateWidgets() {
    langLabel.textContent = `Voice: ${state.preferredLang === "en-US" ? "English" : "Deutsch"}`;
    xpBadge.textContent = `XP: ${state.experience} • Analyses: ${state.analyses}`;
  }
  updateWidgets();

  // ---- small util: localized responses ----
  const texts = {
    greet: {
      "en-US": (name) => name ? `Welcome back, ${name}!` : "Hello! I'm Tshattto — ready to analyze.",
      "de-DE": (name) => name ? `Willkommen zurück, ${name}!` : "Hallo! Ich bin Tshattto — bereit zur Analyse."
    },
    deleted: { "en-US": "Code deleted.", "de-DE": "Code gelöscht." },
    xpUp: { "en-US": (n) => `Nice! Your experience increased to ${n}.`, "de-DE": (n) => `Gut! Deine Erfahrung ist jetzt ${n}.` },
    analysisStarted: { "en-US": "Analysis started...", "de-DE": "Analyse gestartet..." },
    askName: { "en-US": "What's your name?", "de-DE": "Wie heißt du?" }
  };

  // ---- Speech helpers (uses existing speech system if present) ----
  let currentVoiceLang = state.preferredLang || "en-US";
  function speak(text, lang = null) {
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang || currentVoiceLang;
      u.rate = 1.02;
      u.pitch = 1.0;
      window.speechSynthesis.cancel(); // cancel previous
      window.speechSynthesis.speak(u);
    } catch (e) {
      console.warn("speak failed", e);
    }
  }

  // ---- Memory helpers ----
  function setUserName(name) {
    state.userName = name;
    state.lastSeen = new Date().toISOString();
    saveState(state);
    updateWidgets();
  }
  function increaseExperience(by = 1) {
    state.experience = Math.max(0, state.experience + by);
    state.analyses = (state.analyses || 0) + 1;
    state.lastSeen = new Date().toISOString();
    saveState(state);
    updateWidgets();
    // small celebration animation
    xpBadge.animate([{ transform: "scale(1)" }, { transform: "scale(1.15)" }, { transform: "scale(1)" }], { duration: 600 });
  }

  // ---- simple personalization flow ----
  function ensureUserNameFlow() {
    if (!state.userName) {
      // do a gentle prompt in UI (non-blocking)
      setTimeout(() => {
        const ask = confirm(texts.askName[currentVoiceLang]());
        if (ask) {
          const n = prompt(texts.askName[currentVoiceLang]());
          if (n) {
            setUserName(n.trim());
            speak(texts.greet[currentVoiceLang](n), currentVoiceLang);
            typeResponse(texts.greet[currentVoiceLang](n));
          } else {
            speak(texts.greet[currentVoiceLang](null), currentVoiceLang);
            typeResponse(texts.greet[currentVoiceLang](null));
          }
        } else {
          speak(texts.greet[currentVoiceLang](null), currentVoiceLang);
          typeResponse(texts.greet[currentVoiceLang](null));
        }
      }, 700);
    } else {
      // welcome back
      speak(texts.greet[currentVoiceLang](state.userName), currentVoiceLang);
      typeResponse(texts.greet[currentVoiceLang](state.userName));
    }
  }

  // ---- typing effect utility (interruptible) ----
  let typingTimer = null;
  function typeResponse(text, speed = 20) {
    if (typingTimer) { clearInterval(typingTimer); typingTimer = null; }
    responseBox.textContent = "";
    let i = 0;
    typingTimer = setInterval(() => {
      responseBox.textContent += text.charAt(i) || "";
      i++;
      if (i > text.length) { clearInterval(typingTimer); typingTimer = null; }
      responseBox.scrollTop = responseBox.scrollHeight;
    }, speed);
  }
  function stopTyping() { if (typingTimer) { clearInterval(typingTimer); typingTimer = null; } }

  // ---- visual pulse while analyzing ----
  function flashAnalyzeOn() {
    systemStatus.textContent = "🔴 Analyzing...";
    systemStatus.className = "status busy";
    systemStatus.animate([{ boxShadow: "0 0 10px #ffae42" }, { boxShadow: "0 0 25px #ffae42" }], { duration: 800, iterations: Infinity });
  }
  function flashAnalyzeOff() {
    systemStatus.textContent = "🟢 Ready";
    systemStatus.className = "status ready";
    // cancel animations by cloning node (simple)
    const clone = systemStatus.cloneNode(true);
    systemStatus.parentNode.replaceChild(clone, systemStatus);
  }

  // ---- advanced "learning" analysis function (safe heuristics) ----
  function smartAnalyze(code) {
    // detect language (reuse simple detector but refined)
    const lower = code.toLowerCase();
    let lang = "UNKNOWN";
    if (/<\/?[a-z][\s\S]*>/.test(code)) lang = "HTML";
    else if (/\b(function|const|let|=>|console\.log|document|window)\b/.test(lower)) lang = "JS";
    else if (/\b(def |import |print\(|class )/.test(lower)) lang = "Python";
    else if (/#include|std::/.test(lower)) lang = "CPP";
    else if (/<\?php|echo |->/.test(lower)) lang = "PHP";
    else if (/[a-z-]+\s*:\s*[^;]+;/.test(code)) lang = "CSS";

    // metrics
    const lines = code.split("\n").length;
    const longLines = code.split("\n").filter(l => l.length > 120).length;
    const usesConsole = /console\.log/.test(lower);
    const issues = [];

    // heuristic checks
    if (lang === "HTML") {
      if (/(<img\b(?![^>]*\balt=))/i.test(code)) issues.push("Image tag(s) found without alt attribute (accessibility).");
      if (!/<!doctype/i.test(code)) issues.push("DOCTYPE not declared. Add <!DOCTYPE html> at top.");
    }
    if (lang === "JS") {
      if (/var\s+[\w$]+/.test(code)) issues.push("Consider replacing var with let/const.");
      if (/==[^=]/.test(code)) issues.push("Use === for strict equality instead of ==.");
      if (usesConsole) issues.push("Remember to remove console.log in production.");
    }
    if (lang === "Python") {
      if (/print\(.{0,3}$/.test(code)) issues.push("Possible unclosed print or multi-line string issue.");
    }
    if (longLines > 0) issues.push(`${longLines} long line(s) detected (consider wrapping).`);
    if (lines > 500) issues.push("Large file: performance checks recommended.");

    // prepare friendly summary
    let summary = `🔍 Language: ${lang}\n📄 Lines: ${lines}\n`;
    if (issues.length) summary += `\n⚠️ Issues found:\n- ${issues.join("\n- ")}`;
    else summary += `\n✅ No obvious issues detected.`;

    return { lang, summary, issues, metrics: { lines, longLines } };
  }

  // ---- main analyze wrapper (integrates with UI + memory + xp) ----
  async function analyzeHandler() {
    const code = codeInput.value || "";
    if (!code.trim()) {
      typeResponse(currentVoiceLang === "de-DE" ? "Bitte Code eingeben." : "Please enter code to analyze.");
      speak(currentVoiceLang === "de-DE" ? "Bitte Code eingeben." : "Please enter code to analyze.");
      return;
    }

    // UI start
    flashAnalyzeOn();
    typeResponse(texts.analysisStarted[currentVoiceLang]);
    speak(texts.analysisStarted[currentVoiceLang]);

    // simulate CPU work safely (non-blocking)
    await new Promise(res => setTimeout(res, 900));

    const res = smartAnalyze(code);

    // update memory and xp heuristics
    increaseExperience(1);

    // create contextual reply
    const reply = `${res.summary}\n\n💡 Tips:\n${(res.issues.length ? res.issues.map((s,i)=>`${i+1}. ${s}`).join("\n") : (currentVoiceLang==="de-DE" ? "Keine Tipps nötig" : "Nothing to fix - good job!"))}`;

    // show and speak
    stopTyping();
    typeResponse(reply);
    speak(currentVoiceLang === "de-DE" ? `Analyse abgeschlossen für ${res.lang}` : `Analysis complete for ${res.lang}`);

    // finish UI
    setTimeout(() => {
      flashAnalyzeOff();
    }, 300);
  }

  // ---- wire analyze button (safe attach) ----
  analyzeBtn.removeEventListener && analyzeBtn.removeEventListener("click", analyzeHandler);
  analyzeBtn.addEventListener("click", analyzeHandler);

  // ---- dynamic switch-language control integration (if switch button exists) ----
  const switchButton = $("#switchLanguage") || (() => {
    const b = document.createElement("button"); b.id = "switchLanguage"; b.textContent = "Switch Language"; controls.appendChild(b); return b;
  })();

  switchButton.addEventListener("click", () => {
    currentVoiceLang = (currentVoiceLang === "en-US") ? "de-DE" : "en-US";
    state.preferredLang = currentVoiceLang;
    saveState(state);
    updateWidgets();
    const msg = currentVoiceLang === "de-DE" ? "Sprache: Deutsch" : "Language: English";
    typeResponse(msg);
    speak(msg);
  });

  // ---- stop speaking control (add if not present) ----
  const stopBtn = $("#stopVoice") || (() => { const b = document.createElement("button"); b.id = "stopVoice"; b.textContent = "Stop Voice"; controls.appendChild(b); return b; })();
  stopBtn.addEventListener("click", () => { window.speechSynthesis.cancel(); stopTyping(); });

  // ---- ensure initial greeting / widget state ----
  updateWidgets();
  setTimeout(() => ensureUserNameFlow(), 500);

  // ---- external hook (expose small API) ----
  window.TshatttoPart3 = {
    state,
    analyzeNow: analyzeHandler,
    setUserName,
    speakNow: (t) => speak(t, currentVoiceLang)
  };

})();





/* ===========================================================
   Tshattto Pro Max 10 – PART 3B (Dynamic Animations & Pro Logic)
   ~150 lines — Advanced Interactive Enhancements
   =========================================================== */

(() => {
  console.log("⚡ Tshattto Part 3B loaded");

  const $ = (sel) => document.querySelector(sel);
  const responseBox = $("#response");
  const systemStatus = $("#systemStatus");
  const controls = document.querySelector(".controls");

  // ======== GLOBAL STATE (shared from Part 3A) =========
  const root = window.TshatttoPart3 || {};
  let { state, analyzeNow, speakNow } = root;

  if (!state) state = { experience: 0, preferredLang: "en-US" };

  // ---- Animation Utilities ----
  const effects = {
    glow: (el, color = "#00ffff") => {
      el.animate(
        [
          { boxShadow: `0 0 0px ${color}` },
          { boxShadow: `0 0 15px ${color}` },
          { boxShadow: `0 0 0px ${color}` },
        ],
        { duration: 1200, iterations: 1 }
      );
    },
    pulse: (el, color = "#ff4081") => {
      el.animate(
        [
          { transform: "scale(1)", boxShadow: `0 0 0 ${color}` },
          { transform: "scale(1.05)", boxShadow: `0 0 20px ${color}` },
          { transform: "scale(1)", boxShadow: `0 0 0 ${color}` },
        ],
        { duration: 700, iterations: 1 }
      );
    },
    fade: (el, dir = "in") => {
      el.animate(
        dir === "in"
          ? [{ opacity: 0 }, { opacity: 1 }]
          : [{ opacity: 1 }, { opacity: 0 }],
        { duration: 400 }
      );
    },
  };

  // ---- Add speed selector ----
  let speedControl = $("#speedControl");
  if (!speedControl) {
    speedControl = document.createElement("select");
    speedControl.id = "speedControl";
    speedControl.innerHTML = `
      <option value="1">Normal Speed</option>
      <option value="0.6">Slow</option>
      <option value="1.5">Fast</option>
    `;
    speedControl.style.marginLeft = "10px";
    controls.appendChild(speedControl);
  }

  let analysisSpeed = 1.0;
  speedControl.addEventListener("change", (e) => {
    analysisSpeed = parseFloat(e.target.value);
    effects.pulse(speedControl, "#42a5f5");
    speakNow(
      state.preferredLang === "de-DE"
        ? `Geschwindigkeit auf ${analysisSpeed === 1 ? "normal" : analysisSpeed < 1 ? "langsam" : "schnell"} gesetzt`
        : `Speed set to ${analysisSpeed === 1 ? "normal" : analysisSpeed < 1 ? "slow" : "fast"}`
    );
  });

  // ---- Add PRO MODE toggle ----
  let proMode = false;
  const proBtn = document.createElement("button");
  proBtn.id = "proModeBtn";
  proBtn.textContent = "Pro Mode: OFF";
  proBtn.style.marginLeft = "10px";
  controls.appendChild(proBtn);

  proBtn.addEventListener("click", () => {
    proMode = !proMode;
    proBtn.textContent = `Pro Mode: ${proMode ? "ON" : "OFF"}`;
    effects.glow(proBtn, proMode ? "#76ff03" : "#ff1744");
    speakNow(
      state.preferredLang === "de-DE"
        ? proMode ? "Pro-Modus aktiviert." : "Pro-Modus deaktiviert."
        : proMode ? "Pro Mode activated." : "Pro Mode deactivated."
    );
  });

  // ---- Pro Analysis Layer ----
  function proAnalyzeInsights(code, lang) {
    const insights = [];
    const len = code.split("\n").length;

    if (lang === "JS") {
      if (!/use strict/.test(code)) insights.push("Consider using 'use strict' for safer JS.");
      if (/document\.write/.test(code)) insights.push("Avoid using document.write(); prefer DOM manipulation.");
      if (/eval\(/.test(code)) insights.push("Avoid eval() for security reasons.");
    } else if (lang === "Python") {
      if (!/^if __name__ == ['"]__main__['"]:/m.test(code)) insights.push("Add an entry point: if __name__ == '__main__':");
      if (/except\s*:$/.test(code)) insights.push("Catch specific exceptions instead of a bare except.");
    } else if (lang === "HTML") {
      if (!/<meta\s+charset=/i.test(code)) insights.push("Add <meta charset='UTF-8'> in <head>.");
      if (!/<title>/i.test(code)) insights.push("Add a <title> for better SEO.");
    }

    if (len > 800) insights.push("File seems large — split into modules for maintainability.");

    return insights;
  }

  // ---- Enhance Analyze Function ----
  async function enhancedAnalyze() {
    const code = document.querySelector("#codeInput").value;
    if (!code.trim()) {
      speakNow(state.preferredLang === "de-DE" ? "Kein Code eingegeben." : "No code entered.");
      return;
    }

    systemStatus.textContent = "⚙️ Running deep analysis...";
    effects.glow(systemStatus, "#ffb74d");

    await new Promise((r) => setTimeout(r, 700 / analysisSpeed));

    // simulate calling main analyze
    const baseResult = await root.analyzeNow(code);

    if (proMode) {
      const langMatch = /Language:\s*(\w+)/.exec(baseResult?.summary || "")?.[1] || "UNKNOWN";
      const extra = proAnalyzeInsights(code, langMatch);
      if (extra.length) {
        const text =
          (state.preferredLang === "de-DE"
            ? "🔧 Zusätzliche Vorschläge:\n"
            : "🔧 Additional Insights:\n") +
          extra.map((i) => `- ${i}`).join("\n");

        document.querySelector("#response").textContent += `\n\n${text}`;
        speakNow(state.preferredLang === "de-DE" ? "Zusätzliche Vorschläge verfügbar." : "Additional insights available.");
      }
    }

    effects.pulse(responseBox, "#00e676");
    systemStatus.textContent = "✅ Done";
    systemStatus.className = "status ready";
  }

  // ---- Add Enhanced Analyze Button ----
  const deepBtn = document.createElement("button");
  deepBtn.id = "deepAnalyzeBtn";
  deepBtn.textContent = "Deep Analyze";
  deepBtn.style.marginLeft = "10px";
  controls.appendChild(deepBtn);

  deepBtn.addEventListener("click", () => {
    effects.pulse(deepBtn, "#ffa726");
    enhancedAnalyze();
  });

  // ---- Dark/Light Theme Sync ----
  const themeBtn = document.querySelector("#themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      effects.glow(document.body, "#90caf9");
      speakNow(
        state.preferredLang === "de-DE"
          ? "Thema geändert."
          : "Theme changed."
      );
    });
  }

  // ---- Auto greeting animation ----
  window.addEventListener("load", () => {
    effects.fade(responseBox, "in");
    responseBox.animate(
      [
        { transform: "translateY(10px)", opacity: 0 },
        { transform: "translateY(0)", opacity: 1 },
      ],
      { duration: 600 }
    );
    speakNow(
      state.preferredLang === "de-DE"
        ? "Bereit für erweiterte Analyse."
        : "Ready for advanced analysis."
    );
  });

  // ---- Add Reset XP Button ----
  const resetXP = document.createElement("button");
  resetXP.id = "resetXP";
  resetXP.textContent = "Reset XP";
  resetXP.style.marginLeft = "10px";
  controls.appendChild(resetXP);

  resetXP.addEventListener("click", () => {
    if (confirm("Reset your experience points?")) {
      state.experience = 0;
      state.analyses = 0;
      localStorage.setItem("tshattto_v10", JSON.stringify(state));
      speakNow("Experience reset.");
      effects.glow(resetXP, "#f44336");
      document.querySelector("#tsh-xp-badge").textContent = "XP: 0 • Analyses: 0";
    }
  });

  // ---- Small random tip generator ----
  const tips = [
    "Tip: Keep your functions small and focused.",
    "Tip: Comment *why*, not *what*.",
    "Tip: Use semantic HTML elements.",
    "Tip: Avoid magic numbers in code.",
    "Tip: Keep your naming consistent.",
  ];

  setInterval(() => {
    if (Math.random() > 0.8) {
      const tip = tips[Math.floor(Math.random() * tips.length)];
      responseBox.textContent += `\n💡 ${tip}`;
    }
  }, 15000);

  // ---- Pro Visual Touch: glowing border sync with XP ----
  setInterval(() => {
    const xp = state.experience || 0;
    const color = xp < 5 ? "#64b5f6" : xp < 15 ? "#4caf50" : "#ffeb3b";
    responseBox.style.boxShadow = `0 0 20px ${color}44`;
  }, 2000);

  console.log("✅ Tshattto Part 3B fully active");
})();


