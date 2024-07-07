//const UmaHora = 60*60*1*1000//formula para adicionar uma hora na data
//const data = new Date(0+UmaHora)// adcionando uma hora na data
//const data = new Date()
//console.log('dia', data.getMonth()) 
const data = new Date()
function zeroEsquerd(num){
    return num >= 10 ? num : `0${num}`;
}
function formataData(data){
    const dia = zeroEsquerd(data.getDate())
    const mes = zeroEsquerd(data.getMonth()+1)//adcionando+1 pq ele começa do mes0
    const ano = zeroEsquerd(data.getFullYear())
    const hora = zeroEsquerd(data.getHours())
    const min = zeroEsquerd(data.getMinutes())
    const seg = zeroEsquerd(data.getSeconds())
    const ms = zeroEsquerd(data.getMilliseconds())
    const diaSemana = zeroEsquerd(data.getDay())//0 é domingo e 6 é sábado

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}:${ms}:${diaSemana}`
}
const dataBrasil = formataData(data)
console.log(dataBrasil)