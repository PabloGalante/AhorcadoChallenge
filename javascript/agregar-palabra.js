/* TEXTO AGREGAR PALABRAS */
const textarea = document.getElementById("textarea-palabra");

let arrayOfWords;

/* FUNCION AGREGAR PALABRA */
function addWord(){
    let inputWord = textarea.value.toUpperCase();

    /* CHEQUEA SI LA PALABRA TIENE CARACTERES NO PERMITIDOS */
    if(!isWhitespace(inputWord)){

        if(words == null){
            words = [];
        }

        /* CHEQUEA SI LA PALABRA YA FUE INCLUIDA */
        if(!words.includes(inputWord)){
            arrayOfWords = [...words];
            arrayOfWords.push(inputWord);
            sessionStorage.setItem('array', JSON.stringify(arrayOfWords));
            words = JSON.parse(sessionStorage.getItem('array')); 
        }else {
            alert('Palabra ya incluida');
        }

    } else {
        alert('CUIDADO! No se aceptan espacios ni caracteres especiales')
    }


    textarea.value = '';

}

/* VOLVER A INICIO Y GUARDAR PALABRAS */
function goBack(){
    location.href='../index.html';
}