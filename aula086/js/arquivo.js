class validaFormulario{
  constructor(){
    this.formulario = document.querySelector('.formulario')
    this.evento()
  }
  evento(){
    this.formulario.addEventListener('submit', e=>{
      this.handleSubmit(e)
    })
  }
  handleSubmit(e){
    e.preventDefault()
  }
  
}
const valida = new validaFormulario()