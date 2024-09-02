const express = require('express')
const route = express.Router()
const HomeControler = require('./controles/homeControles')
const contatoControles = require('./controles/contatoControles')
route.get('/',HomeControler.paginaInicial) 
route.post('/',HomeControler.recebeMensagem)
route.get('/contato',contatoControles.paginaInicial)

module.exports = route