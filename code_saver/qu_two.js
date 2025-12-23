// ---------------------------
// 🟢 JavaScript Questions
// ---------------------------
const jsMCQ = [
  { text: "What does 'var' do?", options: ["Declares a variable","Defines a function","Creates a loop","Prints text"], answer: "Declares a variable" },
  { text: "Which keyword declares a constant?", options:["var","let","const","function"], answer:"const"}
];

const jsCodeCorrection = [
  { text:"Fix: console.lo('Hello World');", answer:"console.log('Hello World');" }
];

const jsProgrammingTask = [
  { text:"Print numbers 1 to 5", answer:"for(let i=1;i<=5;i++){console.log(i);}" }
];

// ---------------------------
// 🔵 Python Questions
// ---------------------------
const pyMCQ = [
  { text:"Which is correct to print in Python?", options:["print 'Hi'","printf('Hi')","print('Hi')","echo 'Hi'"], answer:"print('Hi')" }
];

const pyCodeCorrection = [
  { text:"Fix: print('Hello)", answer:"print('Hello')" }
];

const pyProgrammingTask = [
  { text:"Print numbers 1 to 5", answer:"for i in range(1,6):\n    print(i)" }
];

// ---------------------------
// 🟣 C++ Questions
// ---------------------------
const cppMCQ = [
  { text:"Keyword to define a variable?", options:["int","var","let","define"], answer:"int" }
];

const cppCodeCorrection = [
  { text:"Fix: cout << 'Hello' ", answer:"cout << \"Hello\";" }
];

const cppProgrammingTask = [
  { text:"Print numbers 1 to 5", answer:"for(int i=1;i<=5;i++){cout<<i<<endl;}" }
];

// ---------------------------
// 🔹 Helpers
// ---------------------------
function getRandomQuestion(lang, type){
  let pool = [];
  if(lang==='javascript'){
    if(type==='mcq') pool = jsMCQ;
    else if(type==='codeCorrection') pool = jsCodeCorrection;
    else if(type==='programmingTask') pool = jsProgrammingTask;
  } else if(lang==='python'){
    if(type==='mcq') pool = pyMCQ;
    else if(type==='codeCorrection') pool = pyCodeCorrection;
    else if(type==='programmingTask') pool = pyProgrammingTask;
  } else if(lang==='cpp'){
    if(type==='mcq') pool = cppMCQ;
    else if(type==='codeCorrection') pool = cppCodeCorrection;
    else if(type==='programmingTask') pool = cppProgrammingTask;
  }

  const index = Math.floor(Math.random()*pool.length);
  return pool[index];
}

function compareCode(userCode, correctCode){
  const normalize = str => str.replace(/\s+/g,'').toLowerCase();
  return normalize(userCode) === normalize(correctCode);
}
