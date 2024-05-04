
let input_text = document.getElementById('textarea_numeros').value;

let nums = inputText.split(",");

let parrafo = document.getElementById('miParrafo');

parrafo.innerText = nums;