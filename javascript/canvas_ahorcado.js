/* CANVAS SCRIPT */

const canvasAhorcado = document.getElementById("myCanvas");
const pincelAhorcado = canvasAhorcado.getContext("2d");

/* FUNCION DIBUJA LINEA */
function drawLine(xi,yi,xf,yf){
    pincelAhorcado.beginPath();
    pincelAhorcado.strokeStyle = '#0A3871';
    pincelAhorcado.lineCap = "round";
    pincelAhorcado.lineJoin = "round";
    pincelAhorcado.moveTo(xi, yi);
    pincelAhorcado.lineTo(xf, yf);
    pincelAhorcado.lineWidth = 6;
    pincelAhorcado.stroke();
    pincelAhorcado.closePath();
}

/* FUNCION CABEZA */
function drawHead(){
    pincelAhorcado.beginPath();
    pincelAhorcado.strokeStyle = '#0A3871';
    pincelAhorcado.lineCap = "round";
    pincelAhorcado.lineJoin = "round";
    pincelAhorcado.arc(240, 85, 30, 0, 2 * Math.PI);
    pincelAhorcado.lineWidth = 6;
    pincelAhorcado.stroke();
    pincelAhorcado.closePath();
}

switch(intentos){
    /* BASE */
    case 1:
    drawLine(4, 355, 296, 355);
    break;

    /* POSTE */
    case 2:
    drawLine(80, 5, 80, 355);
    break;

    /* TECHO */
    case 3:
    drawLine(82, 5, 238, 5);
    break;

    /* GANCHO */
    case 4:
    drawLine(240, 5, 240, 50);
    break;

    /* CABEZA */
    case 5:
    drawHead();
    break;

    /* TORSO */
    case 6:
    drawLine(240, 115, 240, 245);
    break;

    /* BRAZO IZQ */
    case 7:
    drawLine(240, 115, 210, 180);
    break;

    /* BRAZO DER */
    case 8:
    drawLine(240, 115, 270, 180);
    break;

    /* PIERNA IZQ */
    case 9:
    drawLine(240, 245, 210, 310);
    break;

    /* PIERNA DER */
    case 10:
    drawLine(240, 245, 270, 310);
    break;
}
