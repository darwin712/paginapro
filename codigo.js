
function calcular(dato){

const clickSFX = new Audio('clickbtnsfx.mp3');
clickSFX.play();

var input = document.getElementById('textarea_numeros').value;

if(input === ""){
     var result = document.getElementById("result");
     result.innerText = "Resultado"
}else{

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

var moda = calcularModa(numeros);

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

if(dato == "Moda"){
    var resultModa = document.getElementById("result");
    resultModa.innerText = "Moda(s) = "+ moda;
}

}
}

function calcularModa(numeros) {

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

    const mapaFrecuencia = {};
    let frecuenciaMaxima = 0;
    const modas = [];

    numeros.forEach( numero => {
        mapaFrecuencia[numero] = (mapaFrecuencia[numero] || 0) + 1;
        frecuenciaMaxima = Math.max(frecuenciaMaxima, mapaFrecuencia[numero]);
    });

    for (const numero in mapaFrecuencia) {
        if (mapaFrecuencia[numero] === frecuenciaMaxima) {
            modas.push(Number(numero));
        }
    }
    
    return modas;
}

document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("textarea_numeros");
    const message = document.getElementById("mensaje");
    const submitButton1 = document.getElementById("Media");
    const submitButton2 = document.getElementById("Mediana");
    const submitButton3 = document.getElementById("Moda");
    const submitButton4 = document.getElementById("Varianza");
    const submitButton5 = document.getElementById("Desviacion");
    const contenedor = document.getElementById('transparentBG');

    function ajustarAlturaContenedor() {
        contenedor.style.height = 'auto'; 
        contenedor.style.height = `${contenedor.scrollHeight}px`;  
    }

    textarea.addEventListener("input", () => {

        const value = textarea.value.trim();

        const invalidChars = /[^0-9,., ]/;

        if (invalidChars.test(value)) {
           
            message.textContent = "Caracteres no permitidos detectados. Solo se permiten números, comas y puntos.";

            submitButton1.disabled = true;
            submitButton2.disabled = true;
            submitButton3.disabled = true;
            submitButton4.disabled = true;
            submitButton5.disabled = true;

            var result = document.getElementById("result");
            result.innerText = "Resultado";

           
        } else {
          
            message.textContent = '.';

            submitButton1.disabled = false;
            submitButton2.disabled = false;
            submitButton3.disabled = false;
            submitButton4.disabled = false;
            submitButton5.disabled = false;

            var result = document.getElementById("result");
            result.innerText = "Resultado";
            
        }

        ajustarAlturaContenedor();

    });

    submitButton1.addEventListener("click", (event) => {
        if (textarea.value.trim() === "") {
            message.textContent = "El campo está vacío. Por favor, ingresa algunos números antes de calcular la media.";
            event.preventDefault();
            return;
        }
    });

    submitButton2.addEventListener("click", (event) => {
        if (textarea.value.trim() === "") {
            message.textContent = "El campo está vacío. Por favor, ingresa algunos números antes de calcular la mediana.";
            event.preventDefault();
            return;
        }
    });

    submitButton3.addEventListener("click", (event) => {
        if (textarea.value.trim() === "") {
            message.textContent = "El campo está vacío. Por favor, ingresa algunos números antes de calcular la moda.";
            event.preventDefault();
            return;
        }
    });

    submitButton4.addEventListener("click", (event) => {
        if (textarea.value.trim() === "") {
            message.textContent = "El campo está vacío. Por favor, ingresa algunos números antes de calcular la varianza.";
            event.preventDefault();
            return;
        }
    });

    submitButton5.addEventListener("click", (event) => {
        if (textarea.value.trim() === "") {
            message.textContent = "El campo está vacío. Por favor, ingresa algunos números antes de calcular la desviacion estandar.";
            event.preventDefault();
            return;
        }
    });

});

        
