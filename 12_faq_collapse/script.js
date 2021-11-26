const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const expandBtn = card.querySelector(".card__title span");
  expandBtn.addEventListener("click", function () {
    let active = card.classList.toggle("active");
    let icon = this.querySelector("i");
    if (active) {
      icon.classList.replace("fa-plus", "fa-minus");
    } else {
      icon.classList.replace("fa-minus", "fa-plus");
    }
  });
});
