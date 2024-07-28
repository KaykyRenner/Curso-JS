const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const numerosEmDobro = numeros.reduce( (acumulador,valor,indice,array) => { 
    acumulador+=valor
    return acumulador
})
console.log(numerosEmDobro)
console.log('####################################')

const pessoas = [
    {nome:'Kayky', idade:20},
    {nome:'Renner', idade:23},
    {nome:'Rian', idade:55},
    {nome:'Isabelle', idade:19},
    {nome:'Rodrigo', idade:32},
    {nome:'Wallace', idade:47},
]
const nomes = pessoas.reduce((acumulador,valor) =>{
    if(acumulador.idade > valor.idade){ return acumulador}
    return valor
})
console.log(nomes)