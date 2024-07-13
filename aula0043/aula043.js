function soma(x,y){ // função para tratar erro
    if (typeof x !== 'number' || typeof y !== 'number')//se isso for falso ele retorna 'throw new ReferenceError'
    {
        throw new TypeError('x e y precisam ser numeros.')//tipo de erro
    }
    return x + y;
}
try{ // comando para exibir o erro na tela
    console.log(soma(1,2)) 
    console.log(soma(1,'a'))
}catch(error) { //erro
    console.log(error)//vai aparecer um erro enorme
    console.log('erro mais amigável')//aparecera só essa mensagem ao inves de um erro gigante
}
