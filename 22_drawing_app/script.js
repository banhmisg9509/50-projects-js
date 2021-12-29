const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const penSize = document.getElementById('size');
const clear = document.getElementById('clear');
const colorPicker = document.getElementById('color');

const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

const minSize = 5;
const maxSize = 20;
let size = minSize;
let isPressed = false;
let color = 'black';
let x, y;

canvas.addEventListener('mousedown', (e) => {
  if (e.button === 0) {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
    drawCircle(x, y);
  }
});

canvas.addEventListener('mouseup', (e) => {
  if (e.button === 0) {
    isPressed = false;
    x = undefined;
    y = undefined;
  }
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed && e.button === 0) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

decrease.addEventListener('click', () => {
  size -= 1;
  size = size < minSize ? minSize : size;
  penSize.innerHTML = size;
});

increase.addEventListener('click', () => {
  size += 1;
  size = size > maxSize ? maxSize : size;
  penSize.innerHTML = size;
});

clear.addEventListener('click', () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
});

colorPicker.addEventListener('input', function () {
  color = this.value;
});

function drawCircle(x, y) {
  c.beginPath();
  c.arc(x, y, size, 0, Math.PI * 2);
  c.fillStyle = color;
  c.fill();
}

function drawLine(x1, y1, x2, y2) {
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.strokeStyle = color;
  c.lineWidth = size * 2;
  c.stroke();
}
