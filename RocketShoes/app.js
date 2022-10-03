const openModalButton = document.querySelector(".burgerIcon");

const modal = document.querySelector(".navLinks");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

function handleModal() {
  modal.classList.toggle("active");
  main.classList.toggle("hidden");
  footer.classList.toggle("hidden");

  if (openModalButton.attributes.src.value === "./assets/menuIcon.svg") {
    openModalButton.setAttribute("src", "./assets/cross.svg");
  } else {
    openModalButton.setAttribute("src", "./assets/menuIcon.svg");
  }
}

openModalButton.addEventListener("click", handleModal);
