const imageContainer = document.getElementById('images');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const imgs = document.querySelectorAll('img');

let idx = 0;

function changeImage() {
  imageContainer.style.transform = `translate(-${idx * 500}px)`;
}

leftBtn.addEventListener('click', () => {
  idx--;
  if (idx < 0) {
    idx = imgs.length - 1;
  }
  changeImage();
});
rightBtn.addEventListener('click', () => {
  idx++;
  if (idx > imgs.length - 1) {
    idx = 0;
  }
  changeImage();
});
