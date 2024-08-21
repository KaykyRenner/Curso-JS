function rand(min=0,max=3){
    min *= 1000;
    max*=1000;
    return Math.floor(Math.random() * (max-min) + min);
}
function esperaAi(msg,tempo){
    return new Promise((acept,reject)=>{
        if(typeof msg !== 'string') {reject('CAI NO ERR')
            return
        }
        setTimeout(()=>{
            acept(msg.toUpperCase() + ' passei na promise DELEGADO');
        },tempo);
    });
}
async function name22() {
    try{
    const f1 = await esperaAi('fase1', rand())
    console.log(f1)

    const f2 = await esperaAi(2, rand())
    console.log(f2)

    const f3 = await esperaAi('fase3', rand())
    console.log(f3)

    console.log('fim do código meu parceiro')
    } catch(e){
        console.log(e)
    }
}
name22()
