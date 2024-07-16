//try{
//    console.log('abri um arquivo')
//    console.log('manipulei o arquivo e deu erro')
//    console.log('fechei o arquivo')
//   try{console.log(c)
//    }catch(e){
//        console.log('deu erro')
//    } finally{
//        console.log('tb sou FINALY')
//    }
//} catch(e){
//    console.log('tratando um erro')
//} finally{
//    console.log('FINALY: eu sempre sou executado')
//}
function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando a instância date');
    }
    if(!data){
        data = new Date
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })

}
try {const hora = retornaHora(new Date)
    console.log(hora)
}catch(e){
    console.log(e)
}finally{
    console.log('bom dia')
}
