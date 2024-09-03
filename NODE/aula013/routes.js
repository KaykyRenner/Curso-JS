const express = require("express");
const route = express.Router();
const HomeControler = require("./src/controles/homeControles");
const contatoControles = require("./src/controles/contatoControles");

function meuMiddleware(req,res,next){
    console.log()
    console.log('passei no seu middleware')
    next()
}

route.get("/",meuMiddleware, HomeControler.paginaInicial, function(req,res){
    console.log('ainda to aqui')
});
route.post("/", HomeControler.recebeMensagem);
route.get("/contato", contatoControles.paginaInicial);

module.exports = route;
