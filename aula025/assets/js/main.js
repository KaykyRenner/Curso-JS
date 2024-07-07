//capturar evento de submit  do formulário
const form = document.querySelector('#form'); // capturou o formulário

form.addEventListener('submit', function(e){//adcionou um evento de submit, e evitou com que o programa seja enviado
    e.preventDefault();
    const InputPeso = e.target.querySelector('#ipeso')
    const InputAltura = e.target.querySelector('#ialtura')

    const peso = Number(InputPeso.value); //converteu os inputs para number
    const altura = Number(InputAltura.value); // mas no meu código html o input já é um number, então foi só pra seguir o professor mesmo

    if (!peso){//se o peso não for avaliado como verdadeiro mostra o "setResultado"
        setResultado('peso inválido', false);
        return
    }
    if (!altura){
        setResultado('altura inválido', false)
    }
    const imc = getImc(peso, altura)//criando a função para calcular o imc
    const nivelImc = getNivelImc(imc)//criando a função para verificar o nivel do imc
    const msg = `Seu IMC é ${imc} (${nivelImc})`//criada a mensagem com os valores
    setResultado(msg, true)
});
function getImc(peso, altura){ //função para calcular o imc
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
function getNivelImc(imc){ //função para verificar o nivel do imc
    const nivel = ['abaixo do peso','peso normal','sobre peso','obsidade grau 1', 'obsidade grau 2','obsidade grau 3']
    if(imc >= 39.9) return nivel[5]
    if(imc >= 34.9) return nivel[4]
    if(imc >= 29.9) return nivel[3]
    if(imc >= 24.9) return nivel[2]     
    if(imc >= 18.5) return nivel[1]     
    if(imc < 18.5) return nivel[0]    
}
function CriandoP(className){ //função que cria um P
    const p = document.createElement('p'); //criando um <p></p>
    //p.classList.add(className)//adicionando classe no <p  class='P-Resultado'></p>
    return p;
}
function setResultado(msg, isValid){ //funçao que recebe um resultado e fala se é valido ou não
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML= '';
    const p = CriandoP()
    resultado.appendChild(p) //adcionando o <p></p> na div EX:<div><p></p></div>
    p.innerHTML = msg // adcionado um texto ao <p>a</p>
    if (isValid){ 
        p.classList.add('P-Resultado') 
    } else{
        p.classList.add('bad')
    }
}

