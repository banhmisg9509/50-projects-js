const navItems = document.querySelectorAll('nav li');
const images = document.querySelectorAll('.content');

navItems.forEach((item, idx) => {
  item.addEventListener('click', function () {
    changeActiveItem(item);
    changeContentShow(idx);
  });
});

function changeActiveItem(navItem) {
  navItems.forEach((item) => item.classList.remove('active'));
  navItem.classList.add('active');
}

function changeContentShow(idx) {
  images.forEach((img) => img.classList.remove('show'));
  images[idx].classList.add('show');
}
