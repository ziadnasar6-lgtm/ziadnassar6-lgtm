

// ========== إعداد عند تحميل الصفحة ========== //
// window.addEventListener("DOMContentLoaded", () => {

  // ✅ قائمة الدروس
 const allLessons = [
    {
      id: 1,
      title: "C++ Basics ",
      video: "https://youtu.be/35qTqtpQMxg?si=QzKNnNnjDoGMfI56",
      description: [
        "Learn what C++ Basics Befor Array ",

      ],



     questions: [

  {
    question: "What is a variable in C++?",
    options: [
      "A function that runs code",
      "A container used to store data",
      "A loop statement",
      "A condition checker"
    ],
    correct: 1,
    explanation: "A variable stores data that can change during program execution."
  },

  {
    question: "Which of the following is a valid variable declaration in C++?",
    options: [
      "int = x;",
      "int x;",
      "x int;",
      "declare x int;"
    ],
    correct: 1,
    explanation: "In C++, the data type must come before the variable name."
  },

  {
    question: "What will be the output?\nint x = 10;\ncout << x;",
    options: ["10", "x", "0", "Error"],
    correct: 0,
    explanation: "The value of x is printed, which is 10."
  },

  {
    question: "Which operator is used for comparison in conditions?",
    options: ["=", "==", "!=", "Both == and !="],
    correct: 3,
    explanation: "== and != are comparison operators used in conditions."
  },

  {
    question: "What will be the output?\nint x = 5;\nif(x > 3)\ncout << \"Yes\";",
    options: ["Yes", "No", "Error", "Nothing"],
    correct: 0,
    explanation: "The condition is true, so the statement executes."
  },

  {
    question: "When does the else block execute?",
    options: [
      "When if condition is true",
      "Always",
      "When if condition is false",
      "Only inside loops"
    ],
    correct: 2,
    explanation: "Else executes only if the if condition is false."
  },

  {
    question: "What is a nested if statement?",
    options: [
      "An if without condition",
      "Multiple if statements in a loop",
      "An if inside another if",
      "An if inside switch"
    ],
    correct: 2,
    explanation: "Nested if means placing an if statement inside another if."
  },

  {
    question: "What will be the output?\nint x = 10;\nif(x > 5){\n if(x < 20)\n  cout << \"A\";\n}",
    options: ["A", "Nothing", "Error", "B"],
    correct: 0,
    explanation: "Both conditions are true, so 'A' is printed."
  },

  {
    question: "Which statement is best when checking one variable against many values?",
    options: ["if", "nested if", "switch", "for loop"],
    correct: 2,
    explanation: "Switch is clearer for multiple fixed values."
  },

  {
    question: "What keyword is required to prevent fall-through in switch?",
    options: ["stop", "exit", "break", "continue"],
    correct: 2,
    explanation: "Break stops execution after a matched case."
  },

  {
    question: "What happens if break is omitted in a switch case?",
    options: [
      "Compilation error",
      "Only one case executes",
      "Next cases execute automatically",
      "Program stops"
    ],
    correct: 2,
    explanation: "Without break, execution continues to the next case."
  },

  {
    question: "What is the purpose of a loop?",
    options: [
      "Store values",
      "Repeat code",
      "Compare values",
      "Stop execution"
    ],
    correct: 1,
    explanation: "Loops are used to repeat a block of code."
  },

  {
    question: "Which loop is best when the number of iterations is known?",
    options: ["while", "do-while", "for", "if"],
    correct: 2,
    explanation: "For loop is ideal when iterations are known."
  },

  {
    question: "What will be the output?\nfor(int i=0;i<3;i++)\ncout<<i;",
    options: ["012", "123", "03", "Error"],
    correct: 0,
    explanation: "The loop prints 0, then 1, then 2."
  },

  {
    question: "When does a while loop stop?",
    options: [
      "After one iteration",
      "When condition becomes false",
      "When break is used only",
      "Never"
    ],
    correct: 1,
    explanation: "While loop stops when its condition becomes false."
  },

  {
    question: "What is the difference between while and do-while?",
    options: [
      "No difference",
      "while runs at least once",
      "do-while runs at least once",
      "while runs only once"
    ],
    correct: 2,
    explanation: "do-while executes at least once before checking condition."
  },

  {
    question: "What will be the output?\nint x = 0;\nwhile(x < 3){\n cout << x;\n x++;\n}",
    options: ["012", "123", "03", "Error"],
    correct: 0,
    explanation: "The loop prints 0, 1, then 2."
  },

  {
    question: "Which keyword immediately exits a loop?",
    options: ["stop", "exit", "break", "return"],
    correct: 2,
    explanation: "Break immediately exits the loop."
  },

  {
    question: "Which keyword skips the current iteration and continues the loop?",
    options: ["skip", "pass", "continue", "break"],
    correct: 2,
    explanation: "Continue skips the current iteration."
  },

  {
    question: "Identify the error:\nint x;\nif(x > 0)\ncout << x;",
    options: [
      "Syntax error",
      "x is uninitialized",
      "Logical error",
      "No error"
    ],
    correct: 1,
    explanation: "Variable x is used without initialization."
  } , 

]
    } , 


{
      id: 2,
      title: "All abou Array ",
      video: "https://youtu.be/-Xfx53vVvR0?si=skL1-vus__n098Hz",
      description: [
        "After Watching this viedo you will know every thing about Array ",
        
      ],
questions: [

  // =======================
  // VARIABLES + IF + LOOPS
  // =======================


    {
    question: "What will be the output?\nint arr[3]={1,2,3};\ncout<<arr[1];",
    options: ["1", "2", "3", "Error"],
    correct: 1,
    explanation: "arr[1] accesses the second element, which is 2."
  },

  {

    question: "What is a variable in C++?",
    options: [
      "A fixed value",
      "A container used to store data",
      "A loop statement",
      "An array"
    ],
    correct: 1,
    explanation: "A variable stores data that can change during program execution."
  },




  {
    question: "What will be the output?\nfor(int i=0;i<2;i++)\n cout<<i;",
    options: ["01", "12", "02", "Error"],
    correct: 0,
    explanation: "The loop runs twice and prints 0 then 1."
  },



  // =======================
  // ARRAYS (10 QUESTIONS)
  // =======================

  {
    question: "What is an array in C++?",
    options: [
      "A collection of different data types",
      "A collection of same data type values",
      "A function",
      "A condition statement"
    ],
    correct: 1,
    explanation: "An array stores multiple values of the same data type."
  },


  {
    question: "What will be the output?\nint x = 5;\nif(x > 3)\n cout << \"Yes\";",
    options: ["Yes", "No", "Nothing", "Error"],
    correct: 0,
    explanation: "The condition is true, so the statement executes."
  },
  {
    question: "Which is a correct array declaration?",
    options: [
      "int arr(5);",
      "int arr = 5;",
      "int arr[5];",
      "array int arr;"
    ],
    correct: 2,
    explanation: "Arrays are declared using square brackets."
  },

  {
    question: "What is the index of the first element in an array?",
    options: ["0", "1", "-1", "Depends on size"],
    correct: 0,
    explanation: "Array indexing in C++ starts from 0."
  },


    {
    question: "Which keyword exits a loop immediately?",
    options: ["stop", "exit", "break", "continue"],
    correct: 2,
    explanation: "break exits the loop immediately."
  },
  {
    question: "Identify the error:\nint arr[3];\narr[3] = 10;",
    options: [
      "No error",
      "Wrong data type",
      "Index out of bounds",
      "Array not initialized"
    ],
    correct: 2,
    explanation: "Valid indices are 0,1,2. arr[3] is out of bounds."
  },

  {
    question: "What will be the output?\nint arr[2]={5,10};\ncout<<arr[0]+arr[1];",
    options: ["5", "10", "15", "Error"],
    correct: 2,
    explanation: "The sum of the two elements is 15."
  },

  {
    question: "Which loop is commonly used to traverse an array?",
    options: ["if", "switch", "for", "do-while"],
    correct: 2,
    explanation: "For loop is commonly used to iterate through arrays."
  },

  {
    question: "What happens if you access an array index that does not exist?",
    options: [
      "Compilation error",
      "Program stops safely",
      "Undefined behavior",
      "Index resets to zero"
    ],
    correct: 2,
    explanation: "Accessing out-of-bounds indices causes undefined behavior."
  },
 


  {
    question: "What is a nested if statement?",
    options: [
      "Multiple if statements in sequence",
      "An if inside another if",
      "An if inside a loop only",
      "An if without condition"
    ],
    correct: 1,
    explanation: "Nested if means placing an if statement inside another if."
  },
  {
    question: "What will be the output?\nint arr[3]={0};\ncout<<arr[1];",
    options: ["0", "Garbage value", "1", "Error"],
    correct: 0,
    explanation: "All elements are initialized to 0."
  },

  {
    question: "What is the size of this array?\nint arr[]={1,2,3,4};",
    options: ["3", "4", "5", "Undefined"],
    correct: 1,
    explanation: "The array contains 4 elements."
  } ,

]

},  


 
 {
      id: 3,
      title: "All abou Function",
      video: "https://youtu.be/dQZZg8okYKg?si=ua1UdYm5kc1qBwsx",
      description: [
        "After Watching this viedo you will know every thing about Array",
        
      ],



questions: [

  {
    question: "What is the main purpose of a function in C++?",
    options: [
      "Store multiple values",
      "Repeat code automatically",
      "Organize and reuse code",
      "Control program flow only"
    ],
    correct: 2,
    explanation: "Functions help organize code and allow reusability."
  },

  {
    question: "What will be the output?\nint arr[3]={1,2,3};\ncout<<arr[2];",
    options: ["1", "2", "3", "Error"],
    correct: 2,
    explanation: "arr[2] accesses the third element, which is 3."
  },

  {
    question: "Which part of a function specifies what value it returns?",
    options: [
      "Function name",
      "Parameters",
      "Return type",
      "Function body"
    ],
    correct: 2,
    explanation: "The return type defines the type of value returned by the function."
  },

  {
    question: "Which of the following is a correct function declaration?",
    options: [
      "function add(int a, int b);",
      "int add(int a, int b);",
      "add int(int a, int b);",
      "declare add(int a, int b);"
    ],
    correct: 1,
    explanation: "C++ functions must specify return type first."
  },

  {
    question: "What is the index of the first element in an array?",
    options: ["1", "0", "-1", "Depends on size"],
    correct: 1,
    explanation: "Array indexing in C++ starts from 0."
  },

  {
    question: "What will be returned by this function?\nint square(int x){ return x*x; }",
    options: [
      "x",
      "x + x",
      "x * x",
      "Nothing"
    ],
    correct: 2,
    explanation: "The function returns the square of x."
  },

  {
    question: "Identify the error:\nint arr[2];\narr[2] = 5;",
    options: [
      "No error",
      "Wrong data type",
      "Index out of bounds",
      "Array must be initialized"
    ],
    correct: 2,
    explanation: "Valid indices are 0 and 1 only."
  },

  {
    question: "What keyword is used to return a value from a function?",
    options: ["break", "continue", "return", "exit"],
    correct: 2,
    explanation: "return sends a value back to the caller."
  },

  {
    question: "What happens if a non-void function does not return a value?",
    options: [
      "Returns 0 automatically",
      "Compilation error always",
      "Undefined behavior",
      "Program stops"
    ],
    correct: 2,
    explanation: "Missing return in non-void functions leads to undefined behavior."
  },

  {
    question: "Which loop is commonly used to iterate over an array?",
    options: ["if", "switch", "for", "break"],
    correct: 2,
    explanation: "For loops are commonly used to traverse arrays."
  },

  {
    question: "What will be the output?\nint add(int a,int b){return a+b;}\ncout<<add(2,3);",
    options: ["2", "3", "5", "Error"],
    correct: 2,
    explanation: "The function returns the sum: 2 + 3 = 5."
  },

  {
    question: "How many elements does this array contain?\nint arr[]={4,5,6,7};",
    options: ["3", "4", "5", "Undefined"],
    correct: 1,
    explanation: "The array has 4 elements."
  },

  {
    question: "Which of the following correctly calls a function?",
    options: [
      "call add(3,4);",
      "add 3,4;",
      "add(3,4);",
      "function add(3,4);"
    ],
    correct: 2,
    explanation: "Functions are called using name followed by parentheses."
  },

  {
    question: "What is passed to a function through parameters?",
    options: [
      "Return values",
      "Conditions",
      "Input values",
      "Arrays only"
    ],
    correct: 2,
    explanation: "Parameters receive input values when a function is called."
  },

  {
    question: "What will be the output?\nint arr[3]={0};\ncout<<arr[1];",
    options: ["0", "Garbage value", "1", "Error"],
    correct: 0,
    explanation: "All elements are initialized to 0."
  }

]
 }, 

 




 {
      id: 4,
      title: " pointer part (1)",
      video: "https://youtu.be/v-eV72gnUv0?si=FoZtkEtDBh5_aZls",
      description: [
        "Pointre part one ",
   
      ],


questions: [

  {
    question: "What does a pointer store?",
    options: [
      "A value",
      "An address",
      "A function",
      "An array"
    ],
    correct: 1,
    explanation: "A pointer stores the memory address of another variable."
  },

  {
    question: "Which symbol is used to access the value pointed to by a pointer?",
    options: ["&", "*", "#", "%"],
    correct: 1,
    explanation: "* is used to dereference a pointer and get the value."
  },

  {
    question: "What will be the output?\nint x = 7;\nint *p = &x;\ncout << x;",
    options: ["7", "Address of x", "0", "Error"],
    correct: 0,
    explanation: "The value of x is printed, which is 7."
  },

  {
    question: "Which line correctly declares a pointer to an integer?",
    options: [
      "int p;",
      "int &p;",
      "int *p;",
      "pointer int p;"
    ],
    correct: 2,
    explanation: "int *p declares a pointer to an integer."
  },

  {
    question: "What should a pointer contain before being dereferenced?",
    options: [
      "Any random value",
      "A valid memory address",
      "A loop",
      "A function"
    ],
    correct: 1,
    explanation: "A pointer must point to a valid address before dereferencing."
  }

]


    },

 
 
 {
      id: 5,
      title: "pointer part (2)",
      video: "https://youtu.be/cvOthjQn1Cg?si=1KY6QoQIeOHm421x",
      description: [
        "pointer part two ",
        
      ],

     questions: [

  {
    question: "What is a pointer in C++?",
    options: [
      "A variable that stores a value",
      "A variable that stores an address",
      "A function that returns an address",
      "A data type"
    ],
    correct: 1,
    explanation: "A pointer is a variable that stores the memory address of another variable."
  },

  {
    question: "Which symbol is used to declare a pointer?",
    options: ["&", "*", "#", "@"],
    correct: 1,
    explanation: "The * symbol is used when declaring a pointer variable."
  },

  {
    question: "What will be the output?\nint x = 10;\nint *p = &x;\ncout << *p;",
    options: ["Address of x", "0", "10", "Error"],
    correct: 2,
    explanation: "Dereferencing the pointer using *p gives the value of x, which is 10."
  },

  {
    question: "What does the & operator do in this code?\nint x = 5;\nint *p = &x;",
    options: [
      "Gets the value of x",
      "Gets the address of x",
      "Declares a pointer",
      "Deletes x from memory"
    ],
    correct: 1,
    explanation: "& returns the memory address of the variable."
  },

  {
    question: "Identify the error:\nint *p;\ncout << *p;",
    options: [
      "Syntax error",
      "p is not a pointer",
      "Dereferencing an uninitialized pointer",
      "No error"
    ],
    correct: 2,
    explanation: "Using an uninitialized pointer leads to undefined behavior."
  }

]

    },

 
 {
      id: 6,
      title: "pointer part (3)",
      video: "https://youtu.be/CVRDTfl0BLM?si=Mj8tbYemx-uUAbNI",
      description: [
        "Learn pointer part three ",
    
      ],





      questions: [

  {
    question: "What does a pointer store in C++?",
    options: [
      "A value",
      "A memory address",
      "A function",
      "An array"
    ],
    correct: 1,
    explanation: "A pointer stores the memory address of another variable."
  },

  {
    question: "What will be the output?\nint x = 5;\nint *p = &x;\ncout << *p;",
    options: ["5", "Address of x", "0", "Error"],
    correct: 0,
    explanation: "Dereferencing the pointer prints the value of x, which is 5."
  },

  {
    question: "Which symbol is used to get the address of a variable?",
    options: ["*", "&", "#", "@"],
    correct: 1,
    explanation: "& is the address-of operator."
  },

  {
    question: "Identify the problem:\nint *p;\n*p = 10;",
    options: [
      "Syntax error",
      "p is not initialized",
      "Wrong data type",
      "No problem"
    ],
    correct: 1,
    explanation: "The pointer is uninitialized before dereferencing."
  },

  {
    question: "Which declaration is correct for a pointer to int?",
    options: [
      "int p;",
      "int &p;",
      "int *p;",
      "pointer int p;"
    ],
    correct: 2,
    explanation: "int *p correctly declares a pointer to int."
  },

  {
    question: "What will be the output?\nint arr[3]={1,2,3};\nint *p = arr;\ncout << *p;",
    options: ["1", "2", "3", "Error"],
    correct: 0,
    explanation: "The pointer points to the first element of the array."
  },

  {
    question: "What does p+1 point to?\nint arr[3]={5,6,7};\nint *p = arr;",
    options: [
      "arr[0]",
      "arr[1]",
      "arr[2]",
      "Invalid memory"
    ],
    correct: 1,
    explanation: "Pointer arithmetic moves to the next element in the array."
  },

  {
    question: "What will be the output?\nint arr[2]={4,8};\nint *p = arr;\ncout << *(p+1);",
    options: ["4", "8", "0", "Error"],
    correct: 1,
    explanation: "*(p+1) accesses the second element of the array."
  },

  {
    question: "What does this function do?\nvoid change(int *p){ *p = 20; }",
    options: [
      "Changes a local copy only",
      "Changes the original variable",
      "Returns 20",
      "Causes an error"
    ],
    correct: 1,
    explanation: "Passing a pointer allows modifying the original variable."
  },

  {
    question: "What will be the output?\nint x = 3;\nchange(&x);\ncout << x;",
    options: ["3", "20", "Address of x", "Error"],
    correct: 1,
    explanation: "The function modifies x through its pointer."
  }

]


    },



  ];

  
  
// ================= عناصر الصفحة =================
const lessonsGrid = document.getElementById("lessonsGrid");
const lessonTitle = document.getElementById("lessonTitle");
const lessonDesc = document.getElementById("lessonDesc");
const watchBtn = document.getElementById("watchLectureBtn");
const quizContainer = document.getElementById("quizContainer");
const startQuizBtn = document.getElementById("startQuizBtn");
const progressFill = document.getElementById("progressFill");

// ===== مادة محددة =====
const subjectKey = "c++ "; // غيّرها حسب المادة: "php", "html", ...
let stars = JSON.parse(localStorage.getItem(`${subjectKey}_stars`)) || 0;
let unlockedLessons = JSON.parse(localStorage.getItem(`${subjectKey}_unlockedLessons`)) || [0];

let currentLesson = null;

// ================= دالة تحديث الأقفال =================
function updateLessonLocks() {
  const cards = document.querySelectorAll("#lessonsGrid .lesson-box");
  cards.forEach((card, index) => {
    if (unlockedLessons.includes(index)) {
      card.classList.remove("locked");
      card.querySelector(".lock-icon").textContent = "🔓";
    } else {
      card.classList.add("locked");
      card.querySelector(".lock-icon").textContent = "🔒";
    }
  });
}

// ================= إنشاء بطاقات الدروس =================
allLessons.forEach((lesson, index) => {
  const card = document.createElement("div");
  card.className = `lesson-box ${unlockedLessons.includes(index) ? "" : "locked"}`;
  card.innerHTML = `
    <h3>${lesson.title}</h3>
    <span class="lock-icon">${unlockedLessons.includes(index) ? "🔓" : "🔒"}</span>
  `;

  card.addEventListener("click", () => {
    const isUnlocked = unlockedLessons.includes(index);
    if (!isUnlocked) {
      alert("🔒 You must complete the previous lesson first!");
      return;
    }
    showLesson(lesson, index);
  });

  lessonsGrid.appendChild(card);
});

// ================= عرض تفاصيل الدرس =================
function showLesson(lesson, index) {
  currentLesson = lesson;
  lessonTitle.textContent = lesson.title;
  lessonDesc.innerHTML = `${lesson.description[0]}<br>${lesson.description[1]}`;
  watchBtn.onclick = () => window.open(lesson.video, "_blank");

  quizContainer.innerHTML = "";
  startQuizBtn.style.display = "block";
  startQuizBtn.dataset.lessonIndex = index;
  startQuizBtn.type = "button";
  window.scrollTo({ top: lessonTitle.offsetTop, behavior: "smooth" });
}

// ================= بدء الاختبار =================
startQuizBtn.addEventListener("click", () => {
  if (!currentLesson) {
    alert("Please select a lesson first!");
    return;
  }

  const questions = currentLesson.questions.slice(0, currentLesson.questionCount || currentLesson.questions.length);
  quizContainer.innerHTML = "";

  questions.forEach((q, index) => {
    const qBox = document.createElement("div");
    qBox.className = "question-box";
    qBox.style.marginBottom = "25px";
    qBox.innerHTML = `
      <h3>${index + 1}. ${q.question}</h3>
      ${q.options.map((opt, i) => `
        <label class="option-row" style="display:block; margin-top:8px;">
          <input type="radio" name="q${index}" value="${i}">
          ${opt}
        </label>
      `).join("")}
    `;
    quizContainer.appendChild(qBox);
  });

  const submitBtn = document.createElement("button");
  submitBtn.type = "button";
  submitBtn.textContent = "Send Answers";
  submitBtn.className = "start-btn";
  quizContainer.appendChild(submitBtn);

  submitBtn.onclick = () => {
    let correctCount = 0;
    const userAnswers = [];

    questions.forEach((q, index) => {
      const selected = quizContainer.querySelector(`input[name="q${index}"]:checked`);
      const userAnswer = selected ? parseInt(selected.value) : -1;
      userAnswers.push(userAnswer);
      if (userAnswer === q.correct) correctCount++;
    });

    quizContainer.innerHTML = "";

    const feedbackMsg = document.createElement("div");
    feedbackMsg.style.position = "fixed";
    feedbackMsg.style.top = "30px";
    feedbackMsg.style.left = "50%";
    feedbackMsg.style.transform = "translateX(-50%)";
    feedbackMsg.style.padding = "15px 25px";
    feedbackMsg.style.borderRadius = "12px";
    feedbackMsg.style.fontSize = "18px";
    feedbackMsg.style.fontWeight = "bold";
    feedbackMsg.style.zIndex = "9999";
    feedbackMsg.style.transition = "opacity 0.5s ease";

    const successRate = correctCount / questions.length;

    if (successRate >= 0.9) {
      feedbackMsg.textContent = "🎯 Wow your answer is wonderful😍";
      feedbackMsg.style.background = "rgba(0,255,100,0.9)";
      feedbackMsg.style.color = "#000";
    } else if (successRate >= 0.5) {
      feedbackMsg.textContent = "👍 You are good man 💪";
      feedbackMsg.style.background = "rgba(255,215,0,0.9)";
      feedbackMsg.style.color = "#000";
    } else {
      feedbackMsg.textContent = "😅 Don't worry, try again";
      feedbackMsg.style.background = "rgba(255,80,80,0.9)";
      feedbackMsg.style.color = "#fff";
    }

    document.body.appendChild(feedbackMsg);
    setTimeout(() => {
      feedbackMsg.style.opacity = "0";
      setTimeout(() => feedbackMsg.remove(), 500);
    }, 3000);

    window.scrollTo({ top: quizContainer.offsetTop - 50, behavior: "smooth" });

    questions.forEach((q, index) => {
      const userAnswer = userAnswers[index];
      const isCorrect = userAnswer === q.correct;

      const resultBox = document.createElement("div");
      resultBox.className = "question-result";
      resultBox.style.border = "2px solid " + (isCorrect ? "#00ff99" : "#ff4d4d");
      resultBox.style.background = isCorrect ? "rgba(0,255,100,0.1)" : "rgba(255,80,80,0.1)";
      resultBox.style.borderRadius = "10px";
      resultBox.style.padding = "15px";
      resultBox.style.marginBottom = "20px";
      resultBox.style.boxShadow = isCorrect ? "0 0 10px #00ff88" : "0 0 10px #ff4d4d";

      resultBox.innerHTML = `
        <h3>${index + 1}. ${q.question}</h3>
        <p><strong>Your answer:</strong> ${userAnswer >= 0 ? q.options[userAnswer] : "You have not answered yet!"}</p>
        <p><strong>The right answer:</strong> ${q.options[q.correct]}</p>
        <p class="explanation">💡 ${q.explanation}</p>
      `;
      quizContainer.appendChild(resultBox);
    });

    const doneBtn = document.createElement("button");
    doneBtn.type = "button";
    doneBtn.textContent = "✅ Done";
    doneBtn.className = "watch-btn";
    doneBtn.style.marginTop = "15px";
    quizContainer.appendChild(doneBtn);

    doneBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (successRate >= 0.5) {
        stars++;
        localStorage.setItem(`${subjectKey}_stars`, JSON.stringify(stars));
        updateStars(stars);

        const currentIndex = allLessons.indexOf(currentLesson);
        const nextIndex = currentIndex + 1;
        if (nextIndex < allLessons.length && !unlockedLessons.includes(nextIndex)) {
          unlockedLessons.push(nextIndex);
          localStorage.setItem(`${subjectKey}_unlockedLessons`, JSON.stringify(unlockedLessons));
          updateLessonLocks();
          alert("🎉 Great work! Next lesson unlocked 👏");
        }
      }
    };
  };
});

// ================= دالة تحديث النجوم =================
function updateStars(stars) {
  const starsContainer = document.getElementById("starsContainer");
  const rankTitle = document.getElementById("rank-title");
  const starsSection = document.getElementById("stars-container");
  const totalStars = 6;

  starsContainer.innerHTML = "";
  starsSection.innerHTML = "";

  const crowns = Math.floor(stars / 2);
  const remainingStars = stars % 2;

  for (let i = 0; i < crowns; i++) {
    const crown = document.createElement("span");
    crown.textContent = "👑";
    crown.classList.add("crown");
    starsContainer.appendChild(crown);
    starsSection.appendChild(crown.cloneNode(true));
  }

  for (let i = 0; i < remainingStars; i++) {
    const star = document.createElement("span");
    star.textContent = "⭐";
    star.classList.add("star", "active");
    starsContainer.appendChild(star);
    starsSection.appendChild(star.cloneNode(true));
  }

  let rank = "";
  if (stars < 1) rank = "Cat";
  else if (stars < 2) rank = "Forest Cat";
  else if (stars < 3) rank = "Strong Tiger";
  else if (stars < 4) rank = "Fierce Lion";
  else if (stars < 5) rank = "🐉 Dragon";
  else if (stars < 7) rank = "De Dragon 👑";
  else rank = "👑 Supreme Champion of C++ 🔥";

  if (rankTitle) rankTitle.textContent = rank;

  const progressPercent = Math.min((stars / totalStars) * 100, 100);
  const progressBar = document.createElement("div");
  progressBar.innerHTML = `
    <div style="width:100%; background:#ddd; height:15px; border-radius:10px; overflow:hidden; margin-top:10px;">
      <div style="
        width:${progressPercent}%;
        height:100%;
        background:linear-gradient(90deg, gold, orange);
        transition:width 0.5s ease;
      "></div>
    </div>
    <p style="text-align:center; margin-top:5px; font-size:0.9rem;">
      ${stars} / ${totalStars} Stars Collected
    </p>
  `;
  starsContainer.appendChild(progressBar);
}

// ================= استدعاء الدوال عند تحميل الصفحة =================
document.addEventListener("DOMContentLoaded", () => {
  updateStars(stars);
  updateLessonLocks();
});
