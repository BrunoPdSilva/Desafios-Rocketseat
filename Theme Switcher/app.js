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

function changeTheme(theme) {
  for (let prop in theme) {
    changeProperty(prop, theme[prop]);
  }

  for (let [prop, value] of Object.entries(theme)){
    changeProperty(prop, value);
  }
}

function changeProperty(key, value) {
  root.style.setProperty(key, value);
}

checkbox.addEventListener('change', ({ target }) => 
  target.checked ? changeTheme(lightTheme) : changeTheme(darkTheme)
)