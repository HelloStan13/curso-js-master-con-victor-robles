'use strict'
//switch
var edad= 25;
var imprime= "";

switch(edad){
    case 18:
        imprime	= "Acabas de cumplir maria de edad";
    break;
    case 25:
        imprime	= "Eres un adulto";
    break;
    case 40:
        imprime	= "Crisis 40";
    break;
    case 75:
        imprime	= "Ansiano";
    break;
    default:
        imprime="tu edad es neutra";
    break;
}
console.log(imprime);