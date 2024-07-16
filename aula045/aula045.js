function Hora(){
    let data = new Date
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}
const time = setInterval(function(){ // funçao que mostra a hr em 1 em 1 seg
    console.log(Hora());
}, 1000);
setTimeout(function(){ //decide qual é o tempo que o "clearInterval" vai ser ativado
    clearInterval(time)
}, 10000)
setTimeout(function(){ //decide o tempo em que a mensagem vai aparecer na tela
    console.log('olá usuário')
},3000)