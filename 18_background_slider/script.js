const body = document.body;
const slides = document.querySelectorAll('.slide');

const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

function setBackgroundToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[activeSlide].classList.add('active');
}

rightBtn.addEventListener('click', function () {
  activeSlide = (activeSlide + 1) % slides.length;

  setBackgroundToBody();
  setActiveSlide();
});

leftBtn.addEventListener('click', function () {
  activeSlide = (activeSlide - 1 + slides.length) % slides.length;

  setBackgroundToBody();
  setActiveSlide();
});

setBackgroundToBody();
setActiveSlide();
