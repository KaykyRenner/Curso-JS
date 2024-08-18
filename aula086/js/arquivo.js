class validaFormulario{
  constructor(){
    this.formulario = document.querySelector('.formulario');
    this.evento();
  }
  evento(){
    this.formulario.addEventListener('submit', e=>{
      this.handleSubmit(e);
      
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const campos = this.camposSaoValidos()
    const senha = this.senhasSaoValidas()
    if(campos && senha){
      alert('formulário enviado')
      //this.formulario.submit()
    }

  }
  senhasSaoValidas(){
    let valid = true
    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetirSenha');
    if(senha.value!== repetirSenha.value ){
      valid = false
      this.criaError(senha,'Campos senha e repetir senha precisar ser iguais.');
      this.criaError(repetirSenha,'Campos senha e repetir senha precisar ser iguais.')
    }
    if(senha.value.length < 6||senha.value.length > 12 ){
      valid= false
      this.criaError(senha,'precisa ser 6 ou 12 caracteres.');
    }
    return valid
  }
  camposSaoValidos(){
    let valid = true;
    for(let error of this.formulario.querySelectorAll('.error-text')){
      error.remove()
    }
    for(let campo of this.formulario.querySelectorAll('.validar')){
      const label = campo.previousElementSibling.innerText;
      if(!campo.value){
        console.log(campo);
        this.criaError(campo,`o campo ${label} não está preenchido`);
        valid = false;
      }
      
      if(campo.classList.contains('cpf')){
        if(!this.validaCPF(campo)) valid = false;
      }
      if(campo.classList.contains('usu')){
        if(!this.validaUsuario(campo)) valid = false;
      }
    }
    return valid
  }
  validaUsuario(campo){
    let valid = true;
    const usuario = campo.value;
    if(usuario.length < 3 || usuario.length > 12){
      this.criaError(campo,'Usuario precisa ter entre 3 e 12 caracteres');
      valid = false
    }
    if(!usuario.match(/^[a-zA-Z0-9]+$/)){
      this.criaError(campo,'usuario só pode conter letras ou números');
      valid = false
    }
  }
  validaCPF(campo){
    const cpf = new ValidaCPF(campo.value);
    if(!cpf.valida()){
      this.criaError(campo,'CPF inválido.');
      return false
    }
  }
  criaError(campo,msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div)
  }
}
const valida = new validaFormulario()