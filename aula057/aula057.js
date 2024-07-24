function Pessoa(nome,SobreNOme){
    this.nome = nome
    this.SobreNOme = SobreNOme
    this.metodo = () =>{
        console.log(this.nome , ': sou um método')
    }
}
const p1 = new Pessoa ('Luiz', 'Otávio')
p1.metodo()
