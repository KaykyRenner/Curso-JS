function validaCpf(cpfValido){
    Object.defineProperty(this, 'cpfLimpo',{
        get: function(){
            return cpfValido.replace(/\D+/g,'');
        }
    })
}
const cpf = new validaCpf('705.484.450-52')