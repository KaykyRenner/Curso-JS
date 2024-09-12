
exports.paginaInicial = (req,res,next) =>{
    res.render('index',{
        titulo:'kayky fodastico',
        numero:[0,1,2,3,4,5,6,7,8,9]
    })
    
}
exports.recebeMensagem = (req,res) =>{
    res.send(req.body)
}