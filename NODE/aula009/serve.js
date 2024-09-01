const express = require('express')
const app = express()
const port = 3000

app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
)
app.get('/',(req,res)=>{
    res.send(`<form action="/" method="POST">nome: <input type="text" name="nome"> <button>ENVIAR</button></form>`)
})
app.get('/teste/:usu?/:parametro?',(req,res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send(req.query.facebook)
})
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send(`${req.body.nome} enviado com sucesso`)
})
app.listen(port,()=>{
    console.log( `http://localhost:${port}`)
})