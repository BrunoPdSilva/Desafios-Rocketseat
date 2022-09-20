const linksList = document.querySelectorAll('.list');

function activeLink() {
  linksList.forEach(item => {
    item.classList.remove('nav-active');
    this.classList.add('nav-active');
  })
}

linksList.forEach(item => item.addEventListener('click', activeLink))