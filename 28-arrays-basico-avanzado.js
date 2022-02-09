'use strict'

//arrays arreglos o matrices, coleccion de datos que puede tener ua variable

var nombre = "Adryan Ynfante";
var nombres= ["adryan ynfante", "ingrid bedoya", "valentina guevara", 52, true];

var lenguajes = new Array("js","php","java","python");

//console.log(nombres[0]);
//console.log(nombres.length); //cantidad de informacion en array

// var elemento = parseInt(prompt("Que elemento del array quieres? ", 0));
// if(elemento>=nombres.length){
//     alert("introduce el numero correcto menor que " + nombres.length);
// }else{
//     alert(nombres[elemento]);
// }

//recorrer un array

document.write("<h1>lenguajes de programacion 2018</h1>");
document.write("<ul>");
//metodo forEach

lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+indice+"-"+elemento+"</li>");
});
document.write("</ul>");

//recorrer array con for in

for(let lenguaje in lenguajes){
    document.write("<li>+lenguajes[lenguaje]+</li>");
}
document.write("</ul>");


// for(var i = 0; i< lenguajes.length; i++) {
//     document.write("<li>"+ lenguajes[i] + "</li>");
// }


//buscar un array

//metodo Find

var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "php";
})
console.log(busqueda);

//busqueda en array

var busqueda = lenguajes.find(lenguaje => lenguaje == "php");

console.log(busqueda);
//saco indice en el cual se encuentra el array

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "php");

console.log(busqueda);

    


