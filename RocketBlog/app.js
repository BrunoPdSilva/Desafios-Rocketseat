const body = document.querySelector("body");
const header = document.getElementById("navHeader");
const burgerMenu = document.querySelector(".burguer-menu");
const linksList = document.querySelectorAll(".list");

function toggleMenu() {
  header.classList.toggle("active");
  body.classList.toggle("active");
}

function activeLink() {
  linksList.forEach(item => {
    item.classList.remove("nav-active");
    this.classList.add("nav-active");
  });
}

linksList.forEach(item => item.addEventListener("click", activeLink));

burgerMenu.addEventListener("click", toggleMenu);
