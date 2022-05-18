const tabla = document.getElementById('tablaPalabra');
const data = document.createElement("td");
const fragment = new DocumentFragment();
const botonNuevoJuego = document.getElementById('boton-nuevo-juego');
const letrasRestantes = document.getElementById("otherLetters");

let words = ['h', 'ho', 'hol', 'hola'];
let randomWord;

let alreadyPressed = [];

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

/* VERIFICAR QUE SEA A-Z */
function charIsLetter(char) {
    const regex = /\b[a-z]/;

    if (!regex.test(char)) {
      return false;
    }
  
    return regex.test(char);
}

/* EVENTO APRETAR TECLA */
document.onkeydown = async (e) => {

    if(alreadyPressed.includes(e.key)){
        alert('Use another letter');
    } else {
        if(charIsLetter(e.key)){
            let upperKey = e.key.toString();

            if(randomWord.includes(upperKey)){

                for(let i = 0; i < randomWord.length; i++){
        
                    if(upperKey == randomWord[i]){
                        document.getElementById('letter' + i.toString()).innerHTML = upperKey.toUpperCase();
                    }
            
                }

            } else {
                const textToAdd = document.createTextNode(upperKey.toUpperCase());
                letrasRestantes.appendChild(textToAdd);
                intentos++;
                drawing(intentos);
            }

            alreadyPressed.push(e.key);
        } else {
                alert('Not a char');
        }
    }
}

random();
drawWord(randomWord);

botonNuevoJuego.onclick = () => { 

    pincelAhorcado.clearRect(0, 0, canvasAhorcado.width, canvasAhorcado.height);

    while (tabla.hasChildNodes()) {
        tabla.removeChild(tabla.firstChild);
    }

    letrasRestantes.innerHTML = '';

    alreadyPressed = [];
    intentos = 0;

    random();

    drawWord(randomWord);
};