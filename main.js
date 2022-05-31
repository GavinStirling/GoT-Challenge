import charactersArr from "./data.js";

const gridContainer = document.querySelector(".got__container");
const search = document.querySelector("#search");
const filters = document.querySelectorAll(".got__filters")

const filterArray = [];

const displayData = (array) => {
    gridContainer.innerHTML = "";
    array.forEach((character) => {
        gridContainer.innerHTML += generateCard(character);
    })
}

const generateCard = (character) => {
    return `<div class="got__character">
    <h1>${character.fullName}</h1>
    <img src="${character.imageUrl}" alt="Picture of ${character.fullName}">
    <h2>House: ${character.family}</h2>
    <h3>Title: ${character.title}</h3>
    </div>`;
}

const getSearchInput = (event) => {
    return event.target.value;
}

const searchCards = (event) => {
    const term = getSearchInput(event);
    const result =  charactersArr.filter((character) => {
        return  (character.fullName.toLowerCase().includes(term.toLowerCase()) || 
                character.title.toLowerCase().includes(term.toLowerCase()) ||
                character.family.toLowerCase().includes(term.toLowerCase()))
    })
    console.log(result);
    displayData(result);
}

const getFilterValues = (event) => {
    if (!filterArray.includes(event.target.value)){
        filterArray.push(event.target.value);
    } else if (filterArray.includes(event.target.value)){
        const index = filterArray.indexOf(event.target.value);
        filterArray.splice(index, 1);
    }
}

const getFilteredArray = (array, filterArray) => {
    
    const result =  array.filter((character) => {
        return  character.family.toLowerCase().includes(filterArray[0]) || 
                character.family.toLowerCase().includes(filterArray[1]) ||
                character.family.toLowerCase().includes(filterArray[2]) ||
                character.family.toLowerCase().includes(filterArray[3])
    })
    return result;
}

const filterData = (event) => {
    getFilterValues(event);
    const results = getFilteredArray(charactersArr, filterArray);
    if (filterArray.length < 1){
        displayData(charactersArr);
    } else {
        displayData(results);
    }
}

document.body.addEventListener("load", displayData(charactersArr));
search.addEventListener("input", searchCards);

filters.forEach((filter) => {
    filter.addEventListener("change", filterData);
})