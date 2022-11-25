const listaDOM = document.querySelector("#listaDOM");
const fruit = ["🍌", "🍎", "🍑", "🍍", "🍉"];

const firstFruit = document.querySelector("#first-fruit");
const lastFruit = document.querySelector("#last-fruit");

/* listaDOM.innerHTML = `<li>${fruit[0]}</li>
<li>${fruit[1]}</li>
<li>${fruit[2]}</li>
<li>${fruit[3]}</li>
<li>${fruit[4]}</li>`; */


// Sirve para contatenar 
listaDOM.innerHTML = `<li>${fruit[0]}</li>`;
listaDOM.innerHTML += `<li>${fruit[1]}</li>`;
listaDOM.innerHTML += `<li>${fruit[2]}</li>`;
listaDOM.innerHTML += `<li>${fruit[3]}</li>`;
listaDOM.innerHTML += `<li>${fruit[4]}</li>`;


// Hay que hacerlo dinamico la ultima fruta, con lenght - 1.
firstFruit.textContent = fruit[0];
lastFruit.textContent = fruit[fruit.length - 1];


// for of
// iterar (recorrer, loop o repeticion) sobre un array.



