function CriaPessoa (nome,sobreNome,idade){
    return{
        nome,sobreNome,idade
    };
}
const pessoa1 = CriaPessoa ('Kayky', 'Renner', 19)
const pessoa2 = CriaPessoa ('Maria', 'Isabelle', 17)
const pessoa3 = CriaPessoa ('Rian', 'Kelvyn', 20)
console.log(pessoa1.nome,pessoa2.nome,pessoa3.nome)