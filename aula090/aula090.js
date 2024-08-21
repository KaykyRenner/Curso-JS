const request = obj =>{
    return new Promise((acept, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method,obj.url,true)
        xhr.send()
        
        xhr.addEventListener('load', ()=>{
            if(xhr.status >= 200 && xhr.status < 300){
                acept(xhr.responseText)
            } else{
                reject(xhr.statusText)
            }
        })
    })
}
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
    const objConfig = {
        method:'GET',
        url:e
    }
    try{
        const respomse = await request(objConfig)
        carregaResultado(respomse)
    } catch(e){
        carregaResultado(e)
}}
function carregaResultado(respomse){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = respomse
}
