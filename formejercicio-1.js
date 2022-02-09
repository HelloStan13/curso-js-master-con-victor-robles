'use strict'
window.addEventListener('load', function(){
    console.log("Cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display="none";
    formulario.addEventListener('submit', function(){
        console.log("evento submit capturado");
       
        var nombre= document.querySelector("#nombres").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() ==null || nombre.trim().length == 0){
            alert ("Nombre invalido");
            return false;
        }if(apellidos.trim() ==null || apellidos.trim().length == 0){
            alert (" Apellidos invalidos");
            return false;
        }if(edad==null || edad.length <= 0 || isNaN(edad)){
            alert (" Edad invalida");
            return false;
        }
      

        box_dashed.style.display="block";

        var p_nombre= document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;


        // var datos_usuarios=[nombre,apellidos,edad];
        //   var indice;
        // for(indice in  datos_usuarios){
        //     var parrafo = document.createElement("p");
        //     parrafo.append(datos_usuarios[indice]);
        //     box_dashed.append(parrafo);
        // }
        
      
 
      
    

    });
});



