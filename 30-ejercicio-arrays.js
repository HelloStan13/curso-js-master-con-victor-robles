'use strict'
/* 1 pida 6 numeros por pantalla y los meta en un array
mostrar arrray con todos los elementos en el cuerto de la pagina y consola
sacar array ordenado y motrarlo
invertir el orden y mostrarlo
mostrar cuantos elementos tiene el arrrays 
busqueda de valor introducido por el usuario que diga si lo encuentray el indice
*/


function mostrarArray(elementos,textoCustom=""){
    document.write("<h1>Contenido del Array"+textoCustom+"</h1>");
   document.write("<ul>");
    elementos.forEach((elemento,index)=> {
        document.write("<li>"+ elemento + "</li>");
    })
    document.write("</ul>");
}

//pedir numeros
var numeros= [];
for(var i = 0; i<=5; i++){
   // numeros[i] = parseInt(prompt("Introduce un numero",0));
   numeros.push(parseInt(prompt("Introduce un numero",0)));

}
//mostrar consola y cuerpo de pagina
mostrarArray(numeros);

//mostrar consola
console.log(numeros);

//ordenar y mostrar
numeros.sort(function(a,b){return a-b}); //orden descendente
mostrarArray(numeros, ' Ordenado');

//invertir y mostrar

numeros.reverse();
mostrarArray(numeros, ' Invertido');

//contar elementos
document.write("<h1>El array tiene: "+ numeros.length+ " elementos</h1>");

//mostrar cuantos elementos tiene el arrrays 


var busqueda = parseInt(prompt("Busca un numero",0));
var posicion=numeros.findIndex(numero => numero == busqueda);
if(posicion && posicion != -1){

    document.write("Posicion de la busqueda: " + posicion);
}else{
    document.write("No encontrado");
}

