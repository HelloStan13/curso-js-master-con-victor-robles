'use strict'
var categorias=['Acción", "Terror', 'Comedia'];
var peliculas=['La verdad duele', 'la vida es bella', 'Gran Torino'];

//ordenar arrays
peliculas.sort(); //orden alfabetico
peliculas.reverse(); //dar vuelta al array



var cine=[categorias, peliculas];
console.log(cine[0][1]);
console.log(cine[1][2]);

//operacioones array

var elemento = "";
do{
    elemento = prompt("Introduce una pelicula");
    peliculas.push(elemento);

}while(elemento != "ACABAR"); 

peliculas.pop(); // borrar ultimo elemento de array

//eliminar un elemento del array

var indice = peliculas.indexOf('Gran Torino'); //buscar posicion en el array

if (indice >-1){
    peliculas.splice(indice,1); //elimina elemento del array splice
}
console.log(peliculas);
//convertir array a texto
var peliculas_string = peliculas.join();

console.log(peliculas_string);



//convertir string a array
var cadena = "texto1, texto2, texto3";
var cadena_array= cadena.split(", ");

console.log(cadena_array);

//ordenar arrays




