const emojiItems = document.querySelectorAll('.emoji');
const submitBtn = document.getElementById('submit');
const choice = document.getElementById('choice');
const result = document.getElementById('result');
const selectedFeedback = document.getElementById('feedback-choice');

emojiItems.forEach((item) => {
  item.addEventListener('click', function () {
    emojiItems.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
  });
});

submitBtn.addEventListener('click', function () {
  const selectedEmo = document.querySelector('.active');
  if (selectedEmo) {
    choice.classList.add('hide');
    result.classList.remove('hide');
    selectedFeedback.innerText = `Feedback: ${selectedEmo.innerText.trim()}`;
  }
});
