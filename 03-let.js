'use strict'
//pruebas let y var la diferencia es el alcance de las variables

var texto = "curso";
console.log(texto);

if(true){
    let texto = "curso js";
    console.log(texto);
}
//let funciona solo dentro del if, porque su alcance esta limitado a ese bloque 

console.log(texto);