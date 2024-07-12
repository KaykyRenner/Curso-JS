const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body) //pega todos os estilos que foi adcionado ao body no css
const backgroundColorBody = estilosBody.backgroundColor//escolha qual estilo você quer
console.log(backgroundColorBody)
for( i of ps){
    console.log(i.style.backgroundColor= backgroundColorBody)
    console.log(i.style.color='white')
}