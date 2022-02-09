'use strict'

//plantillas de texto

var nombre = prompt("");
var apellidos= prompt("");
//var texto= "Mi nombre es "+nombre + " mis apellidos son " + apellidos;

var texto=`
    <h1> Hola que tal </h1>
    <h3> Mi nombre es: ${nombre}</h3>
    <h3> Mis apellidos son: ${apellidos} </h3>

`;

document.write(texto);