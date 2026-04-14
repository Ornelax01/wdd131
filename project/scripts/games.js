import { games } from "./data.js";

const container = document.getElementById("gamesContainer");

const difficultyFilter =
document.getElementById("difficulty");

const playersFilter =
document.getElementById("players");

function displayGames(gameList){

container.innerHTML = "";

gameList.forEach(game => {

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML = `
<img src="${game.image}" alt="${game.name}" loading="lazy">

<h3>${game.name}</h3>

<p>Players: ${game.players}</p>

<p>Time: ${game.time}</p>

<p>Difficulty: ${game.difficulty}</p>
`;

container.appendChild(card);

});

}

function filterGames(){

const difficultyValue = difficultyFilter.value;
const playersValue = playersFilter.value;

let filtered = games;

// Filter by difficulty
if(difficultyValue !== "all"){

filtered = filtered.filter(game =>
game.difficulty === difficultyValue
);

}

// Filter by players
if(playersValue !== "all"){

filtered = filtered.filter(game =>
game.players === playersValue
);

}

displayGames(filtered);

}

difficultyFilter.addEventListener("change", filterGames);
playersFilter.addEventListener("change", filterGames);

displayGames(games);

/* Footer */

document.getElementById("year").textContent =
new Date().getFullYear();

document.getElementById("lastModified").textContent =
document.lastModified;