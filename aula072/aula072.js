const produtos = {nome:'Caneca', preco:20}
const outroProduto = {...produtos}
outroProduto.nome ='garrafa'
outroProduto.preco =15
console.log(produtos)
console.log(outroProduto)
console.log('##############################')
Object.defineProperty(produtos,'nome',{
    configurable:false
})
console.log(Object.getOwnPropertyDescriptor(produtos,'nome'))//isso serve para olhar as configurações de objetos
console.log('##############################')
const produtos1 = {nome:'Caneca', preco:20,material:'porcelana'}
for(let [chave, valor] of Object.entries(produtos1)){
    console.log(chave, valor)
}
console.log('##############################')
for(let chave of Object.entries(produtos1)){//mesma coisa do for a cima, só mudei a syntax
    console.log(chave[0], chave[1])
}