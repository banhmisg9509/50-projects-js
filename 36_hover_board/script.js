const board = document.querySelector('.board');

function initBoard() {
  for (let i = 0; i < 500; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', function () {
      const color = getRandomColor();
      this.style.backgroundColor = color;
      this.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    });
    cell.addEventListener('mouseout', function () {
      this.style.backgroundColor = '#1d1d1d';
      this.style.boxShadow = '0 0 2px #000';
    });
    board.appendChild(cell);
  }
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

initBoard();
