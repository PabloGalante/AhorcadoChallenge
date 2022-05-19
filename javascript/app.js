/* VARIABLES ANCLAS AL HTML */
    /* TABLA AHORCADO */
const tabla = document.getElementById('tablaPalabra');
const data = document.createElement("td");
const fragment = new DocumentFragment();
const botonNuevoJuego = document.getElementById('boton-nuevo-juego');
const letrasRestantes = document.getElementById("otherLetters");

/* ALMACEN DE PALABRAS */
let words = [];

/* CONTADOR DE LETRAS ADIVINADAS */
let wordGuess = 0;

/* CONTADOR DE INTENTOS */
let intentos = 0;

/* PALABRA RANDOM QUE ESTA EN JUEGO */
let randomWord;

/* ALMACEN DE LETRAS QUE NO ESTA EN JUEGO */
let alreadyPressed = [];

/* VERIFICAR QUE TECLA SEA A-Z */
function charIsLetter(char) {
    const regex = /\b[a-z]/;

    if (!regex.test(char)) {
      return false;
    }
  
    return regex.test(char);
}

/* REINICIAR JUEGO */
function reiniciarJuego(){
    if( words.length == 0 ){
        letrasRestantes.innerHTML = 'Agregue al menos 1 palabra';
    } else {
        pincelAhorcado.clearRect(0, 0, canvasAhorcado.width, canvasAhorcado.height);

        while (tabla.hasChildNodes()) {
            tabla.removeChild(tabla.firstChild);
        }
    
        letrasRestantes.innerHTML = '';
    
        alreadyPressed = [];
        intentos = 0;
        wordGuess = 0;
    
        random();
    
        drawWord(randomWord);
    }
}