function rand(min,max){
    min *= 1000;
    max*=1000;
    return Math.floor(Math.random() * (max-min) + min);
}
function esperaAi(msg,tempo){
    return new Promise((acept,reject)=>{
        if(typeof msg !== 'string') {reject(false)
            return}
        setTimeout(()=>{
            acept(msg.toUpperCase() + ' passei na promise');
        },tempo);
    });
}
const promises = [
    'primeiro valor',
    esperaAi('promise1',3000),
    esperaAi('promise2',500),
    esperaAi('promise3',1000),
    esperaAi('promise4',1000),
    'outro valor'
];
//Promise.all(promises).then(function(valor){
//    console.log(valor)
//}
//).catch(e=>{
//   console.log(e)
//})
//console.log('################')
//Promise.race(promises).then(function(valor){//essa promise me entrega sempre o primeiro valor
//    console.log(valor)
//}
//).catch(e=>{
//    console.log(e)
//})
console.log('############')
function baixaPagina(){
    const cache = true
    if(cache){
        return Promise.resolve('pagina em cache')//Promise.resolve('pagina em cache') cai no then//Promise.resolve('pagina em cache') cai no catch
    } else{
        return esperaAi('baixei a página',1000)
    }
}
baixaPagina().then(resposta=>{
    console.log(resposta)
}).catch(e=>{
    console.log('erro',e)
})