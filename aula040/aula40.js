function numeros(n1,n2){
    const nu1= Math.random() * (n1 + n2) ;
    return Math.floor(nu1)
}
const sorteio1= numeros(1,50)
const sorteio2= numeros(1,50)
const resultado =  sorteio1 > sorteio2 ? sorteio1 : sorteio2;
console.log(resultado)