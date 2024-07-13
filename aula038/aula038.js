//let i = 0;
//while(i <= 10){
//    console.log(i)
//   i+=1
//}
function random(min,max){
    const r= Math.random() * (max - min) + min;
    return Math.floor(r) // gera um número inteiro
}
let rad = 10
while(rad !== 10){
    rad = random(1,50)
    console.log(rad)
} // verifica antes de executar
console.log('##################')
do{
    rad = random(1,50)
    console.log(rad)
} while(rad !== 10); //primeiro executa o código para depois verifica-lo