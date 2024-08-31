const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escrever = require('./modulos/escrever')
const ler = require('./modulos/ler')

//const pessoas = [
//    { nome: 'João' },
//    { nome: 'Maria' },
//    { nome: 'Eduardo' },
//    { nome: 'Luiza' },
//];
//const json = JSON.stringify(pessoas, '', 2);
//escrever(caminhoArquivo, json);

async function lerArquivo(caminho){
    const dados = await ler(caminho);
    renderizaDados(dados)
}
function renderizaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(element => {
        console.log(element.nome)
    });
}
lerArquivo(caminhoArquivo)
