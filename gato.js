var bandera = false;
var turno = 0;
var tab = new Array();
window.onload = function(){
    var iniciar = document.getElementById("iniciar");
    iniciar.addEventListener("click",comenzar);
}
function comenzar(){
    bandera = true;
    var jugador1 = document.getElementById("jugador1");
    var jugador2 = document.getElementById("jugador2");
    if(jugador1.value == " "){
        alert("Falta el jugador 1");
        jugador1.focus();
    }
    else{
        if(jugador2.value == " "){
            alert("Falta el jugador 2");
            jugador2.focus();
        }
        else{
            tab[0] = document.getElementById("b0");
            tab[1] = document.getElementById("b1");
            tab[2] = document.getElementById("b2");
            tab[3] = document.getElementById("b3");
            tab[4] = document.getElementById("b4");
            tab[5] = document.getElementById("b5");
            tab[6] = document.getElementById("b6");
            tab[7] = document.getElementById("b7");
            tab[8] = document.getElementById("b8");
            for (var i = 0; i < 9; i++){
                tab[i].className = "botonInicial";
                tab[i].value = "I";
            }
            turno = 1;
            document.getElementById("turnoJugador").innerHTML = "Adelante Juagador " + jugador1.value; 
        }
    }
}