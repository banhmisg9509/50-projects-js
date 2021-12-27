const buttons = document.querySelectorAll('.ripple');

function html2El(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
}

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const circle = html2El(
      `<span class="circle" style="left: ${offsetX}px; top: ${offsetY}px;"></span>`
    );

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
