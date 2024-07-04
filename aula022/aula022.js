/*
operadores lógicos
    && -> AND = E -> todas as expressões precisam ser verdadeiras para retornar true
    || -> OR = OU -> apenas uma expressão precisa ser verdadeira
    !  -> NOT = NÃO -> iverte o valor EX: !false passa a ser verdadeiro
 */
//EX DE OR e AND
const usuario = 'Luiz'
const senha = '123456'
const logar = usuario === 'Luiz' && senha === '123456'// esse resultado só vai dar True pq os dois são verdadeiros, se os dois forem verdadeiro o usuario loga

const logar2 = usuario ==='Luiz' || senha ==='12345'//esse vai da True pq só um precisa ser verdadeiro, se um for verdadeiro o usuario loga
console.log(logar)
console.log(logar2)

console.log(!false)


