import { games } from "./data.js";

const container = document.getElementById("gamesContainer");

function displayGames(){

container.innerHTML = "";

games.forEach(game => {

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML = `
<img src="${game.image}" alt="${game.name}" loading="lazy">

<h3>${game.name}</h3>

<p>Players: ${game.players}</p>

<p>Time: ${game.time}</p>

<p>Difficulty: ${game.difficulty}</p>

<button class="fav-btn">Add to Favorites</button>
`;

const button = card.querySelector(".fav-btn");

button.addEventListener("click", () => {
addToFavorites(game);
});

container.appendChild(card);

});

}

function addToFavorites(game){

let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

const exists =
favorites.some(item => item.name === game.name);

if(!exists){

favorites.push(game);

localStorage.setItem("favorites",
JSON.stringify(favorites));

alert(`${game.name} added to favorites!`);

}else{

alert("Already in favorites!");

}

}

displayGames();

/* Footer */

document.getElementById("year").textContent =
new Date().getFullYear();

document.getElementById("lastModified").textContent =
document.lastModified;