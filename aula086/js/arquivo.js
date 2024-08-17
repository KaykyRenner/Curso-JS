class validaFormulario{
  constructor(){
    this.formulario = document.querySelector('.formulario');
    this.evento();
  }
  evento(){
    this.formulario.addEventListener('submit', e=>{
      this.handleSubmit(e)
      
    })
  }
  handleSubmit(e){
    e.preventDefault()
    this.camposSaoValidos()

  }
  camposSaoValidos(){
    let valid = true
    for(let error of this.formulario.querySelectorAll('.error-text')){
      error.remove()
    }
    for(let campo of this.formulario.querySelectorAll('.validar')){
      const label = campo.previousElementSibling.innerText
      if(!campo.value){
        console.log(campo)
        this.criaError(campo,`o campo ${label} não está preenchido`)
        valid = false
      }
      if(campo.classList.contains('cpf')){
        if(!this.validaCPF(campo)) valid = false
      }
    }
  }
  validaCPF(campo){
    const cpf = new ValidaCPF(campo.value)
    if(!cpf.valida()){
      this.criaError(campo,'CPF inválido.')
      return false
    }
  }
  criaError(campo,msg){
    const div = document.createElement('div')
    div.innerHTML = msg;
    div.classList.add('error-text')
    campo.insertAdjacentElement('afterend', div)
  }
}
const valida = new validaFormulario()