


document.addEventListener("click", function() {
  const music = document.getElementById("bgMusic");
  music.play();
}, { once: true });

// ---------------------------

// 🌫 Canvas Smoke Effect
// ---------------------------
const canvas = document.getElementById("smokeCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class SmokeParticle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.size = Math.random() * 60 + 20;
    this.opacity = Math.random() * 0.15 + 0.05;
    this.speedY = Math.random() * 0.5 + 0.2;
    this.speedX = (Math.random() - 0.5) * 0.2;
  }
  update() {
    this.y -= this.speedY;
    this.x += this.speedX;
    if (this.y + this.size < 0) this.reset();
  }
  draw() {
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0, this.x, this.y, this.size
    );
    gradient.addColorStop(0, `rgba(0,255,255,${this.opacity})`);
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
  }
}

const smokeParticles = Array.from({length: 450}, () => new SmokeParticle());
function animateSmoke(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  smokeParticles.forEach(p=>{p.update(); p.draw();});
  requestAnimationFrame(animateSmoke);
}
animateSmoke();

// ---------------------------
// 🔹 Game Variables & DOM
// ---------------------------
let selectedLang = null;
let currentQuestionIndex = 0;
let totalQuestions = 5;
let currentTimer = null;
let timeLeft = 0;

let score = 0;
let stars = 0;
let correctCount = 0;
let answeredQuestions = 0;

// تحديث عرض النقاط
function updateScoreDisplay() {
  const percentCorrect = answeredQuestions ? Math.round((correctCount / answeredQuestions) * 100) : 0;
  const scoreBox = document.getElementById('scoreDisplay');
  scoreBox.textContent = `Score: ${score} | Stars: ${stars} | Correct: ${percentCorrect}%`;

  // لو نسبة الإجابات ≥ 80%، أضف تأثير هاكينج
  if(percentCorrect >= 80) {
    scoreBox.classList.add('excellent');
    document.body.style.backgroundColor = '#000'; // الشاشة تسود
    document.body.style.color = '#0f0'; // نصوص خضراء للهاكينج
  } else {
    scoreBox.classList.remove('excellent');
    document.body.style.backgroundColor = ''; 
    document.body.style.color = '';
  }
}

// إضافة نقاط بعد الإجابة الصحيحة
function addPoints(points) {
  score += points;
  stars = Math.floor(score / 10);
  correctCount++;
  answeredQuestions++;
  updateScoreDisplay();
}

// تسجيل إجابة خاطئة
function markIncorrect() {
  answeredQuestions++;
  updateScoreDisplay();
}


// !\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const cppBtn = document.getElementById('cppBtn');
const pythonBtn = document.getElementById('pythonBtn');
const jsBtn = document.getElementById('jsBtn');
const typeSelector = document.getElementById('typeSelector');
const startBtn = document.getElementById('startBattleBtn');
const questionTypeSelect = document.getElementById('questionTypeSelect');
const numQuestionsInput = document.getElementById('numQuestions');
const questionBox = document.getElementById('questionBox');
const questionText = document.getElementById('questionText');
const mcqOptions = document.getElementById('mcqOptions');
const codeInput = document.getElementById('codeInput');
const submitCodeBtn = document.getElementById('submitCodeBtn');
const feedback = document.getElementById('feedback');
const timerDisplay = document.getElementById('timer');

// ---------------------------
// 🔹 Language Selection
// ---------------------------
[cppBtn, pythonBtn, jsBtn].forEach(btn=>{
  btn.onclick = ()=>{
if(btn.id === 'cppBtn') selectedLang = 'cpp';
else if(btn.id === 'pythonBtn') selectedLang = 'python';
else if(btn.id === 'jsBtn') selectedLang = 'javascript';

    typeSelector.classList.remove('hidden');
    document.querySelectorAll('.lang-box').forEach(b=>b.style.transform='scale(1)');
    btn.style.transform='scale(1.1)';
  };
});

// ---------------------------
// 🔹 Timer
// ---------------------------
function startTimer(duration, callback){
  clearInterval(currentTimer);
  timeLeft = duration;
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;
  currentTimer = setInterval(()=>{
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;
    if(timeLeft<=0){
      clearInterval(currentTimer);
      callback();
    }
  },1000);
}

// ---------------------------
// 🔹 Load Questions
// ---------------------------
function loadNextQuestion(){
  if(currentQuestionIndex >= totalQuestions){
    alert('The game is over , Well Done 🙂');
    questionBox.classList.add('hidden');
    timerDisplay.textContent = '';
    return;
  }

  const type = questionTypeSelect.value;
  const q = getRandomQuestion(selectedLang,type);

  questionBox.classList.remove('hidden');
  questionText.textContent = q.text;
  mcqOptions.innerHTML = '';
  mcqOptions.style.display = 'none';
  codeInput.style.display = 'none';
  submitCodeBtn.style.display = 'none';
  feedback.textContent = '';

  let duration = 20;
  if(type==='mcq') duration=20;
  else if(type==='codeCorrection') duration=120;
  else if(type==='programmingTask') duration=300;

  startTimer(duration, ()=>{
    currentQuestionIndex++;
    loadNextQuestion();
  });

  if(type==='mcq'){
    mcqOptions.style.display='flex';
    q.options.forEach(opt=>{
      const btn = document.createElement('button');
      btn.textContent = opt;
      btn.onclick = ()=>{
        Array.from(mcqOptions.children).forEach(b=>b.disabled=true);
        feedback.className = '';
        if(opt === q.answer){
          feedback.classList.add('feedback-correct');
          feedback.textContent = `Your Answer is right you are very clever - ${q.explanation || ''}`;
        } else {
          feedback.classList.add('feedback-wrong');
          feedback.textContent = `The answer is Right -The answer is wrong sorry  : ${q.answer}. ${q.explanation || ''}`;
        }
      };
      mcqOptions.appendChild(btn);
    });
    questionBox.style.height='auto';
  } else {
    codeInput.style.display='block';
    submitCodeBtn.style.display='block';
    codeInput.value='';
    submitCodeBtn.onclick = ()=>{
      if(compareCode(codeInput.value,q.answer)){
        feedback.textContent=`Wow Your answer is right you are Clever ✅ - ${q.explanation||''}`;
        feedback.className='feedback-correct';
      } else {
        feedback.textContent=`The answer is Right -The answer is wrong sorrry : ${q.answer}. ${q.explanation||''}`;
        feedback.className='feedback-wrong';
      }
    };
    questionBox.style.height='auto';
  }
}

// ---------------------------
// 🔹 Start Game
// ---------------------------
startBtn.onclick = ()=>{
  if(!selectedLang){ alert('The answer is right '); return; }
  const n = parseInt(numQuestionsInput.value);
  if(n<5){ alert('The Min Number of QU is 5 '); return; }
  totalQuestions = n;
  currentQuestionIndex = 0;
  loadNextQuestion();
};











// !#############################################################
// !#############################################################
// !#############################################################
// !#############################################################

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











