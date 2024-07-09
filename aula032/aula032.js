const  usuario = {
    nome: 'Luiz',
    SobreNome: 'Miranda',
    idade: 18,
    endereco:{
        rua: 'Los Angeles',
        numero: 120
    }
};
const {nome, endereco:{rua, numero}, ... resto} = usuario
console.log(nome, rua, numero, resto)