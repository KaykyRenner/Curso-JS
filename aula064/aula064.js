const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const recebeNumero = numeros.filter( valor => {
    return valor > 10 //retorna todos valores maiores do que 10 do array
})
console.log(recebeNumero)

console.log('####################################')

const pessoas = [
    {nome:'Kayky', idade:20},
    {nome:'Renner', idade:23},
    {nome:'Rian', idade:55},
    {nome:'Isabelle', idade:19},
    {nome:'Rodrigo', idade:32},
    {nome:'Wallace', idade:47},
]
const pessoasComNomeGrande = pessoas.filter((valor) =>{
    return valor.nome.length >= 5
})
const pessoaComMaisDe50 = pessoas.filter(valor=> {
    return valor.idade >= 50
})
const terminaComA = pessoas.filter(valor =>{
    return valor.nome.toLowerCase().endsWith('e')
})
console.log(pessoasComNomeGrande)
console.log('####################################')
console.log(pessoaComMaisDe50)
console.log('####################################')
console.log(terminaComA)










