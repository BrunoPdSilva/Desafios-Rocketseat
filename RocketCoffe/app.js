const burgerMenu = document.querySelector('.burger-icon');
const navLinks = document.querySelector('.nav-links');
const linksList = document.querySelectorAll('.linksList')
const main = document.querySelector('main');

function openMenu() {
  navLinks.classList.toggle('active');
  main.classList.toggle('hidden');
}

function activeLink() {
  linksList.forEach(link => {
    link.classList.remove("active");
    this.classList.add("active");
  })
}

burgerMenu.addEventListener('click', openMenu);

linksList.forEach(link => link.addEventListener('click', activeLink));