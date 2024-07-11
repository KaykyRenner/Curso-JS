const elementos = [
    {tag: 'p', texto:'frase1'},
    {tag: 'div', texto:'frase2'},
    {tag: 'footer', texto:'frase3'},
    {tag: 'section', texto:'frase4'},
];
const container = document.querySelector('.container')
const div = document.createElement('div')
for ( i = 0; i< elementos.length ; i+=1 ){
    const {tag, texto} = elementos[i]
    const CriaTag = document.createElement(tag)
    CriaTag.innerHTML = texto
    div.appendChild(CriaTag)
}
container.appendChild(div)
