const numero = Number(prompt ('digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const DivTexto = document.getElementById('texto')

numeroTitulo.innerHTML = numero
DivTexto.innerHTML =`<p>raiz quadrada ${numero ** (1/2)}</p>`
DivTexto.innerHTML +=`<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
DivTexto.innerHTML +=`<p>é NaN: ${Number.isNaN(numero)}</p>`
DivTexto.innerHTML +=`<p>arredondando para baixo ${Math.floor(numero)}</p>`
DivTexto.innerHTML +=`<p>arredondando para cima ${Math.ceil(numero)}</p>`
DivTexto.innerHTML +=`<p>com duas casas decimais: ${numero.toFixed(2)}</p>`

