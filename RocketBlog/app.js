const body = document.querySelector("body");
const header = document.getElementById("navHeader");
const burgerMenu = document.querySelector(".burguer-menu");
const menuIcon = document.querySelector(".menu-icon");
const linksList = document.querySelectorAll(".list");

function toggleMenu() {
  header.classList.toggle("active");
  body.classList.toggle("active");

  if (menuIcon.attributes.src.value === "./assets/menu-burger.svg") {
    menuIcon.setAttribute("src", "./assets/cross.svg");
  } else if (menuIcon.attributes.src.value === "./assets/cross.svg" ) {
    menuIcon.setAttribute("src", "./assets/menu-burger.svg");
  }
}

function activeLink() {
  linksList.forEach(item => {
    item.classList.remove("nav-active");
    this.classList.add("nav-active");
  });
}

linksList.forEach(item => item.addEventListener("click", activeLink));

burgerMenu.addEventListener("click", toggleMenu);
