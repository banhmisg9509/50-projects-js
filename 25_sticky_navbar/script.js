const nav = document.querySelector('.nav');
const goTop = document.querySelector('.gotop');

goTop.addEventListener('click', scrollTop);
window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
    goTop.style.display = 'flex';
  } else {
    nav.classList.remove('active');
    goTop.style.display = 'none';
  }
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
