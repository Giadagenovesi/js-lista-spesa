// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

const shoppingList = ["pane", "pasta", "biscotti", "latte", "mele", "banane"];
console.log(shoppingList);

const listElem = document.querySelector(".shopping-list");
console.log(listElem);

let shoppingItems = "";
let i = 0;
while (i < shoppingList.length) {
    console.log(shoppingList[i]);
    i++;
    shoppingItems += `<li>${shoppingList[i]}</li>`;
}

console.log(shoppingItems);

listElem.innerHTML = shoppingItems;