const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send(`<form action="/" method="POST">nome: <input type="text" name="nome"> <button>ENVIAR</button></form>`)
})
app.post('/',(req,res)=>{
    res.send('formulário enviado com sucesso')
})
app.get('/contato',(req,res)=>{
    res.send('obrigado por entrar em contato com a gente')
})
app.listen(port,()=>{
    console.log( `http://localhost:${port}`)
})