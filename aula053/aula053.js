function rand(min = 1000, max = 3000){ //função para gerar um número aleatório entre 1000 e 3000
    const num = Math.random() * (max-min)  + min ;
    return Math.floor(num)
}
function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if(callback) callback()
    }, rand())
}
function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if(callback) callback()
    }, rand())
}
function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if(callback) callback()
    }, rand())
}
//     #############################################################
//     # TRÊS FORMAS DE CÓDIGOS QUE FAZEM EXATAMENTE A MESMA COISA #
//     #############################################################
f1(function(){
    f2(function(){
        f3(function(){
            console.log('olá mundo')
        })
    })
})

//#################################

f1(f1Callback)
function f1Callback(){
        f2(f2Callback)
}
function f2Callback(){
    f3(f3Callback)
}
function f3Callback(){
    console.log('olá mundo')
}

//#################################

//usando arrow fuction é o melhor jeito
f1(() => f2(() => f3(() => console.log('olá mundo'))))

