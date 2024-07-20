//function soma(a,b){
//    return a+b //retorna o valor
//}
//function soma2(a,b){
//    console.log(a+b)//exibe o valor
//}
//soma2(2,2)

//#################################

//document.addEventListener('click',function(){
//    document.body.style.backgroundColor = 'red'
//})

//#################################

function CriaPessoa(nome,sobrenome){
    return {nome, sobrenome}
}
const p1 = CriaPessoa('Kayky', 'renner')
const p2 = {
    nome:'Kayky',
    sobrenome: 'Renner'
}

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto;
}   
const Fala = falaFrase('olá')
const resto = Fala('mundo')
console.log(resto)

//#################################


function CriaMultiplicador(multiplicador){
    //multiplicador
    return function(n){
        return n * multiplicador;
    }
}
const duplica = CriaMultiplicador(2)
const triplica = CriaMultiplicador(3)
const quadriplica = CriaMultiplicador(4)
console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))










