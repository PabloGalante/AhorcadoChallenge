/* TEXTO AGREGAR PALABRAS */
const textarea = document.getElementById("textarea-palabra");

let arrayOfWords = [];

/* FUNCION AGREGAR PALABRA */
function addWord(){
    let inputWord = textarea.value.toUpperCase();

    sessionStorage.setItem('array', JSON.stringify(arrayOfWords));
    words = JSON.parse(sessionStorage.getItem('array'));

    /* CHEQUEA SI LA PALABRA YA FUE INCLUIDA */
    if(words.includes(inputWord)){
        alert('Palabra ya incluida');
    }else {
        arrayOfWords.push(inputWord);
        sessionStorage.setItem('array', JSON.stringify(arrayOfWords));
        words = JSON.parse(sessionStorage.getItem('array'));
    }

    textarea.value = '';
}

/* VOLVER A INICIO Y GUARDAR PALABRAS */
function goBack(){
    location.href='../index.html';
}