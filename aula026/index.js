//? :
const PontuaçãoUsu = 1000
const NivelUsu = PontuaçãoUsu >= 1000 ?'Usuário vip' : 'Usuário normal';
const CorUsu = null
const corPadrao = CorUsu || 'preta'
console.log(NivelUsu,'da cor', corPadrao  )