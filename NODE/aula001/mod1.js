const path = require('path')
const {Pessoa,nome,SobreNome} = require('./app')
const p1 = new Pessoa('luiz')
console.log(p1)
console.log(nome)
console.log(SobreNome)

//////
const axios = require('axios')
axios('https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response.data)).catch(e=> console.log('erro'))

