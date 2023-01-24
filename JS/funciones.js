/* FUNCIONES CON LOS BOTONES */

//CAMBIAR TEXTO
document.getElementById("elimtext").onclick = function () {
    document.getElementById("text").innerHTML = "Ahora no vas a parar de tocar botones";
}


//CAMBIAR COLORES 
document.getElementById("colorfondo").onclick = function () {
    document.body.style.backgroundColor = "red";
}

document.getElementById("colornormal").onclick = function () {
    document.body.style.backgroundColor = "rgb(209, 198, 198)";
}

//MODIFICAR BOTON
document.getElementById("mejorboton").onclick = function () {
    document.getElementById("mejorboton").style.backgroundColor = "gold";
    document.getElementById("mejorboton").style.color = "black";
}

document.getElementById("botonnormal").onclick = function () {
    document.getElementById("mejorboton").style.backgroundColor = " rgb(50, 55, 86)";
    document.getElementById("mejorboton").style.color = "white";
}

//QUITAR BOTONES
document.getElementById("borrar").onclick = function() {
    document.getElementById("elimtext").style.display = "none";
    document.getElementById("colorfondo").style.display = "none";
    document.getElementById("colornormal").style.display = "none";
    document.getElementById("mejorboton").style.display = "none";
    document.getElementById("botonnormal").style.display = "none";
    document.getElementById("borrar").style.display = "none";
    document.getElementById("volverbotones").style.display = "block";
}

document.getElementById("volverbotones").onclick = function() {
    document.getElementById("elimtext").style.display = "block";
    document.getElementById("colorfondo").style.display = "block";
    document.getElementById("colornormal").style.display = "block";
    document.getElementById("mejorboton").style.display = "block";
    document.getElementById("botonnormal").style.display = "block";
    document.getElementById("borrar").style.display = "block";
    document.getElementById("volverbotones").style.display = "none";
}

