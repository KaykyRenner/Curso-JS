function Pessoa(nome,sobreNome){
    this.nome = nome
    this.sobreNome = sobreNome
}
Pessoa.prototype.nomeCompleto =function(){
    return `Nome Completo ${this.nome} ${this.sobreNome}`
};
const pessoa1 = new Pessoa('kayky','Renner')
const pessoa2 = new Pessoa('Maria','Isabelle')
console.dir(pessoa1)
console.dir(pessoa2)
