const falar ={ falar(){
    console.log(`${this.nome} está falando`)
}}
const comer= {comer(){
    console.log(`${this.nome} está comendo`)
}}
const beber={beber(){
    console.log(`${this.nome} está comendo`)
}}

const pessoaPrototype ={...falar,...comer,...beber}

function CriaPessoa(nome,sobreNome){
    return Object.create(pessoaPrototype,{
        nome:{value:nome},
        sobreNome:{value:sobreNome}
    });
}
const p1 = CriaPessoa('Kayky','Renner')
console.log(p1)