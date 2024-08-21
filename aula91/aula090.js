document.addEventListener('click', e=>{
    const el = e.target
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault()
        carregaPagina(el)
    }
})
async function carregaPagina(el){
    const e = el.getAttribute('href')
    try{
    const href = await fetch(e)
    if(href.status !== 200 ) throw new Error('ERRO 404 NOSSO')
    const html = await href.text()
    carregaResultado(html)}catch(e){carregaResultado(e)}
}
function carregaResultado(respomse){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = respomse
}

