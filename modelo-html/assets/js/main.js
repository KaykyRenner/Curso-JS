function meuEscopo(){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    function receberEventoForm(evento){
        const pessoaImc = []
        evento.preventDefault();
        const peso = form.querySelector('#ipeso')
        const altura = form.querySelector('#ialtura')
        pessoaImc.push({
            peso: peso.value,
            altura: altura.value
        })
    console.log(pessoaImc)
    const resultadoImc = peso.value/(altura.value*altura.value)
    if( resultadoImc <= 18.5){
        resultado.innerHTML =`<p>${resultadoImc} abaixo do peso</p>`
    } else if(resultadoImc > 18.5 && resultadoImc <= 24.9){
        resultado.innerHTML =`<p>${resultadoImc} peso normal</p>`
    } else if (resultadoImc >= 25 && resultadoImc <= 29.9){
        resultado.innerHTML =`<p>${resultadoImc} sobrepeso</p>`
    } else if (resultadoImc >= 30 && resultadoImc <= 34.9){
        resultado.innerHTML =`<p>${resultadoImc} obsidade grau 1</p>`
    } else if (resultadoImc >= 35 && resultadoImc <= 39.9){
        resultado.innerHTML =`<p>${resultadoImc} obsidade grau 2</p>`
    } else if (resultadoImc >= 40 && resultadoImc <=500){
        resultado.innerHTML =`<p>${resultadoImc} obsidade grau 3</p>`
    } else{resultado.innerHTML =`<p>números inválidos, digite novamente</p>`}
    
    }
    
    form.addEventListener('submit', receberEventoForm);
}
meuEscopo()