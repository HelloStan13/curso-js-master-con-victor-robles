var fecha= new Date();


var año = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();

var textoHora= `
El año es: ${año}
El mes es: ${mes}
El dia es: ${dia}
`;


console.log(textoHora);