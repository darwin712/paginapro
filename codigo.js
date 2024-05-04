
function prueba(){

let input = document.getElementById('textarea_numeros').value;

let numerosComoTexto = input.split(",");

let numeros = numerosComoTexto.map(Number).join("<br>");;

let parrafo = document.getElementById('miParrafo');

parrafo.innerText = numeros;

}