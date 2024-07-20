function retornaFuncao(nome){
    return function(){
        return nome
    }
}
const funcao = retornaFuncao('kayky')
const funcao2 = retornaFuncao('Renner')
console.log(funcao(), funcao2())