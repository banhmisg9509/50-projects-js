const quiz = document.getElementById('quiz');
const answers = document.getElementById('answers');
const question = document.getElementById('question');
const submitBtn = document.getElementById('submit');
const URL = 'https://quizapi.io/api/v1/questions?apiKey=IsMACmnywF65PQGK32r3FUQolyOymZDmo56oGrMN&limit=4';

let quizData = [];
let currentQuiz = 0;
let score = 0;

submitBtn.addEventListener('click', function () {
  const answer = getSelected();
  if (answer && quizData[currentQuiz].correct_answers[answer] === 'true') {
    score++;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>
    <button onclick="location.reload()">Reload</button> `;
  }
});

function getSelected() {
  const selectedAnswer = Array.from(document.querySelectorAll('.answer'));
  let ans = selectedAnswer.find((answer) => answer.checked === true);
  return ans?.id;
}

function clearAnswers() {
  answers.innerHTML = '';
  submitBtn.blur();
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function loadQuiz() {
  clearAnswers();
  const currentQuizData = quizData[currentQuiz];
  question.innerText = currentQuizData.question;
  Object.keys(currentQuizData.answers).forEach((key, idx) => {
    const answer = currentQuizData.answers[key];
    if (answer) {
      const li = document.createElement('li');
      const code = String.fromCharCode(97 + idx);
      li.innerHTML = `
        <input type="radio" name="answer" id="answer_${code}_correct" class="answer" />
        <label for="answer_${code}_correct" >${escapeHtml(answer)}</label>
        `;
      answers.appendChild(li);
    }
  });
}

async function initQuizzes() {
  const res = await fetch(URL);
  quizData = await res.json();
}

initQuizzes().then(() => {
  loadQuiz();
});
