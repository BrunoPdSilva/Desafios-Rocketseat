const root = document.documentElement;
const checkbox = document.querySelector('input[type="checkbox"]');

const darkTheme = {
  "--background": "#292c35",
  "--text": "#f1f1f1",
  "--label": "#111"
}

const lightTheme = {
  "--background": "#f1f1f1",
  "--text": "#292c35",
  "--label": "#111"
};

window.onload = getTheme();

function changeTheme(theme) {
  for (let prop in theme) {
    changeProperty(prop, theme[prop]);
  }

  for (let [prop, value] of Object.entries(theme)){
    changeProperty(prop, value);
  }
  saveTheme(theme);
}

function changeProperty(key, value) {
  root.style.setProperty(key, value);
}

function saveTheme(theme) {
  localStorage.setItem("theme", JSON.stringify(theme));
}

function getTheme() {
  const theme = JSON.parse(localStorage.getItem('theme'));
  if (isThemeEqual(theme, darkTheme)) checkbox.checked = true;
  changeTheme(theme);
}

function isThemeEqual(firstTheme, secondTheme) {
  for (let prop in firstTheme) {
    if(firstTheme[prop] != secondTheme[prop]) return true;
  }
  return false
}


checkbox.addEventListener('change', ({ target }) => 
  target.checked ? changeTheme(lightTheme) : changeTheme(darkTheme)
)