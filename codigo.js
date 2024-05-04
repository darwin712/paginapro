
function prueba(){

let input = document.getElementById('textarea_numeros').value;

let numerosComoTexto = input.split(",");

let numeros = numerosComoTexto.map(Number);

var e = numeros.length;

for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
        if (numeros[j] > numeros[j + 1]) {
            var temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }


}

let parrafo = document.getElementById('miParrafo');

parrafo.innerText = numeros;

}