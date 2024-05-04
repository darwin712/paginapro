
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

function calcularModa() {
    var frecuencias = {};
    var maxFrecuencia = 0;
    var modas = [];

    // Calcular las frecuencias
    for(var i = 0; i < numeros.length; i++) {
        var num = numeros[i];
        frecuencias[num] = (frecuencias[num] || 0) + 1;
        if(frecuencias[num] > maxFrecuencia) {
            maxFrecuencia = frecuencias[num];
        }
    }

    // Encontrar todas las modas
    for(var num in frecuencias) {
        if(frecuencias[num] === maxFrecuencia) {
            modas.push(Number(num));
        }
    }

    var parrafo3 = document.getElementById('moda');

    parrafo3.innerText = "La moda del array es: " + modas.join(", ");
}


var moda = numeros.sort((a,b) => numeros.filter(v => v===a).length - numeros.filter(v => v===b).length).pop();

var varianza = numeros.reduce((a, b) => a + Math.pow(b - media, 2), 0) / numeros.length;

var desviacion_estandar = Math.sqrt(numeros.reduce((a, b) => a + Math.pow(b - media, 2), 0) / numeros.length);

var parrafo1 = document.getElementById("media");

parrafo1.innerText = media;

var parrafo2 = document.getElementById('mediana');

parrafo2.innerText = mediana;

var parrafo4 = document.getElementById('varianza');

parrafo4.innerText = varianza;

var parrafo5 = document.getElementById('DVE');

parrafo5.innerText = desviacion_estandar;

}