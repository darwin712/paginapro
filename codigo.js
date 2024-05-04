
function prueba(){

var input = document.getElementById('textarea_numeros').value;

var numerosComoTexto = input.split(",");

var numeros = numerosComoTexto.map(Number);

var e = numeros.length;

for (var i = 0; i < e - 1; i++) {
    for (var j = 0; j < e - 1 - i; j++) {
        if (numeros[j] > numeros[j + 1]) {
            var temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}

var media = numeros.reduce((a,b) => a + b, 0) / numeros.length;

var mediana = (numeros[(numeros.length - 1) >> 1] + numeros[numeros.length >> 1]) / 2;

var moda = numeros.sort((a,b) => numeros.filter(v => v===a).length - numeros.filter(v => v===b).length).pop();

var varianza = numeros.reduce((a, b) => a + Math.pow(b - media, 2), 0) / numeros.length;

var desviacion_estandar = Math.sqrt[numeros.reduce((a, b) => a + Math.pow(b - media, 2), 0) / numeros.length];

var parrafo1 = document.getElementById("media");

parrafo1.innerText = media;

var parrafo2 = document.getElementById('mediana');

parrafo2.innerText = mediana;

var parrafo3 = document.getElementById('moda');

parrafo3.innerText = moda;

var parrafo4 = document.getElementById('varianza');

parrafo4.innerText = varianza;

var parrafo5 = document.getElementById('DVE');

parrafo5.innerText = desviacion_estandar;

}