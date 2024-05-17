
function calcular(dato){

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

var varianza = numeros.reduce((a, b) => a + Math.pow(b - media, 2), 0) / numeros.length;

var desviacion_estandar = Math.sqrt(numeros.reduce((a, b) => a + Math.pow(b - media, 2), 0) / numeros.length);

if(dato == "Media"){
var resultMedia = document.getElementById("result");
resultMedia.innerText = "Media = "+media;
}

if(dato == "Mediana"){
    var resultMediana = document.getElementById("result");
    resultMediana.innerText = "Mediana = "+mediana;
}

if(dato == "Varianza"){
    var resultVarianza = document.getElementById("result");
    resultVarianza.innerText = "Varianza = "+varianza;
}

if(dato == "DVE"){
    var resultDVE = document.getElementById("result");
    resultDVE.innerText = "DVE = "+desviacion_estandar;
}

}


const textarea = document.getElementById('textarea_numeros');
const mensaje = document.getElementById('mensaje');

textarea.addEventListener('input', function() {
    const valor = textarea.value.trim();
    if (/^[0-9,]+$/.test(valor)) {
        mensaje.style.display = 'none';
    } else {
       
        mensaje.style.display = 'block';
        textarea.value = valor.slice(0, -1); 
    }
});