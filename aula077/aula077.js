function Banco(agencia,conta,saldo){//criando uma conta no Banco
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}
Banco.prototype.sacar = function(valor){//criando uma funçao sacar dentro do proto
    if(this.saldo<valor){ console.log(`saldo insuficiente`)
    return;}
    this.saldo-=valor 
    this.verSaldo()
}
Banco.prototype.depositar = function(valor){//criando função depositar dentro do proto
    this.saldo += valor
    this.verSaldo()
}
Banco.prototype.verSaldo = function(){//criando função ver saldo dentro do proto
    console.log(`Saldo: R$${this.saldo.toFixed(2)}`)
}
const pessoa = new Banco(12,50,50)
pessoa.depositar(10)
pessoa.sacar(61)
function CC(agencia,conta,saldo,limite){//criando uma função construtora filho de Banco
    Banco.call(this, agencia,conta,saldo)//herdando suas funcionalidades construtora
    this.limite = limite//adicionando funcionalidade construtora
}
CC.prototype = Object.create(Banco.prototype)//criando obj vazio dentro de banco
CC.prototype.constructor = CC//adcionando suas funcionalidades dentro desse obj vazio
CC.prototype.sacar = function(valor){//nova funcionalidade limite sendo adcionada
    if(valor>(this.saldo+this.limite)){ console.log(`saldo insuficiente`)
    return;}
    this.saldo-=valor 
    this.verSaldo()
}
function CP(agencia,conta,saldo,){//criando outra função construtora filho de Banco
    Banco.call(this, agencia,conta,saldo)//herdando suas funcionalidades
}
CP.prototype = Object.create(Banco.prototype)//criando um obj vazio dentro de banco
CP.prototype.constructor = CP//adicionando suas funcionalidades dentro do obj vazio

const cc = new CC(11,22,0,100);//diferente de CP o CC pode adcionar um limite no seu saldo, ele só vai ficar negativo. Usando sua propia função "Limite"
cc.depositar(10)
cc.sacar(110)
console.log('###############')
const cp = new CP(11,22,0,100);//CP não adciona Saldo, só consegue retirar o que você tem na conta usando a funcionalidade do seu pai, "BANCO"
cp.depositar(10)
cp.sacar(110)
cp.sacar(1)