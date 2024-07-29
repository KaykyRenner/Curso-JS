const pessoa1 = {
    nome:'luiz',
    sobrenome:'otavio',
    idade:30
}
pessoa1.Falanome = function(){
    return this.nome
}
pessoa1.getdataDeNascimento = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}
console.log(pessoa1.getdataDeNascimento())
console.log(pessoa1.Falanome())
console.log('#####################')
for(let cahve in pessoa1){
    console.log(pessoa1[cahve])
}
console.log('#####################')
//criando uma função construtora para criar pessoas
function Pessoa(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}
const p1 = new Pessoa('Kayky','Renner')
Object.freeze(p1)//isso serve para não conseguir mudar o OBJ
p1.nome ='Breno' //mudando o nome do obj "p1"
const p2 = new Pessoa('Maria','Isabelle')
console.log(p1)
console.log(p2)