const data = new Date('1987-04-22 00:00:00');
let DiaSemana = data.getDay();
function getDiaSemanaTexto(DiaSemana){
    let DiaSemanaTexto;
switch(DiaSemana){
    case 0:
        DiaSemanaTexto = 'domingo';
        return DiaSemanaTexto;
    case 1:
        DiaSemanaTexto = 'segunda';
        return DiaSemanaTexto;
    case 2:
        DiaSemanaTexto = 'terça';
        return DiaSemanaTexto;
    case 3:
        DiaSemanaTexto = 'quarta';
        return DiaSemanaTexto;
    case 4:
        DiaSemanaTexto = 'quinta';
        return DiaSemanaTexto;
    case 5:
        DiaSemanaTexto = 'sexta';
        return DiaSemanaTexto;
    case 6:
        DiaSemanaTexto = 'sábado';
        return DiaSemanaTexto;
    default:
        DiaSemanaTexto = '';
        return DiaSemanaTexto;
}}
const DiaSemanaTexto = getDiaSemanaTexto(DiaSemana);
console.log(DiaSemana, DiaSemanaTexto);