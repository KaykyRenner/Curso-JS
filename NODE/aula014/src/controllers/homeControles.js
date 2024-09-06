const HomeModel = require('../models/homeModel')

exports.paginaInicial = (req,res,next) =>{
    res.render('index')
}
exports.recebeMensagem = (req,res) =>{
    res.send(req.body)
}