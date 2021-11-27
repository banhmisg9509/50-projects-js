const toggle = document.querySelector("nav button");
const nav = document.querySelector("nav");

toggle.addEventListener("click", function () {
  nav.classList.toggle("active");
});
