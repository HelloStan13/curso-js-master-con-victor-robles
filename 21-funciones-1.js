'use strict'

function porConsola(numero1, numero2){
    console.log("suma "+ (numero1+numero2));
}

function porPantalla(numero1, numero2) {
    document.write("suma "+ (numero1+numero2));
}

function calculadora(numero1, numero2, mostrar = false){
    
    if(mostrar==false){
        porConsola(numero1, numero2);
    } else{
        porPantalla(numero1, numero2);
    }
    return true;
       
}

    console.log(1,4);
    calculadora(2,8, true);
    calculadora(9,5, true);

