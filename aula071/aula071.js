function Produto(nome,preco,estoque){
    this.nome = nome
    this.preco = preco
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque',{
        enumerable:true,//mostra a chave
        configurable:true,//pergunta se é reconfigurável
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('não é aceito letras')
            }
            estoquePrivado=valor
        }
    })
}
const p1 = new Produto('camisa',20,3)
console.log(p1)