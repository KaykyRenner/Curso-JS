function CriaCalculadora(){
    return{
        display : document.querySelector('.display'),
        inicia(){ alert('oi inicei')
        this.CliqueBotoes()
        },
        CliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target
                if(el.ClassList.contains('btn-num')){
                    this.btnParaDisplay();
                }
            });
        },
        btnParaDisplay(){

        }
    }
}
const calculadora = CriaCalculadora()
calculadora.inicia();