const passwordInput = document.querySelector('input[type="password"]')
const eye = document.querySelector('#eye');

eye.addEventListener('click', (e) => {
  e.preventDefault();
  const inputType = passwordInput.attributes.type.value;

  if (inputType === 'password') {
    eye.setAttribute('src', './images/eye-focus.svg');
    passwordInput.setAttribute('type', 'text');
  } else {
    eye.setAttribute('src', './images/eye.svg');
    passwordInput.setAttribute('type', 'password');    
  }
})
