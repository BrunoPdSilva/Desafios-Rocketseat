import { BASE_URL, API_KEY, IMG_URL, language } from "./api.mjs";

const filmContainer = document.querySelector("#film");
const buttonRandomFilm = document.querySelector("button");

function getData() {
  const randomFilm = (Math.random() * 1000).toFixed(0);

  fetch(`${BASE_URL + randomFilm}?api_key=${API_KEY}&${language}`)
    .then(response => response.json())
    .then(data => renderFilm(data));
}

function renderFilm(film) {
  if (film.title) {
    filmContainer.innerHTML = `
    <img src=${IMG_URL + film.poster_path} alt="Film Poster" id="filmPoster">
    <div class="details-container">
      <h2 id="filmTitle">${film.title}</h2>
      <p id="description">${film.overview}</p>
    </div>
    `;
  } else if (film.title === undefined) {
    filmContainer.innerHTML = `
    <img src="./assets/Poster.png" alt="Film Poster" id="filmPoster">
    <div class="details-container">
      <h2 id="filmTitle">Ops, hoje não é dia de assistir filme.
      Bora codar! 🚀</h2>
    </div>
    `;
  }
}

buttonRandomFilm.addEventListener("click", getData);
