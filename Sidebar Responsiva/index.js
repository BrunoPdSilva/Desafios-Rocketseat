const sidebar = document.querySelector(".sidebar");
const toggleButton = document.querySelector("#toggleButton");
const inputButton = document.querySelector("#inputButton");
const input = document.querySelector("#input");

function handleClick() {
  if (sidebar.classList.contains("closed")) {
    sidebar.classList.toggle("closed");
    input.focus();
  }
}

toggleButton.addEventListener("click", () =>
  sidebar.classList.toggle("closed")
);

inputButton.addEventListener("click", handleClick);
