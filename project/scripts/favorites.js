const container =
document.getElementById("favoritesContainer");

const message =
document.getElementById("emptyMessage");

function loadFavorites(){

let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

container.innerHTML = "";

if(favorites.length === 0){

message.textContent = "No favorites added yet.";

return;

}

message.textContent = "";

favorites.forEach((game, index) => {

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML = `
<img src="${game.image}" alt="${game.name}" loading="lazy">

<h3>${game.name}</h3>

<p>Players: ${game.players}</p>

<p>Time: ${game.time}</p>

<p>Difficulty: ${game.difficulty}</p>

<button class="remove-btn">Remove</button>
`;

const button =
card.querySelector(".remove-btn");

button.addEventListener("click", () => {
removeFavorite(index);
});

container.appendChild(card);

});

}

function removeFavorite(index){

let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

favorites.splice(index, 1);

localStorage.setItem("favorites",
JSON.stringify(favorites));

// Refresh without reload
loadFavorites();

}

loadFavorites();

/* Footer */

document.getElementById("year").textContent =
new Date().getFullYear();

document.getElementById("lastModified").textContent =
document.lastModified;