const sliderContainer = document.querySelector('.slide-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideLeft.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', changeSlide);
downButton.addEventListener('click', changeSlide);

function changeSlide() {
  const direction = this.name;
  const sliderHeight = sliderContainer.clientHeight;

  activeSlideIndex += direction === 'up' ? 1 : -1;

  if (activeSlideIndex > slidesLength - 1) {
    activeSlideIndex = 0;
  }
  if (activeSlideIndex < 0) {
    activeSlideIndex = slidesLength - 1;
  }

  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
