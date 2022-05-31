import charactersArr from "./data.js";

const gridContainer = document.querySelector(".got__container");



const displayData = (array) => {
    console.log("displayData called");
    gridContainer.innerHTML = "";
    array.forEach((character) => {
        gridContainer.innerHTML += generateCard(character);
        console.log(gridContainer);
    })
}

const generateCard = (character) => {
    return `<div class="got__character">
    <h1>${character.firstName} ${character.lastName}</h1>
    <img src="${character.imageUrl}" alt="Picture of ${character.firstName} ${character.lastName}">
    <h2>House: ${character.family}</h2>
    <h3>Title: ${character.title}</h3>
    </div>`;
}

document.body.addEventListener("load", displayData(charactersArr));