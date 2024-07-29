function Produto(nome,preco,estoque){
    Object.defineProperty(this, 'estoque',{
        enumerable:true,//mostra a chave
        value:estoque,//o valor
        writable:false, //isso evita que o valor de "estoque" seja alterado
        configurable:true//pergunta se é reconfigurável
    })
    Object.defineProperties(this, {
    nome:{
        enumerable:true,//mostra a chave
        value:nome,//o valor
        writable:true, //isso evita que o valor de "estoque" seja alterado
        configurable:true//pergunta se é reconfigurável
    },
    preco:{
        enumerable:true,//mostra a chave
        value:preco,//o valor
        writable:false, //isso evita que o valor de "estoque" seja alterado
        configurable:true//pergunta se é reconfigurável
    }
    })
}
const p1 = new Produto('caderno',18,3)
p1.nome = 'caneta'
console.log(p1)