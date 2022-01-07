const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  {
    content: 'Message one',
    type: 'error',
  },
  {
    content: 'Message two',
    type: 'info',
  },
  {
    content: 'Message three',
    type: 'error',
  },
  {
    content: 'Message four',
    type: 'success',
  },
  {
    content: 'Message five',
    type: 'error',
  },
];

button.addEventListener('click', createNotification);

function createNotification() {
  const message = getRandomMessage();

  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(message.type);
  notif.innerText = message.content;

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
