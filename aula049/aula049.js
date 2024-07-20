function funcao(a,b,c){//a,b,c vai receber os parametros 1, 2 ,3 lá de baixo
    let total = 0;
    for(let argumentos of arguments){//"arguments recebe todos os parametros "
        total+=argumentos
    }
    console.log(total, a, b, c)
}
funcao(1,2,3,4,5,6,7)

function soma(a , b = 2, c = 4){//estou falando que por padrao b vai ser 2 se n receber nenhum valor
    console.log(a+b+c)
}
soma(2,undefined,20)

function Pessoa({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade)
}
Pessoa({nome:'Luiz',sobrenome:'Otavio',idade:50});

function operadores(operador,acumulador, ...numeros){//"...numeros" vai me retornar o resto dos parmetros que não sejam do "operador" e "acumulador"
    for(let numero of numeros){
        if(operador === '+') acumulador+=numero
        if(operador === '-') acumulador-=numero
        if(operador === '/') acumulador/=numero
        if(operador === '*') acumulador*=numero
}
    console.log(acumulador)
}
operadores('*',1 ,20 ,30 ,40 ,50)

//funcao arrow
const conta= (...argts)=>{
    console.log(argts)//substitui arguments
} 
conta('*',1 ,20 ,30 ,40 ,50)