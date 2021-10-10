(function () {
  'use strict';
  const panels = document.querySelectorAll('.panel');
  let expandPanel = null;

  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      if (expandPanel) {
        expandPanel.classList.remove('active');
      }
      expandPanel = panel;
      expandPanel.classList.add('active');
    });
  });

})()
