const body = document.querySelector("body");
const checkbox = document.querySelector('input[type="checkbox"]');

function switchLight() {
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");
}

function switchDark() {
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");
}

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? switchLight() : switchDark();
});
