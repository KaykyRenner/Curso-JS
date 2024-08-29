module.exports = class cachorro{
    constructor(nome){
        this.nome=nome
    }
    latir(){
        console.log(`o ${this.nome} está latindo`)
    }
}