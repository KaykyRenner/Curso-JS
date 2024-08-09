class Pessoa{
    constructor(nome,sobreNome){
        this.nome = nome
        this.sobreNome = sobreNome
    }
    falar(){
        console.log(`${this.nome} está falando`)
    }
    comer(){
        console.log(`${this.nome} está comendo`)
    }
    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}
const p1 = new Pessoa('kayky')
console.log(p1)