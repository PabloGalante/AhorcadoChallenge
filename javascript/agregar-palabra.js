/* TEXTO AGREGAR PALABRAS */
const textarea = document.getElementById("textarea-palabra");

/* FUNCION AGREGAR PALABRA */
function addWord(){
    let inputWord = textarea.value.toUpperCase();

    /* CHEQUEA SI LA PALABRA YA FUE INCLUIDA */
    if(words.includes(inputWord)){
        alert('Palabra ya incluida');
    }else {
        words.push(inputWord);
    }

    textarea.value = '';
}

/* VOLVER A INICIO Y GUARDAR PALABRAS */
function goBack(){
    location.href='../index.html';
}