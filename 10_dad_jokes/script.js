const btn = document.querySelector("#joke");
const display = document.querySelector("#display");
const url = "https://icanhazdadjoke.com";

btn.addEventListener("click", async function () {
  let joke = await getJoke();
  display.innerHTML = joke;
});

async function getJoke() {
  let joke = "";

  try {
    let res = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: { accept: "application/json" },
      });
    joke = (await res.json()).joke;
  } catch (error) {
    console.log(error);
    return "Something went wrong :D";
  }
  return joke;
}
