function Banco(agencia,conta,saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}
Banco.prototype.sacar = function(valor){
    if(this.saldo>valor) console.log(`saldo insuficiente: R$${this.verSaldo()}`)
    else console.log('saldo')
}
Banco.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo
}
Banco.prototype.verSaldo = function(){
    console.log(this.saldo)
}
const pessoa = new Banco(12,50,50)
pessoa.sacar(20)