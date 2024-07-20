//escopo lexo
const nome = 'Kayky'
function FalaNome(){
    console.log(nome)//se a função n conter a variavel com o nome de "nome", ela vai pegar do vizinho, ou seja do seu pai
}
function UsaFalaNome(){
    const nome = 'Renner'//essa constante não alterara nada no meu código
    FalaNome()
}
UsaFalaNome()