

/* ============================================================
   🤖 Tshattto Pro Max 10 – PART 2
   🔍 AI Code Analyzer + Multi-language Smart Detection
   ============================================================ */

(() => {
  console.log("%cTshattto Pro Max 10 – Analyzer Loaded ✅", "color:#00b4d8;font-weight:bold;");

  // ================================
  // 🌐 Language Detection System
  // ================================
  const detectLanguage = (code) => {
    const trimmed = code.trim();

    const patterns = {
      HTML: /<("[^"]*"|'[^']*'|[^'">])*>/,
      CSS: /[a-zA-Z\-]+\s*:\s*[^;]+;/,
      JS: /(function\s*\(|const|let|var|=>|console\.log|document\.|window\.)/,
      Python: /(def |print\(|import |from |class )/,
      CPP: /#include\s*<|int\s+main\s*\(|std::cout|std::string/,
      PHP: /<\?php|echo\s+['"]|->|::/
    };

    for (let [lang, pattern] of Object.entries(patterns)) {
      if (pattern.test(trimmed)) return lang;
    }

    return "Unknown";
  };

  // ================================
  // 🧠 Smart Line-by-Line Analyzer
  // ================================
  const analyzeCodeLines = (code, language) => {
    const lines = code.split("\n");
    let feedback = [];

    lines.forEach((line, index) => {
      let trimmed = line.trim();

      if (!trimmed) return;

      switch (language) {
        case "HTML":
          if (/<[^>]+>/.test(trimmed)) {
            if (!trimmed.includes(">")) feedback.push(`⚠️ Line ${index + 1}: Possible unclosed tag.`);
            if (trimmed.startsWith("<!DOCTYPE")) feedback.push(`📘 Line ${index + 1}: DOCTYPE detected, HTML5 mode.`);
          }
          break;

        case "CSS":
          if (trimmed.endsWith("{")) feedback.push(`🧩 Line ${index + 1}: Opening CSS block.`);
          if (trimmed.includes(":") && trimmed.endsWith(";"))
            feedback.push(`✨ Line ${index + 1}: Property applied successfully.`);
          if (trimmed.includes("!important")) feedback.push(`⚠️ Line ${index + 1}: Avoid using !important too often.`);
          break;

        case "JS":
          if (/console\.log/.test(trimmed)) feedback.push(`🪶 Line ${index + 1}: Console log detected.`);
          if (/function|=>/.test(trimmed)) feedback.push(`⚙️ Line ${index + 1}: Function declaration found.`);
          if (/var /.test(trimmed)) feedback.push(`⚠️ Line ${index + 1}: Consider using let or const instead of var.`);
          break;

        case "Python":
          if (/print\(/.test(trimmed)) feedback.push(`🖨️ Line ${index + 1}: Print statement found.`);
          if (/def /.test(trimmed)) feedback.push(`⚙️ Line ${index + 1}: Function defined.`);
          if (trimmed.endsWith(":")) feedback.push(`📘 Line ${index + 1}: Block start (indent expected).`);
          break;

        case "CPP":
          if (/#include/.test(trimmed)) feedback.push(`🔗 Line ${index + 1}: Library included.`);
          if (/std::cout/.test(trimmed)) feedback.push(`🖨️ Line ${index + 1}: Output operation detected.`);
          if (/main\s*\(/.test(trimmed)) feedback.push(`⚙️ Line ${index + 1}: Main function detected.`);
          break;

        case "PHP":
          if (/echo /.test(trimmed)) feedback.push(`🖨️ Line ${index + 1}: Echo statement found.`);
          if (/function /.test(trimmed)) feedback.push(`⚙️ Line ${index + 1}: PHP function defined.`);
          if (/->|::/.test(trimmed)) feedback.push(`🔧 Line ${index + 1}: Object or static access detected.`);
          break;

        default:
          feedback.push(`❓ Line ${index + 1}: Could not determine syntax.`);
      }
    });

    return feedback.length ? feedback.join("\n") : "✅ No issues found! Code looks clean.";
  };

  // ================================
  // ⚙️ Integration with UI
  // ================================
  const input = document.getElementById("codeInput");
  const analyzeBtn = document.getElementById("analyzeBtn");
  const responseBox = document.getElementById("response");
  const status = document.getElementById("systemStatus");

  analyzeBtn.addEventListener("click", () => {
    const userCode = input.value;
    if (!userCode.trim()) {
      responseBox.textContent = "⚠️ Please write some code before analysis.";
      return;
    }

    status.textContent = "🧠 Analyzing...";
    status.classList.remove("ready");
    status.classList.add("busy");

    setTimeout(() => {
      const language = detectLanguage(userCode);
      const analysis = analyzeCodeLines(userCode, language);

      responseBox.innerHTML = `
        <strong>🧩 Detected Language:</strong> ${language}<br><br>
        <pre>${analysis}</pre>
      `;

      status.textContent = "🟢 Ready";
      status.classList.remove("busy");
      status.classList.add("ready");
    }, 1200);
  });

  // ================================
  // 🗣️ Voice Response System (English / German)
  // ================================
  let voiceLang = "en-US";
  let speaking = false;
  let currentUtterance = null;

  const speak = (text) => {
    if (speaking) {
      window.speechSynthesis.cancel();
      speaking = false;
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = voiceLang;
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    utterance.onend = () => (speaking = false);
    speaking = true;
    currentUtterance = utterance;

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    speaking = false;
  };

  // ================================
  // 🎛️ Language Switch Button
  // ================================
  const langButton = document.createElement("button");
  langButton.textContent = "🌐 Switch Voice";
  langButton.classList.add("voice-btn");
  document.querySelector(".controls").appendChild(langButton);

  langButton.addEventListener("click", () => {
    voiceLang = voiceLang === "en-US" ? "de-DE" : "en-US";
    langButton.textContent = voiceLang === "en-US" ? "🇺🇸 English" : "🇩🇪 Deutsch";
    speak(`Voice changed to ${voiceLang === "en-US" ? "English" : "German"}.`);
  });

  // ================================
  // 🎙️ Add Speak/Stop buttons
  // ================================
  const speakBtn = document.createElement("button");
  speakBtn.textContent = "🔈 Speak Result";
  const stopBtn = document.createElement("button");
  stopBtn.textContent = "⏹ Stop Voice";

  document.querySelector(".controls").appendChild(speakBtn);
  document.querySelector(".controls").appendChild(stopBtn);

  speakBtn.addEventListener("click", () => {
    speak(responseBox.textContent || "No response to speak yet.");
  });
  stopBtn.addEventListener("click", stopSpeaking);

  // ================================
  // ✨ Small UI Touches
  // ================================
  input.addEventListener("focus", () => {
    input.style.boxShadow = "0 0 15px #00b4d8";
  });
  input.addEventListener("blur", () => {
    input.style.boxShadow = "none";
  });

  responseBox.addEventListener("mouseover", () => {
    responseBox.style.transform = "scale(1.02)";
  });
  responseBox.addEventListener("mouseout", () => {
    responseBox.style.transform = "scale(1)";
  });
})();
