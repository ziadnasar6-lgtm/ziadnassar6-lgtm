

/* ============================================================
   ZOZ & CHATTO - SMART CODE ANALYZER v1.0 (Batch 1 + Batch 2)
   ============================================================ */
(function (global) {
  "use strict";

  // إنشاء نطاق خاص للكود عشان ما يتعارضش مع باقي الملفات
  const TshatttoPart3_batch1 = {};

  // قائمة اللغات اللي البرنامج يتعرف عليها
  const supportedLangs = ["javascript", "html", "css", "python", "cpp", "php"];

  // دالة بسيطة تتأكد إن اللغة مدعومة
  function isSupported(lang) {
    if (!lang) return false;
    return supportedLangs.includes(lang.toLowerCase());
  }

  // دالة تحديد اللغة (تحليل سريع حسب كلمات المفتاح)
  function detectLanguage(code) {
    if (!code || typeof code !== "string") return "unknown";
    const trimmed = code.trim();

    if (trimmed.startsWith("<!DOCTYPE") || trimmed.startsWith("<html")) return "html";
    if (/function|console\.log|let |const |=>|var /.test(code)) return "javascript";
    if (/#include|std::|int main|cout|cin/.test(code)) return "cpp";
    if (/def |print\(|import |from /.test(code)) return "python";
    if (/\$|echo |->|function /.test(code)) return "php";
    if (/\{|color:|margin:|padding:/.test(code)) return "css";

    return "unknown";
  }

  // دالة مساعدة لطباعة النتائج بشكل منسق
  function log(msg, type = "info") {
    const prefixMap = {
      info: "[INFO]",
      warn: "[WARN]",
      error: "[ERROR]",
      ok: "[OK]",
    };
    const prefix = prefixMap[type] || "[LOG]";
    console.log(`${prefix} ${msg}`);
  }

  // إعداد كائن النتيجة
  function createResult(lang, accuracy, message) {
    return {
      language: lang,
      accuracy: accuracy,
      message: message,
      timestamp: new Date().toISOString(),
    };
  }

  // 🧠 الدالة الرئيسية لتحليل الكود
  function analyzeCodeSnippet(code) {
    if (!code || code.trim() === "") {
      return createResult("none", 0, "No code provided");
    }

    const lang = detectLanguage(code);
    const accuracy = lang === "unknown" ? 0.5 : 0.95;
    const msg =
      lang === "unknown"
        ? "Could not confidently detect the language."
        : `Detected language: ${lang}`;

    log(msg, lang === "unknown" ? "warn" : "ok");
    return createResult(lang, accuracy, msg);
  }

  // 🧪 دالة اختبار بسيطة لجميع اللغات
  function runBasicTests() {
    const samples = {
      js: "function test(){ console.log('hi'); }",
      html: "<html><body><h1>Hello</h1></body></html>",
      css: "body { color: red; }",
      py: "def hi():\n  print('hi')",
      cpp: "#include <iostream>\nint main(){ std::cout << 1; }",
      php: "<?php echo 'hi'; ?>",
    };

    for (const [key, code] of Object.entries(samples)) {
      const result = analyzeCodeSnippet(code);
      console.log(`\n🔹 Sample: ${key.toUpperCase()}`);
      console.log(`Language: ${result.language}`);
      console.log(`Accuracy: ${(result.accuracy * 100).toFixed(0)}%`);
      console.log(`Message: ${result.message}`);
      console.log("-------------------------------------");
    }

    console.log("✅ All sample tests executed successfully.");
  }

  /* ============================================================
     TshatttoPart3 — Batch 2 (Advanced tokenizer + structural checks)
     ============================================================ */

  const TshatttoPart3_batch2 = {};
  const NS = (global.TshatttoPart3_batch2 = TshatttoPart3_batch2);

  // small util helpers
  const isBlank = (s) => !s || /^\s*$/.test(s);

  // lightweight tokenizer
  function tokenize(code) {
    const lines = code.replace(/\r\n/g, "\n").split("\n");
    const tokens = [];
    const tokenRegex =
      /("([^"\\]|\\.)"|'([^'\\]|\\.)'|([^\\]|\\.)`)|([A-Za-z_]\w)|([0-9]+(\.[0-9]+)?)|(<\/?[A-Za-z0-9\-]+)|([{}();:<>\[\]])|([=+\-*\/%!&|^~]+)/g;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let m;
      while ((m = tokenRegex.exec(line)) !== null) {
        const raw = m[0];
        let type = "unknown";
        if (/^["'`]/.test(raw)) type = "string";
        else if (/^\</.test(raw)) type = "tag";
        else if (/^[A-Za-z_]/.test(raw)) type = "ident";
        else if (/^[0-9]/.test(raw)) type = "number";
        else if (/^[{}();:\[\]]/.test(raw)) type = "punct";
        else if (/^[=+\-*\/%&|!^~]+/.test(raw)) type = "operator";
        tokens.push({ type, value: raw, line: i + 1 });
      }
    }
    return tokens;
  }

  // structural analysis (detects braces, indents, HTML tag issues)
  function structuralAnalysis(code, lang) {
    const lines = code.replace(/\r\n/g, "\n").split("\n");
    const issues = [];
    const stack = [];

    const pushIssue = (ln, msg, fix) => issues.push({ line: ln, msg, fix });

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const ln = i + 1;
      if (!line) continue;

      if (["javascript", "cpp", "php"].includes(lang)) {
        for (let ch of line) {
          if (ch === "{") stack.push({ ch: "{", line: ln });
          if (ch === "}") {
            if (stack.length === 0) {
              pushIssue(ln, 'Unexpected closing brace "}".', 'Remove or fix block.');
            } else {
              stack.pop();
            }
          }
        }
      }

      if (lang === "python" && /:\s*$/.test(line)) {
        const next = lines.slice(i + 1).findIndex((l) => !isBlank(l));
        if (next >= 0) {
          const nxtLine = lines[i + 1 + next];
          if (/^[^\t ]/.test(nxtLine)) {
            pushIssue(
              i + 2 + next,
              "Expected indentation after ':'",
              "Indent the following line."
            );
          }
        }
      }

      if (lang === "html") {
        const opens = (line.match(/<([a-zA-Z0-9\-]+)(?=\s|>)/g) || []).map((x) =>
          x.replace("<", "")
        );
        const closes = (line.match(/<\/([a-zA-Z0-9\-]+)>/g) || []).map((x) =>
          x.replace(/<\/|>/g, "")
        );
        for (const t of opens) {
          if (!closes.includes(t)) {
            pushIssue(ln, `Tag <${t}> opened but not closed.`, `Close <${t}> tag.`);
          }
        }
      }
    }

    if (stack.length > 0) {
      const last = stack[stack.length - 1];
      pushIssue(last.line, 'Opening "{" has no matching closing "}".', "Add }");
    }

    return issues;
  }

  // تصدير الدوال داخل النطاق
  TshatttoPart3_batch1.supportedLangs = supportedLangs;
  TshatttoPart3_batch1.isSupported = isSupported;
  TshatttoPart3_batch1.detectLanguage = detectLanguage;
  TshatttoPart3_batch1.analyzeCodeSnippet = analyzeCodeSnippet;
  TshatttoPart3_batch1.runBasicTests = runBasicTests;

  // تصدير الكائن في النطاق العام
  global.TshatttoPart3_batch1 = TshatttoPart3_batch1;

  console.log("✅ TshatttoPart3 Batch 1 & Batch 2 loaded successfully.");
})(window);


  // higher-level analysis combining tokens + structure + heuristics
  function deepAnalyze(code, hint) {
    const lang = (hint && hint !== 'auto') ? hint : detectLangFromTokens(code);
    const tokens = tokenize(code);
    const struct = structuralAnalysis(code, lang);
    const issues = struct.slice(); // copy

    // token-level heuristics
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      // JS semicolon heuristic: if line ends with ) or identifier and no semicolon token nearby
      if (lang === 'javascript' && t.type === 'ident') {
        // find end-of-line tokens for that line
        const sameLine = tokens.filter(x => x.line === t.line).map(x => x.value).join(' ');
        if (/[A-Za-z0-9_)\]\"\']\s*$/.test(sameLine) && !/;\s*$/.test(sameLine) && !/\{|\}|\=>$/.test(sameLine)) {
          issues.push({line: t.line, msg: 'Possible missing semicolon in JS statement.', fix: 'Add a semicolon ; at end of the statement if required.'});
        }
      }

      // CSS property without semicolon
      if (lang === 'css' && t.type === 'operator' && t.value === ':' ) {
        // find corresponding semicolon later on same line
        const sameLineTxt = (code.replace(/\r\n/g,'\n').split('\n'))[t.line-1] || '';
        if (/:/.test(sameLineTxt) && !/;\s*$/.test(sameLineTxt)) {
          issues.push({line: t.line, msg: 'CSS property may be missing semicolon', fix: 'Add ; at end of property.'});
        }
      }
    }

    // de-duplicate by (line,msg) keys
    const uniq = [];
    const seen = new Set();
    for (const it of issues) {
      //const key = ${it.line}::${it.msg};
      if (!seen.has(key)) { seen.add(key); uniq.push(it); }
    }

    // build repair preview: apply trivial fixes for first 5 issues (non-destructive suggestion)
    const repairPreviewLines = code.replace(/\r\n/g,'\n').split('\n');
    let applied = 0;
    for (const it of uniq) {
      if (applied >= 5) break;
      const ln = it.line;
      if (!repairPreviewLines[ln-1]) continue;
      // example trivial autopatch: add semicolon at end of line if missing and suggested
      if (/semicolon/i.test(it.fix) || /;/i.test(it.fix) && !/;(\s*)$/.test(repairPreviewLines[ln-1])) {
        repairPreviewLines[ln-1] = repairPreviewLines[ln-1] + '; // tshattto-autofix';
        applied++;
      }
      // indentation suggestion for python
      if (/Indent/.test(it.fix)) {
        repairPreviewLines[ln-1] = '    ' + repairPreviewLines[ln-1];
        applied++;
      }
    }

    return {
      lang,
      tokensCount: tokens.length,
      issues: uniq,
      repairPreview: repairPreviewLines.join('\n')
    };
  }

  // expose functions safely
  NS.tokenize = tokenize;
  NS.deepAnalyze = deepAnalyze;
  NS.detect = detectLangFromTokens ; 

  console.log('TshatttoPart3_batch2 loaded — tokenizer & structural analyzer ready.');




/* ============================================================
  TshatttoPart3 — Batch 3 (Semantic + Mini AST Layer)
  - Namespaced: TshatttoPart3_batch3
  - Works with previous batches safely
  - Adds: lightweight AST, semantic pattern checks, smarter hints
============================================================ */

(function TshatttoPart3_batch3() {
  const NS = window.TshatttoPart3_batch3 = window.TshatttoPart3_batch3 || {};

  const keywords = {
    javascript: ['function','return','if','else','for','while','class','new','let','const','var','try','catch','switch','case','import','export'],
    python: ['def','return','if','elif','else','for','while','class','import','try','except'],
    cpp: ['int','float','double','if','else','for','while','return','class','struct','namespace','include'],
    php: ['function','echo','if','else','foreach','while','return','class'],
    css: ['@media','@keyframes'],
    html: ['<html>','<body>','<div>','<script>','<style>']
  };

  // very simple AST builder (for logical block mapping)
  function buildAST(code, lang) {
    const lines = code.replace(/\r\n/g,'\n').split('\n');
    const ast = [];
    const stack = [];

    function addNode(type, name, line) {
      const node = { type, name, line, children: [] };
      if (stack.length > 0) {
        stack[stack.length-1].children.push(node);
      } else {
        ast.push(node);
      }
      return node;
    }

    for (let i=0; i<lines.length; i++) {
      const line = lines[i].trim();
      const ln = i+1;
      if (!line) continue;

      // detect functions / defs
      if ((lang==='javascript' && /^function\s+(\w+)/.test(line)) ||
          (lang==='python' && /^def\s+(\w+)/.test(line)) ||
          (lang==='php' && /function\s+(\w+)/.test(line)) ||
          (lang==='cpp' && /(\w+)\s+(\w+)\s*\(.\)\s\{?/.test(line))) {
        const name = line.match(/(\w+)\s*\(/)?.[1] || 'anonymous';
        const fn = addNode('function', name, ln);
        stack.push(fn);
      }

      // detect classes
      if ((lang==='javascript' && /^class\s+/.test(line)) ||
          (lang==='python' && /^class\s+/.test(line)) ||
          (lang==='cpp' && /^class\s+/.test(line)) ||
          (lang==='php' && /^class\s+/.test(line))) {
        const cname = line.split(/\s+/)[1].replace(/\{?$/, '');
        const node = addNode('class', cname, ln);
        stack.push(node);
      }

      // detect block start and end
      if (/[{]\s*$/.test(line)) {
        stack.push({type:'block', line:ln, children:[]});
      }
      if (/^[}]\s*$/.test(line) || /^end\s*$/.test(line)) {
        if (stack.length>0) stack.pop();
      }

      // detect returns or prints
      if (/\breturn\b/.test(line)) {
        addNode('return', line, ln);
      }
      if (/\b(console\.log|print|echo)\b/.test(line)) {
        addNode('output', line, ln);
      }
    }

    return ast;
  }

  // semantic checker: looks for unused vars, missing returns, etc.
  function semanticChecks(code, lang) {
    const lines = code.replace(/\r\n/g,'\n').split('\n');
    const issues = [];

    const declaredVars = new Map();
    const usedVars = new Set();

    for (let i=0; i<lines.length; i++) {
      const line = lines[i];
      const ln = i+1;

      // variable declaration
      if (lang==='javascript' && /(let|const|var)\s+(\w+)/.test(line)) {
        const m = line.match(/(let|const|var)\s+(\w+)/);
        if (m) declaredVars.set(m[2], ln);
      }
      if (lang==='python' && /^(\w+)\s*=/.test(line)) {
        const m = line.match(/^(\w+)\s*=/);
        if (m) declaredVars.set(m[1], ln);
      }
      if (lang==='cpp' && /(int|float|double|string|bool)\s+(\w+)/.test(line)) {
        const m = line.match(/(int|float|double|string|bool)\s+(\w+)/);
        if (m) declaredVars.set(m[2], ln);
      }
// mark usage
for (const v of declaredVars.keys()) {
  const reg = new RegExp(`\\b${v}\\b`);
  if (reg.test(line) && !/(let|var|const)/.test(line)) usedVars.add(v);
}

      // detect missing semicolon in cpp/js/php
      if ((lang==='cpp'||lang==='javascript'||lang==='php') && /[^;{]$/.test(line.trim()) && !/^\s*(if|else|for|while|switch|class|function)/.test(line)) {
        issues.push({line:ln, msg:'Possible missing semicolon.', fix:'Add ; at end if statement is complete.'});
      }

      // detect dead print after return
      if (/\breturn\b/.test(line)) {
        const next = lines[i+1] || '';
        if (/\b(console\.log|print|echo)\b/.test(next)) {
          issues.push({line:ln+1, msg:'Unreachable print statement after return.', fix:'Remove or move this line before return.'});
        }
      }
    }
// find unused variables
for (const [v, ln] of declaredVars.entries()) {
  if (!usedVars.has(v)) {
    issues.push({
      line: ln,
      msg: `Variable "${v}" declared but never used.`,
      fix: "Remove or use this variable."
    });
  }
}

return issues;
}


  // Combined deep semantic analyzer
  function deepSemanticAnalyze(code, langHint) {
    const detect = window.TshatttoPart3_batch2?.detect || (()=>'unknown');
    const lang = (langHint && langHint !== 'auto') ? langHint : detect(code);
    const ast = buildAST(code, lang);
    const sem = semanticChecks(code, lang);

    return {
      language: lang,
      astSummary: summarizeAST(ast),
      issues: sem
    };
  }
function summarizeAST(ast) {
  let lines = [];

  function walk(node, depth = 0) {
    const pad = '  '.repeat(depth);
    lines.push(`${pad}- ${node.type}: ${node.name || ''} (line ${node.line || '?'})`);

    if (node.children && node.children.length) {
      for (const c of node.children) walk(c, depth + 1);
    }
  }

  for (const n of ast) walk(n);
  return lines.join('\n');
}


  NS.buildAST = buildAST;
  NS.semanticChecks = semanticChecks;
  NS.deepSemanticAnalyze = deepSemanticAnalyze;

  console.log('TshatttoPart3_batch3 loaded — semantic + mini-AST active.');
})();

// haloo iam zoooz ;;;;;; 

/* ============================================================
  TshatttoPart3 — Batch 4 (Chain Detector & Safety Guard)
  - Namespaced: TshatttoPart3_batch4
  - Detects embedded-language fragments, builds chain analysis,
    and reports safety warnings for reserved global keys.
  - Works with results from Batch2 / Batch3 (takes existing issues)
============================================================ */

(function TshatttoPart3_batch4(){
  const NS = window.TshatttoPart3_batch4 = window.TshatttoPart3_batch4 || {};

  // helpers
  const splitLines = s => s.replace(/\r\n/g,'\n').split('\n');
  const first = (arr, d='') => (arr && arr.length>0) ? arr[0] : d;

  // quick language heuristics for small samples
  const isLikelyHTML = s => /<\s*\/?\s*[a-zA-Z]+/.test(s.slice(0,200));
  const isLikelyCSS  = s => /[a-zA-Z\-]+\s*:\s*[^;]+;/.test(s.slice(0,200));
  const isLikelyJS   = s => /\b(function|const|let|var|=>|console\.log|document\.|window\.)\b/.test(s.slice(0,200));
  const isLikelyPY   = s => /\bdef\s+\w+\s*\(|\bimport\s+\w+/.test(s.slice(0,200));
  const isLikelyCPP  = s => /#include\s+<|std::cout|cout\s*<</.test(s.slice(0,200));
  const isLikelyPHP  = s => /<\?php|echo\s+['"]/.test(s.slice(0,200));

  // Detect small embedded fragments on a per-line basis (tolerant)
  function detectEmbeddedChunks(code) {
    const lines = splitLines(code);
    const findings = [];

    for (let i = 0; i < lines.length; i++) {
      const L = lines[i];
      const sample = (L + '\n' + (lines[i+1]||'') + '\n' + (lines[i+2]||'')).trim();

      // HTML-like inside strings (\"<div>...</div>\")
      if (/[`"']\s*<\s*[a-zA-Z]/.test(sample)) {
        findings.push({line: i+1, hint: 'HTML-like fragment inside a string literal', detected: 'html-in-string'});
      }

      // <style> or CSS block inside template literal or inline JS
      if (/[\s\S]*?<style\b[\s\S]*?<\/style>[\s\S]*?/.test(code) && sample.length>0) {
        findings.push({line: i+1, hint: 'Possible <style>...</style> found inside JS template literal', detected: 'css-in-js'});
      }

      // JS tokens appearing inside CSS line (suspicious)
      if (/:.*\b(function|return|let|const|var|console\.log)\b/.test(L)) {
        findings.push({line: i+1, hint: 'JS-like tokens detected inside CSS context', detected: 'js-in-css'});
      }

      // PHP open tag that might be misplaced
      if (/<\?php/.test(L) && !isLikelyPHP(L)) {
        findings.push({line: i+1, hint: 'PHP open tag detected — ensure file is parsed as PHP', detected: 'php-open'});
      }

      // Unmatched quotes heuristic (may break parsing downstream)
      const singleQuotes = (L.match(/'/g)||[]).length;
      const doubleQuotes = (L.match(/"/g)||[]).length;
      if ((singleQuotes % 2) === 1 || (doubleQuotes % 2) === 1) {
        findings.push({line: i+1, hint: 'Unmatched quote on this line (may cause parse errors later)', detected: 'unmatched-quote'});
      }
    }

    return findings;
  }

  // Chain analysis - link embedded findings to parser issues (from other analyzers)
  function chainAnalysis(code, lang, issues) {
    const embed = detectEmbeddedChunks(code);
    const chains = [];

    // For each embedded finding, find nearest issues within +/- 3 lines
    for (const e of embed) {
      const related = (issues||[]).filter(it => Math.abs(it.line - e.line) <= 3);
      chains.push({embedded: e, related});
    }

    // Additionally check for long-running unclosed constructs
    const lines = splitLines(code);
    // example: unclosed template string spanning many lines
    const openBacktickLines = [];
    for (let i=0;i<lines.length;i++){
      if (lines[i].includes('`')) openBacktickLines.push(i+1);
    }
    if (openBacktickLines.length % 2 === 1) {
      chains.push({embedded:{line:first(openBacktickLines), hint:'Unclosed template literal (backtick) detected', detected:'unclosed-template'}, related:[]});
    }

    return chains;
  }
// Safety guard: detect use of protected or unsafe tokens
function safetyGuard(code) {
  const banned = [
    'speechSynthesis',
    'localStorage',
    'TshatttoPart3',
    'TshatttoPart3_v2',
    'TshatttoPart3_batch2',
    'TshatttoPart3_batch3',
    'window.Tshattto'
  ];

  const found = [];

  for (const token of banned) {
    const re = new RegExp('\\b' + token.replace(/[-\\/\\^$*+?.()|[\\]{}]/g, '\\$&') + '\\b', 'g');
    if (re.test(code)) {
      found.push({
        token,
        msg: `Reference to protected token "${token}" detected.`
      });
    }
  }

  return found;
}
// Build a friendly text report for chains
function buildChainReport(chains) {
  if (!chains || chains.length === 0) return 'No cross-language chains detected.';

  let out = 'Cross-language chain analysis report:\n';

  for (const c of chains) {
    out += `\nLine ${c.embedded.line}: ${c.embedded.hint} (type=${c.embedded.detected})\n`;

    if (c.related && c.related.length) {
      out += '  Related parser issues nearby:\n';
      for (const r of c.related) {
        out += `    - Line ${r.line}: ${r.msg} (suggestion: ${r.fix || '—'})\n`;
      }
    } else {
      out += '  No immediate related parser issues were found within ±3 lines.\n';
    }
  }

  return out;
}


  // Public API: analyzeChain accepts code, optional langHint, and optional existingIssues
  function analyzeChain(code, langHint, existingIssues) {
    const detect = window.TshatttoPart3_batch2?.detect || (()=>'unknown');
    const lang = (langHint && langHint !== 'auto') ? langHint : detect(code);
    const embedFindings = detectEmbeddedChunks(code);
    const chains = chainAnalysis(code, lang, existingIssues || []);
    const protections = safetyGuard(code);
    return {
      language: lang,
      embedFindings,
      chains,
      protections,
      report: buildChainReport(chains)
    };
  }

  // expose
  NS.detectEmbedded = detectEmbeddedChunks;
  NS.chainAnalyze = analyzeChain;
  NS.safetyGuard = safetyGuard;

  console.log('TshatttoPart3_batch4 loaded — chain detector & safety guard active.');
})();



/* ============================================================
   ZOZ & CHATTO - SMART CODE ANALYZER v1.0 (Batch 1)
   Base setup + namespace isolation + language detection core
   ============================================================ */

(function (global) {
  "use strict";

  // إنشاء نطاق خاص للكود عشان ما يتعارضش مع باقي الملفات
  const TshatttoPart3_batch1 = {};

  // قائمة اللغات اللي البرنامج يتعرف عليها
  const supportedLangs = ["javascript", "html", "css", "python", "cpp", "php"];

  // دالة بسيطة تتأكد إن اللغة مدعومة
  function isSupported(lang) {
    if (!lang) return false;
    return supportedLangs.includes(lang.toLowerCase());
  }

  // دالة تحديد اللغة (تحليل سريع حسب كلمات المفتاح)
  function detectLanguage(code) {
    if (!code || typeof code !== "string") return "unknown";
    const trimmed = code.trim();

    if (trimmed.startsWith("<!DOCTYPE") || trimmed.startsWith("<html")) return "html";
    if (/function|console\.log|let |const |=>|var /.test(code)) return "javascript";
    if (/#include|std::|int main|cout|cin/.test(code)) return "cpp";
    if (/def |print\(|import |from /.test(code)) return "python";
    if (/\$|echo |->|function /.test(code)) return "php";
    if (/\{|color:|margin:|padding:/.test(code)) return "css";



// ?#####################################
// !###################################
// todo#################################


    return "unknown";
  }
// Helper function to log formatted messages
function log(msg, type = "info") {
  const prefixMap = {
    info: "[INFO]",
    warn: "[WARN]",
    error: "[ERROR]",
    ok: "[OK]",
  };

  const prefix = prefixMap[type] || "[LOG]";
  console.log(`${prefix} ${msg}`);
}

  // إعداد كائن النتيجة
  function createResult(lang, accuracy, message) {
    return {
      language: lang,
      accuracy: accuracy,
      message: message,
      timestamp: new Date().toISOString(),
    };
  }
// Main function to analyze a code snippet
function analyzeCodeSnippet(code) {
  if (!code || code.trim() === "") {
    return createResult("none", 0, "No code provided");
  }

  const lang1 = detectLanguage(code);
  const accuracy = lang1 === "unknown" ? 0.5 : 0.95;
  const msg =
    lang1 === "unknown"
      ? "Could not confidently detect the language."
      : `Detected language: ${lang1}`;

  log(msg, lang1 === "unknown" ? "warn" : "ok");
  return createResult(lang1, accuracy, msg);
}

  // اختبار بسيط
  function runBasicTests() {
    const samples = {
      js: "function test(){ console.log('hi'); }",
      html: "<html><body><h1>Hello</h1></body></html>",
      css: "body { color: red; }",
      py: "def hi():\n  print('hi')",
      cpp: "#include <iostream>\nint main(){ std::cout << 1; }",
      php: "<?php echo 'hi'; ?>",
    };

    for (const [lang, code] of Object.entries(samples)) {
      const res = analyzeCodeSnippet(code);
      console.log(`Test ${lang},res`);
    }
  }

  // تعريف المتغيرات في الـ namespace
  TshatttoPart3_batch1.supportedLangs = supportedLangs;
  TshatttoPart3_batch1.isSupported = isSupported;
  TshatttoPart3_batch1.detectLanguage = detectLanguage;
  TshatttoPart3_batch1.analyzeCodeSnippet = analyzeCodeSnippet;
  TshatttoPart3_batch1.runBasicTests = runBasicTests;

  // تصدير الكائن في الـ global scope
  global.TshatttoPart3_batch1 = TshatttoPart3_batch1;

  console.log("✅ TshatttoPart3 Batch 1 loaded successfully.");

})(window);

