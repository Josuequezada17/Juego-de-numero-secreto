let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    numeroSecreto = numeroGenerado;

    console.log(`Numero generado: ${numeroGenerado}`);
    console.log(`Lista de números sorteados: ${listaNumerosSorteados}`);

    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('h1', 'No hay más números disponibles');
        document.querySelector('#verificarIntento').setAttribute('disabled', 'true');
        document.querySelector('#nuevoJuego').setAttribute('disabled', 'true');
        document.querySelector('#reiniciarJuego').removeAttribute('hidden');
        document.querySelector('#reiniciarJuego').removeAttribute('disabled');

    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        } else {

            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    document.querySelector('#nuevoJuego').setAttribute('disabled', 'true');

    if (isNaN(numeroDeUsuario)) { // isNaN es una función que verifica si el valor es un número
        asignarTextoElemento('h1', 'Ingresa un número válido');
        limpiarInput();
        return;
    }

    if (numeroDeUsuario === numeroSecreto) { // === se utilza para comparar valores y tipos de datos del mismo tipo
        asignarTextoElemento('h1', `Felicidades! Ganaste en ${intentos}  ${(intentos === 1) ? 'intento' : 'intentos'}`); // Operador ternario para verificar si es un intento o varios
        asignarTextoElemento('p', `El número secreto era ${numeroSecreto}`);

        document.querySelector('#verificarIntento').setAttribute('disabled', 'true'); // Deshabilitar el boton de verificar intento
        document.querySelector('#nuevoJuego').removeAttribute('disabled'); // Habilitar el boton de nuevo juego

    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('h1', 'Intenta de nuevo!');
            asignarTextoElemento('p', `El número secreto es menor a ${numeroDeUsuario}`);

        } else {
            asignarTextoElemento('h1', 'Intenta de nuevo!');
            asignarTextoElemento('p', `El número secreto es mayor a ${numeroDeUsuario}`);

        }
        intentos++;

    }
    limpiarInput();

    return;
}


function limpiarInput() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function condicionesIniciales() {
    document.querySelector('#verificarIntento').removeAttribute('disabled'); // Habilitar el boton de verificar intento
    asignarTextoElemento('h1', 'Juego del número secreto!'); // Indicar el mensaje del juego
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`); // Indicar el mensaje de intervalo de intentos
    numeroSecreto = generarNumeroSecreto(); // Generar el numero aleatorio
    intentos = 1; // Inicializar el numero de intentos
    return;
}

function nuevoJuego() {
    //limpiarcaja
    limpiarInput();
    //indicar mensaje de intervalo de intentos
    //Inicializar el numero de intentos
    //Generar el numero aleatorio
    condicionesIniciales();

    //Deshabilitar el boton de nuevo juego
    document.querySelector('#nuevoJuego').setAttribute('disabled', 'true');
    return;
}

function reiniciarJuego() {
    alert('Juego reiniciado, presiona OK para continuar');
    listaNumerosSorteados = [];

    document.querySelector('#reiniciarJuego').setAttribute('disabled', 'true');
    document.querySelector('#reiniciarJuego').setAttribute('hidden', 'true');
    
    condicionesIniciales();
    
}


condicionesIniciales();
