const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const text = 'Hello world!';
let speed = 300 / speedEl.value;
let idx = 1;

function writeText() {
  textEl.innerText = text.slice(0, idx++);

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

writeText();

speedEl.addEventListener('input', (e) => {
  speed = 300 / e.target.value;
});
