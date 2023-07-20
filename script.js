const quizData = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is closest to the sun?",
      options: ["Mars", "Jupiter", "Venus", "Mercury"],
      correctAnswer: "Mercury"
    },
    // Add more quiz questions here
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");
  
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
  
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="answer" value="${option}">
        ${option}
      `;
      optionsElement.appendChild(label);
    });
  
    resultElement.textContent = "";
  }
  
  function submitAnswer() {
    const optionsElement = document.getElementById("options");
    const selectedOption = optionsElement.querySelector("input[name='answer']:checked");
  
    if (!selectedOption) return;
  
    const answer = selectedOption.value;
    const currentQuizData = quizData[currentQuestion];
  
    if (answer === currentQuizData.correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `You scored ${score} out of ${quizData.length}!`;
  }
  
  loadQuestion();