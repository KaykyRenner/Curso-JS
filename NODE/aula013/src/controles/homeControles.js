exports.paginaInicial = (req,res,next) =>{
    res.render('index')
    next()
}
exports.recebeMensagem = (req,res) =>{
    res.send(`sua nova rota POST!`)
}