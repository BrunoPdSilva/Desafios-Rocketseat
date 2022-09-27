const cardStatistics = document.getElementById("userStatistics");
const usernameElement = document.getElementById("username");
const changeColorButton = document.querySelector("button");
const card = document.querySelector(".card");

const url = "https://api.github.com/users/BrunoPdSilva";

const gradientArray = [
  "colorOne",
  "colorTwo",
  "colorThree",
  "colorFour",
  "colorFive",
  "colorSix",
  "colorSeven",
  "colorEight",
];

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();

  renderCard(data);
};

const renderCard = data => {
  usernameElement.innerText = data.login;

  cardStatistics.innerHTML = `
  <img id="profileImage" src=${data.avatar_url} alt="Profile Picture">
  <ul class="statistics">
    <li>
      <img src="./assets/followers.svg" alt="followers Icon">
      <p>${data.followers} Seguidores</p>
    </li>
    <li>
      <img src="./assets/following.svg" alt="following Icon">
      <p>${data.following} Seguindo</p>
    </li>
    <li>
      <img src="./assets/repository.svg" alt="repository Icon">
      <p>${data.public_repos} Repositórios</p>
    </li>
    <li>
      <img src="./assets/company.svg" alt="company Icon">
      <p>@Rocketseat</p>
    </li>
    <li>
      <img src="./assets/location.svg" alt="location Icon">
      <p>${data.location}</p>
    </li>
  </ul>
`;
};

changeColorButton.addEventListener("click", () => {
  gradientArray.forEach(color => card.classList.remove(color));
  card.classList.add(gradientArray[(Math.random() * 8).toFixed(0)]);
});

getData();
