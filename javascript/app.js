/* ALMACEN DE PALABRAS */
let words = JSON.parse(sessionStorage.getItem('array'));

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

/* VERIFICAR ESPACIO EN BLANCO */
function isWhitespace(char) {
    const regex = /[^a-zA-Z]+/;

    if (!regex.test(char)) {
      return false;
    }

    return regex.test(char);
}

/* REINICIAR JUEGO */
function reiniciarJuego(){
        pincelAhorcado.clearRect(0, 0, canvasAhorcado.width, canvasAhorcado.height);

        while (tabla.hasChildNodes()) {
            tabla.removeChild(tabla.firstChild);
        }
    
        if(words == null){
            letrasRestantes.innerHTML = 'Agregue al menos una palabra';
        } else {
            letrasRestantes.innerHTML = '';
        }
    
        alreadyPressed = [];
        intentos = 0;
        wordGuess = 0;
    
        random();
    
        drawWord(randomWord);
}