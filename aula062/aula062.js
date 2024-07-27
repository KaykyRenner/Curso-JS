const nomes = ['maria','joao','eduardo','gabriel','julia']
const removidos = nomes.splice(2,2,'luiz','otavio')//aqui estamos removendo eduardo e gabriel e adicionando "luiz" e "Otavio"
console.log(nomes, removidos)