const __velocidade = Symbol('velocidade')//criando um symbol
class Carro{
    constructor(nome){
        this.nome = nome
        this[__velocidade] = 0
    }
    set velocidade(valor){
        if(typeof valor !== 'number') return
        if(valor>= 100 || valor <= 0) return
        this[__velocidade] = valor
    }
    get velocidade(){
        return this[__velocidade]//criando um get para que eu n possa mudar esse valor de fora
    }
    acelerar(){
        if(this[__velocidade] >= 100)return
        this[__velocidade]++
    }
    freiar(){
        if(this[__velocidade] <= 0) return
        this[__velocidade]--
    }
}
const c1 = new Carro('fusca')
//for(let i = 0; i <=200; i++){
//    c1.acelerar()
//}
c1.velocidade = 99
console.log(c1.velocidade)