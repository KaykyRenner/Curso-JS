exports.paginaInicial = (req, res, next) => {
    res.render('index');
}

exports.recebeMensagem = async (req, res) => {
    console.log(req.body)
}