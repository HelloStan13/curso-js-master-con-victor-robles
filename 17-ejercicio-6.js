'use strict'

/* que nos diga si un numero es par o impar
ventana prompt
si no es valido que pida el numero de nuevo
*/
var numero= parseInt(prompt("introduce un numero", 0));

while(isNaN(numero)){
    numero= parseInt(prompt("introduce un numero", 0));
}
if(numero % 2 == 0){
    alert("Es numero par");
}else{
    alert("Es impar");
}