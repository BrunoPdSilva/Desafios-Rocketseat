const burgerMenu = document.querySelector('.burger-icon');
const ulLinks = document.querySelector('.nav-links');
const linksList = document.querySelectorAll('.linksList')
const main = document.querySelector('main');

function openMenu() {
  ulLinks.classList.toggle('active');
  main.classList.toggle('hidden');

  if(burgerMenu.attributes.src.value === './assets/menu-buguer-open.svg'){
    burgerMenu.setAttribute('src', './assets/menu-buguer-close.svg');
  } else if (burgerMenu.attributes.src.value === './assets/menu-buguer-close.svg'){
    burgerMenu.setAttribute('src', './assets/menu-buguer-open.svg');
  }
}

function activeLink() {
  linksList.forEach(link => {
    link.classList.remove("active");
    this.classList.add("active");
  })
}

burgerMenu.addEventListener('click', openMenu);
linksList.forEach(link => link.addEventListener('click', activeLink));