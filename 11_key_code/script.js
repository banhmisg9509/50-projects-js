const h2 = document.querySelector("h2");
const h1 = document.querySelector("h1");
const container = document.querySelector(".container");

const key = document.querySelector("#key");
const loc = document.querySelector("#location");
const loc_desc = document.querySelector("#location_desc");
const which = document.querySelector("#which");
const code = document.querySelector("#code");

const items = document.querySelectorAll(".event--item");

const locMap = {
  0: "(Gerneral keys)",
  1: "(Left)",
  2: "(Right)",
  3: "(Pad)",
};

function hideNode(node) {
  node.style.display = "none";
}

function showNode(node) {
  node.style.display = "flex";
}

hideNode(container);

document.addEventListener(
  "keydown",
  function () {
    hideNode(h2);
    showNode(container);
  },
  { once: true }
);

document.addEventListener(
  "keyup",
  function () {
    hideNode(h2);
    showNode(container);
  },
  { once: true }
);

document.onkeydown = function (e) {
  h1.innerHTML = e.keyCode;
  key.innerHTML = e.key === " " ? "Space" : e.key;
  loc.innerHTML = e.location;
  loc_desc.innerHTML = locMap[e.location];
  which.innerHTML = e.keyCode;
  code.innerHTML = e.code;

  e.preventDefault();
};

document.onkeyup = function (e) {
  switch (e.which) {
    case 44: // PrintScreen
      h1.innerHTML = e.keyCode;
      key.innerHTML = e.key === " " ? "Space" : e.key;
      loc.innerHTML = e.location;
      loc_desc.innerHTML = locMap[e.location];
      which.innerHTML = e.keyCode;
      code.innerHTML = e.code;
      break;
  }
  e.preventDefault();
};

items.forEach((item) => {
  item.addEventListener("click", function (e) {
    navigator.clipboard.writeText(item.querySelector("p").innerHTML);
  });
});
