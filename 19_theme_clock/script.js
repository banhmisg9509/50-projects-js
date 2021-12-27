const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', function (e) {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light mode';
  }
});

const formater = new Intl.DateTimeFormat('en-US', { timeStyle: 'short' });

function setTime() {
  const time = new Date();
  const date = time.getDate();
  const month = time.getMonth();
  const day = time.getDay();

  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourEl.style.transform = `translate(-50%, -100%) rotate(${hoursForClock * 30}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`;
  secondEl.style.transform = `translate(-50%, -80%) rotate(${seconds * 6}deg)`;

  timeEl.innerHTML = formater.format(time);
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class='circle'>${date}</span>`;
}

setInterval(setTime, 1000);
