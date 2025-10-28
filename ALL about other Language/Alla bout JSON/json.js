









// ========== إعداد عند تحميل الصفحة ========== //
// window.addEventListener("DOMContentLoaded", () => {

  // ✅ قائمة الدروس
  const allLessons = [
    {
      id: 1,
      title: "Lesson 1",
      video: "https://www.youtube.com/watch?v=your_video_link_1",
      description: [
        "Learn what C++ is and how it became one of the most popular programming languages.",
        "We’ll write our first simple program and understand the compilation process."
      ],

      questions: [
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

{
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "What is the file extension for C++ files?",
          options: [".py", ".cpp", ".java", ".cs"],
          correct: 1,
          explanation: "C++ source files use the .cpp extension."
        },

        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }


        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
      ]

    },


{
      id: 2,
      title: "Lesson 2",
      video: "https://www.youtube.com/watch?v=your_video_link_1",
      description: [
        "Learn what C++ is and how it became one of the most popular programming languages.",
        "We’ll write our first simple program and understand the compilation process."
      ],

      questions: [
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

{
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "What is the file extension for C++ files?",
          options: [".py", ".cpp", ".java", ".cs"],
          correct: 1,
          explanation: "C++ source files use the .cpp extension."
        },

        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }


        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
      ]

    },



{
      id: 3,
      title: "Lesson 3",
      video: "https://www.youtube.com/watch?v=your_video_link_1",
      description: [
        "Learn what C++ is and how it became one of the most popular programming languages.",
        "We’ll write our first simple program and understand the compilation process."
      ],

      questions: [
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

{
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "What is the file extension for C++ files?",
          options: [".py", ".cpp", ".java", ".cs"],
          correct: 1,
          explanation: "C++ source files use the .cpp extension."
        },

        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }


        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
      ]

    },



{
      id: 4,
      title: "Lesson 4",
      video: "https://www.youtube.com/watch?v=your_video_link_1",
      description: [
        "Learn what C++ is and how it became one of the most popular programming languages.",
        "We’ll write our first simple program and understand the compilation process."
      ],

      questions: [
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

{
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "What is the file extension for C++ files?",
          options: [".py", ".cpp", ".java", ".cs"],
          correct: 1,
          explanation: "C++ source files use the .cpp extension."
        },

        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }


        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
      ]

    },





{
      id: 5,
      title: "Lesson 5",
      video: "https://www.youtube.com/watch?v=your_video_link_1",
      description: [
        "Learn what C++ is and how it became one of the most popular programming languages.",
        "We’ll write our first simple program and understand the compilation process."
      ],

      questions: [
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

{
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "What is the file extension for C++ files?",
          options: [".py", ".cpp", ".java", ".cs"],
          correct: 1,
          explanation: "C++ source files use the .cpp extension."
        },

        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }


        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
      ]

    },




{
      id: 6,
      title: "Lesson 6",
      video: "https://www.youtube.com/watch?v=your_video_link_1",
      description: [
        "Learn what C++ is and how it became one of the most popular programming languages.",
        "We’ll write our first simple program and understand the compilation process."
      ],

      questions: [
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

{
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "What is the file extension for C++ files?",
          options: [".py", ".cpp", ".java", ".cs"],
          correct: 1,
          explanation: "C++ source files use the .cpp extension."
        },

        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }


        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
      ]

    },


{
      id: 7,
      title: "Lesson 7",
      video: "https://www.youtube.com/watch?v=your_video_link_1",
      description: [
        "Learn what C++ is and how it became one of the most popular programming languages.",
        "We’ll write our first simple program and understand the compilation process."
      ],

      questions: [
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

{
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "What is the file extension for C++ files?",
          options: [".py", ".cpp", ".java", ".cs"],
          correct: 1,
          explanation: "C++ source files use the .cpp extension."
        },

        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }


        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
      ]

    },




{
      id: 8,
      title: "Lesson 8",
      video: "https://www.youtube.com/watch?v=your_video_link_1",
      description: [
        "Learn what C++ is and how it became one of the most popular programming languages.",
        "We’ll write our first simple program and understand the compilation process."
      ],

      questions: [
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

{
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "What is the file extension for C++ files?",
          options: [".py", ".cpp", ".java", ".cs"],
          correct: 1,
          explanation: "C++ source files use the .cpp extension."
        },

        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }


        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
      ]

    },



{
      id: 9,
      title: "Lesson 9",
      video: "https://www.youtube.com/watch?v=your_video_link_1",
      description: [
        "Learn what C++ is and how it became one of the most popular programming languages.",
        "We’ll write our first simple program and understand the compilation process."
      ],

      questions: [
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

{
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "What is the file extension for C++ files?",
          options: [".py", ".cpp", ".java", ".cs"],
          correct: 1,
          explanation: "C++ source files use the .cpp extension."
        },

        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }


        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
      ]

    },



 
 {
      id: 10,
      title: "Lesson 10",
      video: "https://www.youtube.com/watch?v=your_video_link_1",
      description: [
        "Learn what C++ is and how it became one of the most popular programming languages.",
        "We’ll write our first simple program and understand the compilation process."
      ],

      questions: [
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

{
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "What is the file extension for C++ files?",
          options: [".py", ".cpp", ".java", ".cs"],
          correct: 1,
          explanation: "C++ source files use the .cpp extension."
        },

        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }


        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
      ]

    },

 
 {
      id: 11,
      title: "Lesson 11",
      video: "https://www.youtube.com/watch?v=your_video_link_1",
      description: [
        "Learn what C++ is and how it became one of the most popular programming languages.",
        "We’ll write our first simple program and understand the compilation process."
      ],

      questions: [
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

{
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "What is the file extension for C++ files?",
          options: [".py", ".cpp", ".java", ".cs"],
          correct: 1,
          explanation: "C++ source files use the .cpp extension."
        },

        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }


        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
      ]

    },

 
 
 {
      id: 12,
      title: "Lesson 12",
      video: "https://www.youtube.com/watch?v=your_video_link_1",
      description: [
        "Learn what C++ is and how it became one of the most popular programming languages.",
        "We’ll write our first simple program and understand the compilation process."
      ],

      questions: [
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

{
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "What is the file extension for C++ files?",
          options: [".py", ".cpp", ".java", ".cs"],
          correct: 1,
          explanation: "C++ source files use the .cpp extension."
        },

        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }


        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
      ]

    },

 
 {
      id: 13,
      title: "Lesson 13",
      video: "https://www.youtube.com/watch?v=your_video_link_1",
      description: [
        "Learn what C++ is and how it became one of the most popular programming languages.",
        "We’ll write our first simple program and understand the compilation process."
      ],

      questions: [
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

{
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "What is the file extension for C++ files?",
          options: [".py", ".cpp", ".java", ".cs"],
          correct: 1,
          explanation: "C++ source files use the .cpp extension."
        },

        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }


        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
      ]

    },
{
      id: 14,
      title: "Lesson 14",
      video: "https://www.youtube.com/watch?v=your_video_link_1",
      description: [
        "Learn what C++ is and how it became one of the most popular programming languages.",
        "We’ll write our first simple program and understand the compilation process."
      ],

      questions: [
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

{
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "What is the file extension for C++ files?",
          options: [".py", ".cpp", ".java", ".cs"],
          correct: 1,
          explanation: "C++ source files use the .cpp extension."
        },

        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }


        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
      ]

    },
{
      id: 15,
      title: "Lesson 15",
      video: "https://www.youtube.com/watch?v=your_video_link_1",
      description: [
        "Learn what C++ is and how it became one of the most popular programming languages.",
        "We’ll write our first simple program and understand the compilation process."
      ],

      questions: [
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

{
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },
        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },

        {
          question: "Who created C++?",
          options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
          correct: 0,
          explanation: "C++ was created by Bjarne Stroustrup in 1979 as an extension of the C language."
        },


        {
          question: "What is the file extension for C++ files?",
          options: [".py", ".cpp", ".java", ".cs"],
          correct: 1,
          explanation: "C++ source files use the .cpp extension."
        },

        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }


        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
        ,
        
        {
          question: "Which company first implemented C++?",
          options: ["Microsoft", "Bell Labs", "IBM", "Apple"],
          correct: 1,
          explanation: "C++ was developed at Bell Labs."
        }
      ]

    },

 
 
 
 
 
 
 
 
 
  ];

  // ✅ عناصر الصفحة
  const lessonsGrid = document.getElementById("lessonsGrid");
  const lessonTitle = document.getElementById("lessonTitle");
  const lessonDesc = document.getElementById("lessonDesc");
  const watchBtn = document.getElementById("watchLectureBtn");
  const quizContainer = document.getElementById("quizContainer");
  const startQuizBtn = document.getElementById("startQuizBtn");
  const progressFill = document.getElementById("progressFill");

document.addEventListener("DOMContentLoaded", () => {
  updateStars(stars);
});


let currentLesson = null;
// ===== modified for subjectKey = "html" =====
const subjectKey = "json"; // change to "php" for PHP page, etc.
let stars = JSON.parse(localStorage.getItem(`${subjectKey}_stars`)) || 0;
let progress = JSON.parse(localStorage.getItem(`${subjectKey}_progress`)) || 0;
let unlockedLessons = JSON.parse(localStorage.getItem(`${subjectKey}_unlockedLessons`)) || [0];

  // ✅ إنشاء بطاقات الدروس

  // ✅ إنشاء بطاقات الدروس
allLessons.forEach((lesson, index) => {
  const card = document.createElement("div");
  const isUnlocked = unlockedLessons.includes(index);

  card.className = `lesson-box ${isUnlocked ? "" : "locked"}`;
  card.innerHTML = `
    <h3>${lesson.title}</h3>
        <span class="lock-icon">${isUnlocked ? "🔓" : "🔒"}</span>
  `;

  card.addEventListener("click", () => {
    if (!isUnlocked) {
      alert("🔒 You must complete the previous lesson first!");
      return;
    }
    showLesson(lesson, index);
  });

  lessonsGrid.appendChild(card);
});


  // ✅ عرض تفاصيل الدرس
  function showLesson(lesson, index) {
    currentLesson = lesson;
    lessonTitle.textContent = lesson.title;
    lessonDesc.innerHTML = `${lesson.description[0]}<br>${lesson.description[1]}`;
    watchBtn.onclick = () => window.open(lesson.video, "_blank");

    quizContainer.innerHTML = "";
    startQuizBtn.style.display = "block";
    startQuizBtn.dataset.lessonIndex = index;
    window.scrollTo({ top: lessonTitle.offsetTop, behavior: "smooth" });
  }

  // ✅ بدء الاختبار
  startQuizBtn.addEventListener("click", () => {
    if (!currentLesson) {
      alert("Please select a lesson first!");
      return;
    }

    const questionCount = prompt("How many questions do you want? (max " + currentLesson.questions.length + ")", currentLesson.questions.length);
    let count = parseInt(questionCount);
    if (isNaN(count) || count < 1) count = currentLesson.questions.length;

    let questions = currentLesson.questions.slice(0, count);
    quizContainer.innerHTML = "";

    // 🔹 عرض الأسئلة بمسافات
    questions.forEach((q, index) => {
      const qBox = document.createElement("div");
      qBox.className = "question-box";
      qBox.style.marginBottom = "25px";
      qBox.innerHTML = `
        <h3>${index + 1}. ${q.question}</h3>
        ${q.options
          .map(
            (opt, i) => `
          <label class="option-row" style="display:block; margin-top:8px;">
            <input type="radio" name="q${index}" value="${i}">
            ${opt}
          </label>
        `
          )
          .join("")}
      `;
      quizContainer.appendChild(qBox);
    });

    // زر الإرسال



// ✅ زر الإرسال
const submitBtn = document.createElement("button");
submitBtn.textContent = "Send Answers ";
submitBtn.className = "start-btn";
quizContainer.appendChild(submitBtn);

submitBtn.onclick = () => {
  let correctCount = 0;
  const userAnswers = [];

  // ✅ جمع الإجابات أولاً
  questions.forEach((q, index) => {
    const selected = quizContainer.querySelector(`input[name="q${index}"]:checked`);
    const userAnswer = selected ? parseInt(selected.value) : -1;
    userAnswers.push(userAnswer);
    if (userAnswer === q.correct) correctCount++;
  });

  // ✅ امسح الأسئلة
  quizContainer.innerHTML = "";












  // ✅ إنشاء إشعار مؤقت (Popup)
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
  feedbackMsg.style.boxShadow = "0 0 20px rgba(0,255,100,0.6)";

  const successRate = correctCount / questions.length;

  if (successRate >= 0.9) {
    feedbackMsg.textContent = "🎯 Wow your answer is wonderfull😍";
    feedbackMsg.style.background = "rgba(0,255,100,0.9)";
    feedbackMsg.style.color = "#000";
  } else if (successRate >= 0.5) {
    feedbackMsg.textContent = "👍 You are good man 💪";
    feedbackMsg.style.background = "rgba(255,215,0,0.9)";
    feedbackMsg.style.color = "#000";
  } else {
    feedbackMsg.textContent = "😅 Dont worry try again ";
    feedbackMsg.style.background = "rgba(255,80,80,0.9)";
    feedbackMsg.style.color = "#fff";
  }

  document.body.appendChild(feedbackMsg);

  // 🔥 اختفاء الإشعار بعد 3 ثواني
  setTimeout(() => {
    feedbackMsg.style.opacity = "0";
    setTimeout(() => feedbackMsg.remove(), 500);
  }, 3000);

  // ✅ عرض النتائج أسفل بعد سكرول ناعم
  window.scrollTo({ top: quizContainer.offsetTop - 50, behavior: "smooth" });

  questions.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === q.correct;

    const resultBox = document.createElement("div");
    resultBox.className = "question-result";
    resultBox.style.border = "2px solid " + (isCorrect ? "#00ff99" : "#ff4d4d");
    resultBox.style.background = isCorrect
      ? "rgba(0,255,100,0.1)"
      : "rgba(255,80,80,0.1)";
    resultBox.style.borderRadius = "10px";
    resultBox.style.padding = "15px";
    resultBox.style.marginBottom = "20px";
    resultBox.style.boxShadow = isCorrect
      ? "0 0 10px #00ff88"
      : "0 0 10px #ff4d4d";

    resultBox.innerHTML = `
      <h3>${index + 1}. ${q.question}</h3>
      <p><strong> Your answer: </strong> ${
        userAnswer >= 0 ? q.options[userAnswer] : "You have not answered yet !!"
      }</p>
      <p><strong> The right : </strong> ${q.options[q.correct]}</p>
      <p class="explanation">💡 ${q.explanation}</p>
    `;
    quizContainer.appendChild(resultBox);
  });







// ✅ زر الإنهاء
const doneBtn = document.createElement("button");
doneBtn.textContent = "✅ Done ";
doneBtn.className = "watch-btn";
doneBtn.style.marginTop = "15px";
quizContainer.appendChild(doneBtn);

doneBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (successRate >= 0.5) {
    // ⭐ أضف نجمة واحفظها بعد تسليم الواجب بنجاح
    stars++;
    localStorage.setItem(`${subjectKey}_stars`, JSON.stringify(stars));

    // 🔥 حدّث عرض النجوم والتيجان واللقب
    updateStars(stars);

    // 🔓 افتح الدرس التالي لو موجود
    const currentIndex = allLessons.indexOf(currentLesson);
    if (currentIndex < allLessons.length - 1 && !unlockedLessons.includes(currentIndex + 1)) {
      unlockedLessons.push(currentIndex + 1);
      localStorage.setItem(`${subjectKey}_unlockedLessons`, JSON.stringify(unlockedLessons));
      updateLessonLocks();
      alert("🎉 Great work! Next lesson unlocked 👏");
    }
  }
};

    // 🔄 أعد تحميل الصفحة بعد النجاح فقط
    setTimeout(() => {
      location.reload();
    }, 1200); // ممكن تعدّل الوقت حسب ما تحب


};
  });

// ✅ دالة تحديث النجوم والتيجان واللقب
function updateStars() {
  // 🟢 تحميل عدد النجوم من localStorage باستخدام subjectKey
  const stars = JSON.parse(localStorage.getItem(`${subjectKey}_stars`)) || 0;

  const starsContainer = document.getElementById("starsContainer");
  const rankTitle = document.getElementById("rank-title");
  const starsSection = document.getElementById("stars-container");
  const totalStars = 30;

  starsContainer.innerHTML = "";
  starsSection.innerHTML = "";

  const crowns = Math.floor(stars / 5);
  const remainingStars = stars % 5;

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
  if (stars < 5) rank = " Cat";
  else if (stars < 10) rank = " Forest Cat";
  else if (stars < 15) rank = " Strong Tiger";
  else if (stars < 20) rank = " Fierce Lion";
  else if (stars < 25) rank = "🐉 Dragon";
  else if (stars < 30) rank = "De Dragon  👑";
  else rank = "👑 Supreme Champion of C++ 🔥";

  if (rankTitle) rankTitle.textContent = rank;

  const progressPercent = Math.min((stars / totalStars) * 100, 100);

  const progressBar = document.createElement("div");
  progressBar.innerHTML = `
    <div style="width:100%; background:#ddd; height:15px; border-radius:10px; overflow:hidden; margin-top:10px;">
      <div style="
        width:${progressPercent}% ;
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

// ✅ استدعاء الدالة بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  updateStars();
});
