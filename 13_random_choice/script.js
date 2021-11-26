const tagsContainer = document.querySelector(".tags");
const text = document.querySelector("textarea");

text.focus();

text.addEventListener("keyup", function (e) {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  tagsContainer.innerHTML = input
    .split(",")
    .filter((tag) => tag.trim())
    .map((tag) => `<span>${tag.trim()}</span>`)
    .join("");
}

function randomSelect() {
  const times = 30;
  const tags = tagsContainer.querySelectorAll("span");

  const interval = setInterval(() => {
    const randomTag = pickRandomTag(tags);
    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag(tags);
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag(tags) {
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
