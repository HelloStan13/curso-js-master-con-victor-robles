
'use strict'

//parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, resto_de_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);
    }

    listadoFrutas("naranja","manzana", "sandia", "pera", "melon", "coco");

    var frutas =["naranja","manzana"];
    listadoFrutas(...frutas, "sandia", "pera", "melon", "coco");

