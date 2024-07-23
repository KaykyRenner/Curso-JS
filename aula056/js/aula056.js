function CriaCalculadora(){
    return{
        display : document.querySelector('.display'),
        btnClear: document.querySelector('.btn-Clear')
        ,
        inicia(){
        this.CliqueBotoes()
        },
        CliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                
            }.bind(this));
        },
        btnParaDisplay(valor){
            this.display.value+=valor
        }
    };
}
const calculadora = CriaCalculadora()
calculadora.inicia();