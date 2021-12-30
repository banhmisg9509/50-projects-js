const playBtn = document.getElementById('play');
const rotateImg = document.getElementsByClassName('rotate-img')[0];

let playStateIdx = 0;
let playStates = ['paused', 'running'];

function togglePlayState() {
  let state = playStates[++playStateIdx % 2];
  rotateImg.style.animationPlayState = state;
}

playBtn.addEventListener('click', function () {
  togglePlayState();
  this.innerHTML = state === 'paused' ? 'Play' : 'Pause';
});
