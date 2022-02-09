'use strict'

function holaMundo(texto){
    var holaMundo="texto dentro de funcion";//acceso a ola ariable solo dentro de la funcion

    console.log(texto);
    console.log(numero.toString()); //toString convertir a string 
    console.log(holaMundo);
}

var numero= 2; //variables globales sirve dentro y fuera de funciones
var texto= "Hola mundo variable global";
holaMundo(texto);
