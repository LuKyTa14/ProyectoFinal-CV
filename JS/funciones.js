/* FUNCIONES CON LOS BOTONES */

//CAMBIAR TEXTO
document.getElementById("elimtext").onclick = function () {
    document.getElementById("text").innerHTML = "Ahora no vas a parar de tocar botones 🙆‍♂️";
    document.getElementById("elimtext").style.display = "none";
}


//CAMBIAR COLORES 
document.getElementById("colorfondo").onclick = function () {
    document.body.style.backgroundColor = "rgb(197,184,76)";
}

document.getElementById("colornormal").onclick = function () {
    document.body.style.backgroundColor = "rgb(234,231,211)";
}

//MODIFICAR BOTON
document.getElementById("mejorboton").onclick = function () {
    document.getElementById("mejorboton").style.backgroundColor = "gold";
    document.getElementById("mejorboton").style.color = "black";
    document.getElementById("text").innerHTML = "Los botones azules no sirven";
}

document.getElementById("botonnormal").onclick = function () {
    document.getElementById("mejorboton").style.backgroundColor = "rgb(160,163,225)";
    document.getElementById("mejorboton").style.color = "rgb(15,10,175)";
    document.getElementById("text").innerHTML = "Con JavaScript podemos lograr muchas interacciones con nuestra página";
}

//QUITAR BOTONES
document.getElementById("borrar").onclick = function() {
    document.getElementById("elimtext").style.display = "none";
    document.getElementById("colorfondo").style.display = "none";
    document.getElementById("colornormal").style.display = "none";
    document.getElementById("mejorboton").style.display = "none";
    document.getElementById("botonnormal").style.display = "none";
    document.getElementById("borrar").style.display = "none";
    document.getElementById("jugartext").style.display = "none";
    document.getElementById("volverbotones").style.display = "block";
    document.getElementById("text").innerHTML = "Como vimos estos son algunos potenciales de nuestras páginas web";
}

document.getElementById("volverbotones").onclick = function() {
    document.getElementById("elimtext").style.display = "block";
    document.getElementById("colorfondo").style.display = "block";
    document.getElementById("colornormal").style.display = "block";
    document.getElementById("mejorboton").style.display = "block";
    document.getElementById("botonnormal").style.display = "block";
    document.getElementById("borrar").style.display = "block";
    document.getElementById("jugartext").style.display = "flex";
    document.getElementById("volverbotones").style.display = "none";
    document.getElementById("text").innerHTML = "Con JavaScript podemos lograr muchas interacciones con nuestra página";
}

