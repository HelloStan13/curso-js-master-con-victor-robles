'use strict'

//transformacion de texto

var numero= 444;
var texto1="soy adryan ";
var texto2="buen curso ";

var dato = numero.toString(); //numero de convierte a string
dato = texto1.toUpperCase(); //texto de minuscula a mayuscula
dato = texto1.toLowerCase();//texto de  mayuscula a minuscula
console.log(dato);

//calcular longitud de un texto

var nombre= "Adryan Ynfante";
console.log(nombre.length);


//concatenar + metodo concat tambien se puede usar

var textoTotal= texto1+texto2;
console.log(textoTotal);

var busqueda = texto1.indexOf("adryan"); //busqueda de palabras lastIndexOf ultima aparicion de la palabra
//search donde aparece texto1.search,  metodo match array de resultados de la palabra buscada, 
//match (/palabra/g)
//sacar palabras de diferentes caracteres substr(14,5 ejemplo)
//charAt sacar una letra 
// startWith true o false solo al inicio del string
//includes solo la palabra exacta true o false

console.log(busqueda);



