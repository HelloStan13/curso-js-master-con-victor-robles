'use strict'

//programa que pida 2 numeros y nos diga el mayor, menor e iguales.
/// plus si los numeros no son numeros o son menores e iguales a cero vuelva a pedir los datos 

var numero1= parseInt(prompt('Introduce primer numero', 0));
var numero2= parseInt(prompt('Introduce segundo numero', 0));

while(numero1 <=0 ||numero2 <=0 || isNaN(numero1)|| isNaN(numero2)){
    numero1= parseInt(prompt('Introduce primer numero', 0));
    numero2= parseInt(prompt('Introduce segundo numero', 0));

}
if(numero1==numero2){
    alert("Los numeros son iguales");
}else if(numero1 > numero2){
    alert("El numero mayor es: " + numero1);
    alert("El numero menor es: " + numero2);
}else if(numero2>numero1){
    alert("El numero mayor es: " + numero2);
    alert("El numero menor es: " + numero1);
}else{
    alert("Introduce numeros correctos")
}
