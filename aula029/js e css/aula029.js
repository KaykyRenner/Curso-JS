//const data = new Date()
//let DiaSemana = data.getDay()
//l//et mes = data.getMonth()
//co//nst Year = data.getFullYear()
//const hours = zeroEsquerd(data.getHours())
//const minutes = zeroEsquerd(data.getMinutes())
//function getMesAnoTexto (mes){
//    let MesAnoTexto
////    switch (mes){
//    case 0:
//        MesAnoTexto = 'Janeiro'
//        return MesAnoTexto
//    case 1:
//        MesAnoTexto = 'Fevereiro'
//        return MesAnoTexto
//    case 2:
//        MesAnoTexto = 'Março'
//        return MesAnoTexto
//    case 3:
//       MesAnoTexto = 'Abril'
//        return MesAnoTexto
//   case 4:
//       MesAnoTexto = 'Maio'
//        return MesAnoTexto
//    case 5:
//        MesAnoTexto = 'Junho'
//        return MesAnoTexto
//   case 6:
//        MesAnoTexto = 'Julho'
//        return MesAnoTexto
//    case 7:
//        MesAnoTexto = 'Agosto'
//        return MesAnoTexto
//    case 8:
//        MesAnoTexto = 'Setembro'
//        return MesAnoTexto
//    case 9:
//        MesAnoTexto = 'Outubro'
//       return MesAnoTexto
//   case 10:
//        MesAnoTexto = 'Novembro'
//        return MesAnoTexto
//    case 11:
//        MesAnoTexto = 'Janeiro'
//        return MesAnoTexto
////    }
//}
//function getDiaSemanaTexto (DiaSemana){
//    let DiaSemanaTexto
//    switch (DiaSemana){
//   case 0:
//       DiaSemanaTexto = 'domingo'
//       return DiaSemanaTexto
//   case 1:
//       DiaSemanaTexto = 'segunda-feira'
//       return DiaSemanaTexto
//   case 2: 
//       DiaSemanaTexto = 'terça-feira'
//        return DiaSemanaTexto
//   case 3:
//       DiaSemanaTexto = 'quarta-feira'
//       return DiaSemanaTexto
//   case 4:
//        DiaSemanaTexto = 'quinta-feira'
//        return DiaSemanaTexto
//    case 5:
//        DiaSemanaTexto = 'sexta-feira'
//        return DiaSemanaTexto
//    case 6:
//        DiaSemanaTexto = 'sábado'
//        return DiaSemanaTexto
//    }
//}
//function zeroEsquerd(num){
//    return num >= 10 ? num : `0${num}`;
//}
//const RecebeData = document.querySelector('.RecebeData')
//const MesAnoTexto = getMesAnoTexto(mes)
//const DiaSemanaTexto = getDiaSemanaTexto(DiaSemana)

//const Recebe= (`${DiaSemanaTexto}, ${DiaSemana} de ${MesAnoTexto} de ${Year} ás $//{zeroEsquerd(hours)}:${zeroEsquerd(minutes)}`)
//RecebeData.innerHTML = Recebe

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR',{dateStyle: 'full', timeStyle: 'short'});