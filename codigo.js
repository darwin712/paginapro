
function prueba(){

/* 

let numerosComoTexto = inputText.split(",");

let numeros = numerosComoTexto.map(Number);

let parrafo = document.getElementById('miParrafo');

parrafo.innerText = numeros.join(", ");
*/

let input = document.getElementById('textarea_numeros').value;

let numerosComoTexto = input.split(",");

let parrafo = document.getElementById('miParrafo');

parrafo.innerText = numerosComoTexto;

}