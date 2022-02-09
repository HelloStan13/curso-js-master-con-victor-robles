'use strict'

/* calculadora que pida los numeros por pantalla , si colocamos algo masl que lo vuelva a pedir
alert y consola el resultado de suma resta y dividir las 2 cifras */

var numero1= parseInt(prompt("Introduce el primer numero", 0));
var numero2= parseInt(prompt("Introduce el segundo numero", 0));

while(isNaN(numero1) || isNaN(numero2) || numero1 <0 || numero2 <0){
     numero1= parseInt(prompt("Introduce el primer numero", 0));
     numero2= parseInt(prompt("Introduce el segundo numero", 0));
}
var resultado= "La suma es: "+ (numero1 + numero2) + "<br/>"+
               "La resta es: "+ (numero1 - numero2) + "<br/>"+
               "La multiplicación es: "+ (numero1 * numero2) + "<br/>" + 
               "La división es: "+ (numero1 / numero2) + "<br/>"+ 
               "El resto es: "+ (numero1 % numero2) + "<br/>"; 

var resultado1= "La suma es: "+ (numero1 + numero2) + "\n"+
               "La resta es: "+ (numero1 - numero2) + "\n"+
               "La multiplicación es: "+ (numero1 * numero2) + "\n" + 
               "La división es: "+ (numero1 / numero2) + "\n"+ 
               "El resto es: "+ (numero1 % numero2) + "\n"; 

document.write(resultado);
alert(resultado1);
console.log(resultado1);