exports.paginaInicial = (req,res) =>{
    res.send(`<form action="/" method="POST">nome: <input type="text" name="nome"> <button>ENVIAR</button></form>`)
}
exports.recebeMensagem = (req,res) =>{
    res.send(`sua nova rota POST!`)
}