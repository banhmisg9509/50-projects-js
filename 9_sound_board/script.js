const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.getElementById("buttons");
let currentSound = null;

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.addEventListener("click", function () {
    if (currentSound) {
      currentSound.pause();
      currentSound.currentTime = 0;
    }
    currentSound = document.getElementById(sound);
    currentSound.play();
  });

  btn.innerText = sound;
  buttons.appendChild(btn);
});
