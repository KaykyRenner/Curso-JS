function validaCpf(cpfValido){
    Object.defineProperty(this, 'cpfLimpo',{
        get: function(){
            return cpfValido.replace(/\D+/g,'');
        }
    })
}
validaCpf.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.Sequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0,9);
    const digito1 = this.ciraDigito(cpfParcial)
    const digito2 = this.ciraDigito(cpfParcial + digito1)
    const novoCpf = cpfParcial + digito1 + digito2
    return novoCpf === this.cpfLimpo
}
validaCpf.prototype.ciraDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length+1
    const total = cpfArray.reduce((ac,val)=>{
        ac +=(regressivo*Number(val));
        regressivo--;
        return ac;
    },0);
    const digito = 11 -(total%11)
    return digito > 9 ? 0 :digito
}
validaCpf.prototype.Sequencia = function(){
    const Sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return Sequencia === this.cpfLimpo
}
const cpf = new validaCpf('136.807.054-09');
if(cpf.valida() ===  true) console.log('Cpf válido')
else console.log('cpf Inválido')