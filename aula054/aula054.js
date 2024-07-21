(function(idade,peso,altura){
    const sobreNome = 'Renner'
    function CriaNome(nome){
        return nome + ' ' + sobreNome
    }
    function FalaNome(){
        console.log(CriaNome('Kayky'))
    }
    FalaNome()
    console.log(idade,peso,altura)
})(19,80,1.68)// A variável nome não é acessível fora do escopo da expressão gerará o erro "Uncaught ReferenceError: nome is not defined"