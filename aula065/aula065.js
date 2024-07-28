const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const numerosEmDobro = numeros.map( valor => {
    return valor*2 //retorna todos valores maiores do que 10 do array
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
const nomes = pessoas.map(valor =>{
    return valor.nome
})
const idade = pessoas.map(valor =>{
    return {idade: valor.idade}
})
const comIds = pessoas.map((obj,indice) =>{
    const newObject = {...obj}
    newObject.id = indice//criei um novo obj para não afetar o original
    return newObject
})
console.log(nomes)
console.log('####################################')
console.log(idade)
console.log('####################################')
console.log(comIds)











