'use strict'
//condicional if
// var edad1= 30;
// var edad2= 44;

// if(edad1 > edad2)
// {
//     console.log("Edad uno es mayor que edad dos");
// }else{
//     console.log("la edad uno es inferior");
// }

var edad = 33;
var nombre ="David Suarez";
if(edad >=18){
    console.log(nombre + " tiene " +edad+ " años, es mayor de edad");
    if(edad==33){
     console.log('Todavia eres millenial');   
    }
}else{
    console.log(nombre + " tiene " +edad+ " años, es menor de edad"); 
}

// operadores logicos And(y) && , OR (o) ||, negacion !.

// negacion
var year = 2018;
if(year != 2016){
    console.log("El año no es 2016, realmente es "+ year);
}

//AND
if(year>=2000 && year <=2020){
    console.log("Era actual");
}else{
    console.log("Era post moderna");
}

// or ||
if(year ==2008 || year == 2018){
    console.log("El año termina en 8");
}