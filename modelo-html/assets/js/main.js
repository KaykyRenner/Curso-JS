function meuEscopo(){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    function receberEventoForm(evento){
        const pessoaImc = []
        evento.preventDefault();
        const peso = form.querySelector('.iipeso')
        const altura = form.querySelector('.iialtura')
        pessoaImc.push({
            peso: peso.value,
            altura: altura.value
        })
    console.log(pessoaImc)
    }
    form.addEventListener('submit', receberEventoForm);
}
meuEscopo()