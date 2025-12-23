

// ========== إعداد عند تحميل الصفحة ========== //
// window.addEventListener("DOMContentLoaded", () => {

  // ✅ قائمة الدروس
 const allLessons = [
    {
      id: 1,
      title: "C++ Oop (1) ",
      video: "https://youtu.be/aJG-KnmfFxM?si=KHbTj9K6pHS_kRJ4",
      description: [
        "Learn what is oop and what is The class  ",

      ],
questions: [

  {
    question: "What does OOP stand for?",
    options: [
      "Object Oriented Program",
      "Object Oriented Programming",
      "Only Object Programming",
      "Ordered Object Programming"
    ],
    correct: 1,
    explanation: "OOP stands for Object Oriented Programming."
  },

  {
    question: "What is the main idea of Object Oriented Programming?",
    options: [
      "Writing code without functions",
      "Organizing code using objects",
      "Using loops only",
      "Avoiding variables"
    ],
    correct: 1,
    explanation: "OOP is based on organizing code around objects."
  },

  {
    question: "What is a class in C++?",
    options: [
      "A variable",
      "A blueprint for creating objects",
      "A function",
      "A loop"
    ],
    correct: 1,
    explanation: "A class is a blueprint that defines properties and behaviors of objects."
  },

  {
    question: "What is an object?",
    options: [
      "A data type",
      "An instance of a class",
      "A function inside a class",
      "A keyword"
    ],
    correct: 1,
    explanation: "An object is an instance created from a class."
  },

  {
    question: "Which keyword is used to define a class in C++?",
    options: ["struct", "object", "class", "define"],
    correct: 2,
    explanation: "The keyword 'class' is used to define a class in C++."
  },

  {
    question: "What are variables inside a class called?",
    options: [
      "Local variables",
      "Attributes (data members)",
      "Parameters",
      "Objects"
    ],
    correct: 1,
    explanation: "Variables inside a class are called attributes or data members."
  },

  {
    question: "What are functions inside a class called?",
    options: [
      "Global functions",
      "Loops",
      "Methods (member functions)",
      "Constructors only"
    ],
    correct: 2,
    explanation: "Functions inside a class are called methods or member functions."
  },

  {
    question: "What will this code do?\nclass Car { int speed; };",
    options: [
      "Creates an object",
      "Defines a class only",
      "Prints speed",
      "Causes an error"
    ],
    correct: 1,
    explanation: "This code only defines a class, no object is created."
  },

  {
    question: "Which of the following correctly creates an object of class Car?",
    options: [
      "Car();",
      "object Car;",
      "Car c;",
      "create Car c;"
    ],
    correct: 2,
    explanation: "Car c; creates an object of the class Car."
  },

  {
    question: "How do you access a class member using an object?",
    options: [
      "Using :",
      "Using ->",
      "Using .",
      "Using #"
    ],
    correct: 2,
    explanation: "The dot operator is used to access members of an object."
  },

  {
    question: "What is a constructor?",
    options: [
      "A normal function",
      "A function used to destroy objects",
      "A special function used to initialize objects",
      "A loop inside a class"
    ],
    correct: 2,
    explanation: "A constructor initializes objects when they are created."
  },

  {
    question: "What is special about a constructor name?",
    options: [
      "It must be different from class name",
      "It must return int",
      "It has the same name as the class",
      "It uses the keyword new"
    ],
    correct: 2,
    explanation: "A constructor has the same name as its class."
  },

  {
    question: "How many constructors can a class have?",
    options: [
      "Only one",
      "Two only",
      "Multiple constructors",
      "None"
    ],
    correct: 2,
    explanation: "A class can have multiple constructors (constructor overloading)."
  },

  {
    question: "When is a constructor called?",
    options: [
      "When the program ends",
      "When an object is destroyed",
      "When an object is created",
      "When a function is called"
    ],
    correct: 2,
    explanation: "A constructor is called automatically when an object is created."
  },

  {
    question: "What is the relationship between class and object?",
    options: [
      "Both are the same",
      "Object creates a class",
      "Class is a blueprint, object is a real instance",
      "Object contains multiple classes"
    ],
    correct: 2,
    explanation: "A class defines the structure, and objects are instances of it."
  }

]

    } , 


{
      id: 2,
      title: " EncapSULation  ",
      video: "https://youtu.be/u4Lv_1soZG8?si=JxtuJeLGBklHJR2X",
      description: [
        "After Watching this viedo you will know every thing about Encapsulation  ",
        
      ],


 questions: [

  {
    question: "What is Encapsulation in OOP?",
    options: [
      "Combining multiple classes",
      "Hiding data and controlling access to it",
      "Using only functions",
      "Writing code without objects"
    ],
    correct: 1,
    explanation: "Encapsulation means hiding data and allowing controlled access through methods."
  },

  {
    question: "Which OOP concept focuses on data hiding?",
    options: [
      "Inheritance",
      "Polymorphism",
      "Encapsulation",
      "Abstraction"
    ],
    correct: 2,
    explanation: "Encapsulation is responsible for data hiding."
  },

  {
    question: "Which access specifier is used to hide data members?",
    options: ["public", "private", "protected", "static"],
    correct: 1,
    explanation: "private members cannot be accessed directly outside the class."
  },

  {
    question: "Why do we use private variables in a class?",
    options: [
      "To make code longer",
      "To prevent direct access from outside",
      "To speed up execution",
      "To avoid using functions"
    ],
    correct: 1,
    explanation: "Private variables protect data from unauthorized access."
  },

  {
    question: "How can private data be accessed safely?",
    options: [
      "Directly using object",
      "Using global variables",
      "Using public methods",
      "Using pointers only"
    ],
    correct: 2,
    explanation: "Public methods provide controlled access to private data."
  },

  {
    question: "What are functions that access private data usually called?",
    options: [
      "Global functions",
      "Helper functions",
      "Getters and Setters",
      "Constructors only"
    ],
    correct: 2,
    explanation: "Getters and setters are used to read and modify private data."
  },

  {
    question: "What will happen if we try to access a private variable directly?",
    options: [
      "Program runs normally",
      "Runtime error",
      "Compilation error",
      "Undefined behavior"
    ],
    correct: 2,
    explanation: "Private members cause a compilation error if accessed outside the class."
  },

  {
    question: "What does this code demonstrate?\nclass A{ private: int x; };",
    options: [
      "Inheritance",
      "Encapsulation",
      "Polymorphism",
      "Abstraction"
    ],
    correct: 1,
    explanation: "The class hides its data using private access specifier."
  },

  {
    question: "Which of the following best represents encapsulation?",
    options: [
      "All variables are public",
      "Data and methods are wrapped inside a class",
      "Using loops inside classes",
      "Calling functions multiple times"
    ],
    correct: 1,
    explanation: "Encapsulation wraps data and methods together in a class."
  },

  {
    question: "What is the role of setter functions?",
    options: [
      "Display data only",
      "Initialize objects",
      "Modify private data safely",
      "Destroy objects"
    ],
    correct: 2,
    explanation: "Setters modify private data with control and validation."
  },

  {
    question: "What is the role of getter functions?",
    options: [
      "Modify private data",
      "Return private data",
      "Delete private data",
      "Create objects"
    ],
    correct: 1,
    explanation: "Getters return the value of private variables."
  },

  {
    question: "Encapsulation helps mainly to improve:",
    options: [
      "Execution speed",
      "Memory usage",
      "Security and maintainability",
      "Syntax simplicity"
    ],
    correct: 2,
    explanation: "Encapsulation improves security and code maintainability."
  },

  {
    question: "Which keyword allows controlled access to class members?",
    options: ["class", "private", "public", "return"],
    correct: 2,
    explanation: "public members are accessible from outside the class."
  },

  {
    question: "What happens if all class members are public?",
    options: [
      "Perfect encapsulation",
      "Partial encapsulation",
      "No encapsulation",
      "Compilation error"
    ],
    correct: 2,
    explanation: "If everything is public, there is no data hiding."
  },

  {
    question: "Encapsulation mainly protects:",
    options: [
      "Functions",
      "Loops",
      "Data members",
      "Objects only"
    ],
    correct: 2,
    explanation: "Encapsulation protects data members from direct access."
  }

]





},  


 
 {
      id: 3,
      title: "InHeritnace ",
      video: "https://youtu.be/jdTHhD7XmdU?si=PV2Ct6HxqaRggKgj",
      description: [
        "After Watching this viedo you will know every thing about InHeritnace ",
        
      ],
questions: [

  {
    question: "What is Inheritance in OOP?",
    options: [
      "A way to hide data",
      "A mechanism where one class acquires properties of another",
      "Combining multiple loops",
      "Using functions inside functions"
    ],
    correct: 1,
    explanation: "Inheritance allows a class to reuse properties and methods of another class."
  },

  {
    question: "Which class is inherited from another class?",
    options: [
      "Base class",
      "Derived class",
      "Parent function",
      "Child variable"
    ],
    correct: 1,
    explanation: "The derived class inherits from a base class."
  },

  {
    question: "Which class provides members to another class?",
    options: [
      "Derived class",
      "Base class",
      "Child class",
      "Friend class"
    ],
    correct: 1,
    explanation: "The base class provides properties and methods to the derived class."
  },

  {
    question: "What is the correct syntax for single inheritance?",
    options: [
      "class Derived : Base {}",
      "class Derived inherits Base {}",
      "class Base : Derived {}",
      "class Base -> Derived {}"
    ],
    correct: 0,
    explanation: "class Derived : Base {} is the correct syntax."
  },

  {
    question: "If class B inherits class A, which members does B get?",
    options: [
      "All members",
      "Public and protected members",
      "Private members only",
      "Nothing"
    ],
    correct: 1,
    explanation: "Derived class gets public and protected members of base class."
  },

  {
    question: "What is a derived class?",
    options: [
      "A class that inherits from another class",
      "A class with private variables only",
      "A class that cannot have objects",
      "A class with no functions"
    ],
    correct: 0,
    explanation: "A derived class extends the base class to reuse or modify its features."
  },

  {
    question: "What is a base class?",
    options: [
      "A class that inherits from another class",
      "A class that is inherited from",
      "A temporary class",
      "A class with only functions"
    ],
    correct: 1,
    explanation: "A base class is the class from which another class inherits."
  },

  {
    question: "What will happen if a derived class has a function with the same name as base class?",
    options: [
      "Compilation error",
      "Derived class function overrides base class function",
      "Both functions are deleted",
      "Program stops"
    ],
    correct: 1,
    explanation: "The derived class function overrides the base class function."
  },

  {
    question: "Which keyword is used to specify inheritance?",
    options: ["extends", "inherits", ":", "->"],
    correct: 2,
    explanation: "C++ uses ':' to indicate inheritance."
  },

  {
    question: "What is the main advantage of inheritance?",
    options: [
      "Memory optimization",
      "Code reusability",
      "Faster compilation",
      "Simpler syntax"
    ],
    correct: 1,
    explanation: "Inheritance allows code reuse from the base class."
  },

  {
    question: "Can a derived class have its own members?",
    options: ["Yes", "No", "Only functions", "Only variables"],
    correct: 0,
    explanation: "Derived classes can add their own attributes and methods."
  },

  {
    question: "Which of the following is NOT true about inheritance?",
    options: [
      "Derived class can reuse base class code",
      "Derived class can have additional members",
      "Base class depends on derived class",
      "Base class provides public/protected members"
    ],
    correct: 2,
    explanation: "Base class does not depend on derived class; dependency is one-way."
  },

  {
    question: "What will be the output?\nclass A { public: int x=5;};\nclass B : public A {};\nB obj; cout<<obj.x;",
    options: ["5", "0", "Error", "Undefined"],
    correct: 0,
    explanation: "Derived class B inherits x from A, so obj.x = 5."
  },

  {
    question: "Is multiple inheritance allowed in C++?",
    options: ["Yes", "No", "Only in Java", "Only with private members"],
    correct: 0,
    explanation: "C++ allows multiple inheritance, but here we focus on single inheritance basics."
  },

  {
    question: "Which type of inheritance is being used?\nclass B : public A {};",
    options: ["Single inheritance", "Multiple inheritance", "Multilevel inheritance", "Hybrid inheritance"],
    correct: 0,
    explanation: "B inherits from A, which is single inheritance."
  }

]

 }, 

 




 {
      id: 4,
      title: " Exercises",
      video: "https://youtu.be/Wd0HX2mVfDA?si=0EcbYgryQMP_YbpK",
      description: [
        "Exercises on oop Basics , iNHeritnace and Encapsulation  ",
   
      ],


questions: [

  // ======================
  // OOP Basics (Class & Object)
  // ======================

    {
    question: "Which class is inherited from another class?",
    options: [
      "Base class",
      "Derived class",
      "Parent function",
      "Child variable"
    ],
    correct: 1,
    explanation: "The derived class inherits from a base class."
  },

   {
    question: "How can private data be accessed safely?",
    options: [
      "Directly using object",
      "Using global variables",
      "Using public methods",
      "Using pointers only"
    ],
    correct: 2,
    explanation: "Public methods provide controlled access to private data."
  },

  {
    question: "What is an object?",
    options: [
      "A data type",
      "An instance of a class",
      "A function inside a class",
      "A keyword"
    ],
    correct: 1,
    explanation: "An object is an instance created from a class."
  },

 
  {
    question: "What are variables inside a class called?",
    options: [
      "Local variables",
      "Attributes (data members)",
      "Parameters",
      "Objects"
    ],
    correct: 1,
    explanation: "Variables inside a class are called attributes or data members."
  },

  
  // ======================
  // Encapsulation
  // ======================
  {
    question: "What is Encapsulation in OOP?",
    options: [
      "Combining multiple classes",
      "Hiding data and controlling access to it",
      "Using only functions",
      "Writing code without objects"
    ],
    correct: 1,
    explanation: "Encapsulation means hiding data and allowing controlled access through methods."
  },

  {
    question: "What is a class in C++?",
    options: [
      "A variable",
      "A blueprint for creating objects",
      "A function",
      "A loop"
    ],
    correct: 1,
    explanation: "A class is a blueprint that defines properties and behaviors of objects."
  },
    {
    question: "What is the correct syntax for single inheritance?",
    options: [
      "class Derived : Base {}",
      "class Derived inherits Base {}",
      "class Base : Derived {}",
      "class Base -> Derived {}"
    ],
    correct: 0,
    explanation: "class Derived : Base {} is the correct syntax."
  },

  {
    question: "Which access specifier is used to hide data members?",
    options: ["public", "private", "protected", "static"],
    correct: 1,
    explanation: "private members cannot be accessed directly outside the class."
  },

 {
    question: "What is a constructor?",
    options: [
      "A normal function",
      "A function used to destroy objects",
      "A special function used to initialize objects",
      "A loop inside a class"
    ],
    correct: 2,
    explanation: "A constructor initializes objects when they are created."
  },


  {
    question: "What are functions that access private data usually called?",
    options: [
      "Global functions",
      "Helper functions",
      "Getters and Setters",
      "Constructors only"
    ],
    correct: 2,
    explanation: "Getters and setters are used to read and modify private data."
  },

  {
    question: "Encapsulation mainly protects:",
    options: [
      "Functions",
      "Loops",
      "Data members",
      "Objects only"
    ],
    correct: 2,
    explanation: "Encapsulation protects data members from direct access."
  },

  // ======================
  // Inheritance
  // ======================
  {
    question: "What is Inheritance in OOP?",
    options: [
      "A way to hide data",
      "A mechanism where one class acquires properties of another",
      "Combining multiple loops",
      "Using functions inside functions"
    ],
    correct: 1,
    explanation: "Inheritance allows a class to reuse properties and methods of another class."
  },


   {
    question: "Which keyword is used to define a class in C++?",
    options: ["struct", "object", "class", "define"],
    correct: 2,
    explanation: "The keyword 'class' is used to define a class in C++."
  },

  {
    question: "Which class provides members to another class?",
    options: [
      "Derived class",
      "Base class",
      "Child class",
      "Friend class"
    ],
    correct: 1,
    explanation: "The base class provides properties and methods to the derived class."
  },


  {
    question: "What is the main advantage of inheritance?",
    options: [
      "Memory optimization",
      "Code reusability",
      "Faster compilation",
      "Simpler syntax"
    ],
    correct: 1,
    explanation: "Inheritance allows code reuse from the base class."
  }

]
 


    },

 




















 
 {
      id: 5,
      title: "OP overloading ",
      video: "https://youtu.be/P6qqiOLXNnI?si=Et9E9ZSUAn1mvouK",
      description: [
        "Operator Overloading  ",
        
      ],
questions: [

  {
    question: "What is operator overloading in C++?",
    options: [
      "Changing the default behavior of operators",
      "Creating new operators",
      "Using operators only inside functions",
      "Avoiding operators"
    ],
    correct: 0,
    explanation: "Operator overloading allows redefining the behavior of operators for user-defined types."
  },

  {
    question: "Which operator can be overloaded in C++?",
    options: ["All operators", "Most operators except a few", "None", "Only arithmetic operators"],
    correct: 1,
    explanation: "Most operators can be overloaded, except ::, ., .* and a few others."
  },

  {
    question: "Which of the following is correct syntax for overloading +?",
    options: [
      "int operator+(int a, int b);",
      "return operator+(int a, int b);",
      "operator int +(a,b);",
      "int + operator(int a, int b);"
    ],
    correct: 0,
    explanation: "The function int operator+(int a, int b) is the correct syntax."
  },

  {
    question: "Why do we overload operators?",
    options: [
      "To simplify code readability for classes",
      "To change syntax rules",
      "To increase compilation speed",
      "To create new data types"
    ],
    correct: 0,
    explanation: "Operator overloading allows objects to be manipulated with familiar operators."
  },

  {
    question: "Can operator overloading change the precedence of operators?",
    options: ["Yes", "No", "Sometimes", "Only for + and -"],
    correct: 1,
    explanation: "Operator overloading cannot change the predefined precedence or associativity."
  },

  {
    question: "Which function is used to overload an operator inside a class?",
    options: [
      "Member function or friend function",
      "Only member function",
      "Only friend function",
      "Global function only"
    ],
    correct: 0,
    explanation: "Operators can be overloaded using member functions or friend functions."
  },

  {
    question: "What will this code do?\nclass A { int x; public: A(int a){x=a;} A operator+(A b){ return A(x+b.x); } };",
    options: [
      "Add two objects using +",
      "Cause compilation error",
      "Only works for integers",
      "Only works for floats"
    ],
    correct: 0,
    explanation: "This defines + to add two objects of class A."
  },

  {
    question: "Can we overload the assignment operator (=)?",
    options: ["Yes", "No", "Only for integers", "Only for arrays"],
    correct: 0,
    explanation: "The assignment operator can be overloaded to define custom copying behavior."
  },

  {
    question: "Can we overload logical operators like && and ||?",
    options: ["Yes", "No", "Only &&", "Only ||"],
    correct: 0,
    explanation: "Logical operators can be overloaded, but their short-circuit behavior cannot be changed."
  },

  {
    question: "Which operator cannot be overloaded in C++?",
    options: ["+", "*", "::", "=="],
    correct: 2,
    explanation: "Scope resolution operator (::) cannot be overloaded."
  },

  {
    question: "Is it possible to overload comparison operators like <, >, ==?",
    options: ["Yes", "No", "Only == and !=", "Only < and >"],
    correct: 0,
    explanation: "Comparison operators can be overloaded for custom classes."
  },

  {
    question: "What is the benefit of overloading << and >> operators?",
    options: [
      "To work with files only",
      "To allow input/output operations for custom objects",
      "To create new data types",
      "To increase execution speed"
    ],
    correct: 1,
    explanation: "Overloading << and >> allows using cout/cin with user-defined types."
  }

]


    },

 
 {
      id: 6,
      title: "The EnD ",
      video: "https://youtu.be/wcFXtDLkHxY?si=5IXa9Eooqjf1Q22S",
      description: [
        " ماشاء الله ي صديقي لو وصلت للمرحله دي وانت لازم تكون فخور بنفسك والمرحله الجاي انت هتقررها لما تشوف الفيديو بتاع المهندس احمد واحنا معاك دايما  ",
    
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
