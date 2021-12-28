const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

function dragStart(e) {
  e.target.className += ' hold';
  setTimeout(() => {
    e.target.className = 'invisible';
  }, 0);
}

function dragEnd(e) {
  e.target.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  e.target.className += ' hovered';
}

function dragLeave(e) {
  e.target.className = 'empty';
}

function dragDrop(e) {
  e.target.className = 'empty';
  e.target.append(fill);
}

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach((empty) => {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
});
