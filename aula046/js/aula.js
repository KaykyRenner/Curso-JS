//const container = document.querySelector('.container')
function CriaHoras(){
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    })
}
let seconds = 0;
function Hora(){
    let timer = setInterval(()=>{
    seconds++;
    console.log(CriaHoras(seconds))

    }, 1000)
}
Hora()