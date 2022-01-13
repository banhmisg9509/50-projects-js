const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');
const MAX_SIZE = 4;

function createBoxes() {
  for (let row = 0; row < MAX_SIZE; ++row) {
    for (let col = 0; col < MAX_SIZE; ++col) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-col * 125}px ${-row * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}

btn.addEventListener('click', function () {
  boxesContainer.classList.toggle('big');
});

createBoxes();
