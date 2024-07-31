function Produto(nome,preco){
    this.nome=nome;
    this.preco=preco;
}
Produto.prototype.aumento = function(valor){//aumento generico
    this.preco+=valor;
};
Produto.prototype.desconto = function(valor){//desconto generico
    this.preco+=valor;
};
function Camisa(nome,preco,cor){
    Produto.call(this,nome,preco);
    this.cor =  cor;
}
function Caneca(nome,preco,material){
    Produto.call(this,nome,preco);
    this.material = material;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca

Camisa.prototype = Object.create(Produto.prototype);
Camisa.prototype.constructor = Camisa

Camisa.prototype.aumento = function(percentual){//sobre escrevendo um código, esse aumento só sera aplicaod para camisa
    this.preco = this.preco + (this.preco *(percentual/100))
}
Caneca.prototype.desconto = function(percentual){//sobre escreve o código do desconto em produto
    this.preco = this.preco - (this.preco*(percentual/100))
}
const camiseta = new Camisa('regata',18,'preta');
const caneca = new Caneca ('caneca',15,'porcelana')
camiseta.aumento(100);
caneca.desconto(50)

console.log(caneca)
console.log(camiseta);