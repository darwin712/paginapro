let input_text = [];

input_text = document.getElementById('textarea_numeros').value;

let numerosComoTexto = inputText.split(",");

let numeros = numerosComoTexto.map(Number);

let parrafo = document.getElementById('miParrafo');

parrafo.innerText = numeros.join(", ");