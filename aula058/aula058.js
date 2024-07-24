function Calculadora(){
    this.display = document.querySelector('.display')
    this.Inicia = () => {
        this.CliqueBotoes()
        this.EnviarComEnter()
    }

    this.EnviarComEnter = () =>{
        this.display.addEventListener('keyup', e =>{
            if(e.keyCode === 13) this.realizaConta()
        })
    }

    this.btnParaDisplay = valor => this.display.value += valor

    this.ClearDisplay= () => this.display.value = ''

    this.ApagaUm = el => this.display.value = this.display.value.slice(0, -1)

    this.realizaConta = el => {
        let conta = this.display.value;
        try{
            conta = eval(conta);
            if(!conta){
                alert('conta inválida');
                return;
            }
            this.display.value = String(conta)
        }catch(e){
            alert('conta inváida');
            return;
    }

};
    this.CliqueBotoes = () =>{
        document.addEventListener('click', e =>{
            const el = e.target;

            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);

            if(el.classList.contains('btn-Clear')) this.ClearDisplay();
            
            if(el.classList.contains('btn-dell')) this.ApagaUm(el);
            
            if(el.classList.contains('btn-eq')) this.realizaConta(el)

            this.display.focus(el)
    })
        
    }
    
}
const calculadora = new Calculadora()
calculadora.Inicia()
