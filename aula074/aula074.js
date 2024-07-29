const ObjA ={
    ChaveA:'A'
}
const ObjB={
    chaveB:'B'
}
const ObjC={
    chaveC:'C'
}
Object.setPrototypeOf(ObjB,ObjA)
Object.setPrototypeOf(ObjC,ObjB)
console.log(ObjC.ChaveA)
console.log('####################################')
function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco *(percentual/100))
}
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco -(this.preco*(percentual/100))
}
const p1 = new Produto('camisa', 50)
///p1.aumento(50)
p1.desconto(50)
console.log(p1)
const p2 ={//criando um objeto
    nome:'caneca',
    preco:15
}
Object.setPrototypeOf(p2,Produto.prototype)//setando o objeto criado para o prototype do produto
p2.aumento(100)
console.log(p2)