function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    /*form.onsubmit = function (evento){
        evento.preventDefault();
        console.log('foi enviado');
    };*/ 
    const pessoas = [];
    function receberEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.inome');
        const sobre = form.querySelector('.isobre');
        const peso = form.querySelector('.ipeso');
        const altura = form.querySelector('.ialtura');

        pessoas.push({
            nome: nome.value,
            sobre: sobre.value,
            peso:peso.value,
            altura:altura.value
        })
        console.log(pessoas)
        resultado.innerHTML +=`<p>${nome.value} ${sobre.value} ${peso.value} ${altura.value}</p>`
    }
    form.addEventListener('submit', receberEventoForm);


}
meuEscopo()