exports.paginaInicial = (req,res) =>{
    res.render('index')
}
exports.recebeMensagem = (req,res) =>{
    res.send(`sua nova rota POST!`)
}