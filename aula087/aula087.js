function rand(min,max){
    min *= 1000;
    max*=1000;
    return Math.floor(Math.random() * (max-min) + min);
}
function esperaAi(msg,tempo){
    return new Promise((acept,reject)=>{
        if(typeof msg !== 'string') reject('contém número no texto')
        setTimeout(()=>{
            acept(msg);
        },tempo);
    });
}
esperaAi('conexão com BD',rand(1,3)).then(
    resposta=>{
        console.log(resposta)
        return esperaAi('buscando a base de Dados',rand(1,3))
    }
).then(
    resposta=>{
        console.log(resposta)
        return esperaAi(22222, rand(1,3))
    }
).then(
    resposta=>{
        console.log(resposta)
    }
).catch(e=>{
    console.log('Erro:',e)})
