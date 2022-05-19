/* FUNCION DEVUELVE PALABRA AL AZAR DEL ARRAY */
const random = () => {
    let randomNumber = Math.floor(Math.random() * words.length);

    randomWord = words[randomNumber];
}

/* FUNCION DIBUJA PALABRA INVISIBLE */
function drawWord(word){
    for(let i=0; i < word.length; i++) {
        let letterId = 'letter' + i.toString();

        data.setAttribute('id', letterId);
        fragment.appendChild(data.cloneNode(true));
    }
    
    tabla.appendChild(fragment);
}

/* EVENTO APRETAR TECLA */
document.onkeydown = async (e) => {

    /* ANALIZA SI YA TERMINO EL JUEGO */
    if(wordGuess == randomWord.length || intentos == 10){
        alert('Inicie un nuevo juego, este ya ha concluido!')
    } else {
    /* ANALIZA SI LA TECLA YA FUE APRETADA */
        if(alreadyPressed.includes(e.key)){
            alert('Use another letter');
        } else {
            /* ANALIZA SI LA TECLA ES VALIDA */
            if(charIsLetter(e.key)){
                let upperKey = e.key.toString();

                /* SI TECLA ESTA EN PALABRA SECRETA */
                if(randomWord.includes(upperKey)){

                    for(let i = 0; i < randomWord.length; i++){
            
                        if(upperKey == randomWord[i]){
                            document.getElementById('letter' + i.toString()).innerHTML = upperKey.toUpperCase();
                            wordGuess++;
                            wordGuess == randomWord.length ? drawWin() : null;
                        }
                
                    }
                /* SI TECLA NO ESTA EN PALABRA SECRETA */
                } else {
                    const textToAdd = document.createTextNode(upperKey.toUpperCase());
                    letrasRestantes.appendChild(textToAdd);
                    intentos++;
                    drawing(intentos);
                }
                /* AGREGAR TECLA A ARRAY DE TECLAS YA PRESIONADAS */
                alreadyPressed.push(e.key);
            /* SI YA TOCARON LA TECLA */
            } else {
                    alert('Not a char');
            }
        }
    }
}

/* INCIIAR JUEGO POR PRIMERA VEZ */
random();
drawWord(randomWord);

/* MENSAJE SI NO SE AGREGO PALABRA */
words.length == 0 ? letrasRestantes.innerHTML = 'Agregue al menos 1 palabra' : null;