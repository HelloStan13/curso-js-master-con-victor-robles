'use strict'

//LocalStorage se aplica a cualquier proyecto web, sesiones como memoria, pero esta es una memoria del navegador

if(typeof(Storage) !=='undefined'){
console.log("LocalStorage disponible");
}else{
    console.log("LocalStorage no disponible");
}

//como guardar datos

localStorage.setItem("titulo","curso js ");

//recuperar elemento
localStorage.getItem("titulo");

console.log(localStorage.getItem("titulo"));
document.querySelector().innerHTML=localStorage.getItem("titulo");

//guardar objeto
var usuario={
    nombre:"Adryan ",
    email: "adryanynfante@gmail.com ",
    web: "adryan.ourappsweb.com"


}
localStorage.setItem("usuario", JSON.stringify(usuario));





