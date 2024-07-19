const souUmdado = function(){//""ex de First Objeto"""
    //funcao teste de enviar dado
    console.log('sou um dado')
}
function RecebeDado(funcao){//""ex de First Objeto"""
    //função que recebe o dado
    funcao()//chamando uma função
}

//fuction normal
RecebeDado(souUmdado)//""ex de First Objeto""
//recebeDado vai receber SouUmdado e vai executar normalmente por conta que RecebeDado tem uma função sendo chamada


//Arrow fuction
const ArrowFuction= () => {
    console.log('sou uma arrow fuction')
}


//função dentro de um objeto
const obj = {
    fala:function(){
        console.log('oi')
    }
}
obj.fala()//chamando a função