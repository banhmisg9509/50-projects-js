const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

function createHeart(e) {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  loveMe.appendChild(heart);

  times.innerHTML = parseInt(times.innerHTML) + 1;

  setTimeout(() => {
    heart.remove();
  }, 600);
}

loveMe.addEventListener('dblclick', (e) => {
  createHeart(e);
});
