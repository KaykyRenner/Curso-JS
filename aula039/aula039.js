const  numeros = [1,2,3,4,5,6,7,8,9]
let e = 0
do{
    let numero = numeros[e]
    if(numero==2){
        console.log('pulei o numero 2')
        e++
        continue
    }
    console.log(numero)
    if(numero == 7){
        console.log('7 encontrado, fim do código')
        e++
        break
    }
    e++
}while(e < numeros.length)

console.log('###########')



while(e < numeros.length){
    let numero = numeros[e]
    if(numero==2){
        console.log('pulei o numero 2')
        e++
        continue
    }
    console.log(numero)
    if(numero == 7){
        console.log('7 encontrado, fim do código')
        e++
        break
    }
    e++
}



console.log('###########')



for (let i in numeros){
    if (numeros[i] == 2){
        continue
    }
    console.log(numeros[i])
    if (numeros[i] === 7){
        break
    }
}



console.log('###########')



for (let numero of numeros){
    if (numero === 2){
        continue
    }
    if (numero === 7){
        break
    }
    console.log(numero)
}