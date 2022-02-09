'use strict'

//funciones
//conjunto de reglas que se pueden reutilizar, son instrucciones , conjunto de ordenes
//capsula donde estan guardadas las ordenes. agrupacion de reutilizable de un conjunto de instruccion

//definir funcion
function calculadora(numero1, numero2, mostrar = false){
    //instrucciones
    //console.log("Hola soy la calculadora");
    if(mostrar==false){
    console.log("suma "+ (numero1+numero2));
    } else{
        document.write("suma "+ (numero1+numero2));
    }
   // return"Hola soy la calculadora"; devuelve valor en la funcion
}
//llamo la funcion
//calculadora();
//for(var i=1; i<=10; i++){
    console.log(1,4);
    calculadora(2,8, true);
    calculadora(9,5, true);

