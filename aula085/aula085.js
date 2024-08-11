class validaCps{
    constructor(cpfValido){
        Object.defineProperty( this, 'cpfLimpo' ,{
            get: function(){
                return cpfValido.replace(/\D+/g,'')
            }
        })
    }
    valida(){
        if(typeof this.cpfLimpo==='undefined') return false;
        if(this.cpfLimpo.length!==11) return false
        if(this.sequencia()) return false

        const cpfParcial = this.cpfLimpo.slice(0,9)
        const digito1 = validaCps.criaDigito(cpfParcial)
        const digito2 = validaCps.criaDigito(cpfParcial+digito1)
        const novoCpf = cpfParcial + digito1 + digito2
        return novoCpf === this.cpfLimpo
    }
    sequencia(){
        const sequencia = this.cpfLimpo.charAt(0).repeat(11)
        return sequencia === this.cpfLimpo
    }
    static criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial)
        let regressivo = cpfArray.length+1
        const total = cpfArray.reduce((ac,val)=>{
            ac+=(regressivo*Number(val))
            regressivo--
            return ac
        },0)
        const digito = 11-(total%11)
        return digito > 9 ? 0:digito
    }
}
const cpf1 = new validaCps('136.807.054-09')
if(cpf1.valida() ===  true) console.log('Cpf válido')
else console.log('cpf Inválido')