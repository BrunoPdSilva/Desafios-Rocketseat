import { BASE_URL, API_KEY, IMG_URL, language } from "./api.mjs";

const filmContainer = document.querySelector('#film')

const randomFilm = (Math.random() * 1000).toFixed(0)

const getData = () => {
  fetch(`${BASE_URL + randomFilm}?api_key=${API_KEY}&${language}`)
    .then(response => response.json())
    .then(data => renderFilm(data))
}

const renderFilm = (film) => {

  filmContainer.innerHTML = `
  <img src=${IMG_URL + film.poster_path} alt="Film Poster" id="filmPoster">

  <div class="details-container">
    <h2 id="filmTitle">${film.title}</h2>
    <p id="description">${film.overview}</p>
  </div>
  `
  
}

getData()

// film.title, film.overview, film.poster_path