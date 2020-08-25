
// Deel 1: Elementen toeveogen aan de DOM
let btns = document.querySelectorAll(".big-five-button");
Array.from(btns).forEach(btn => {
    btn.addEventListener('click', function () {
        const spottedAnimal = btn.innerHTML;
        let newListItem = document.createElement("li");
        let newListItemValue = document.createTextNode(spottedAnimal);
        newListItem.appendChild(newListItemValue);
        let spottedList = document.getElementById("spotted-animals-list");
        spottedList.appendChild(newListItem);

    });
});


// Deel 2: Element verwijderen uit de DOM

let removeFirstItem = () => {
    let parent = document.getElementById("spotted-animals-list");
    //let child = document.getElementsByClassName("spotted-animals-list-item");
    parent.removeChild(parent.firstElementChild);
}

let removeListItemButton = document.getElementById("remove-first-item-button");
removeListItemButton.addEventListener("click", removeFirstItem);

// Deel 3: Meerdere elementen verwijderen uit de DOM

let removeAllItems = () => {
    const spottedAnimalsList = document.getElementById("spotted-animals-list");
    spottedAnimalsList.innerHTML = "";
}

let removeAllButtons = document.getElementById("remove-all-button");
removeAllButtons.addEventListener("click", removeAllItems);


