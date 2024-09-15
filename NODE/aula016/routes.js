const express = require("express");
const route = express.Router();
const HomeControler = require("./src/controllers/homeControles");
const contatoControles = require("./src/controllers/contatoControles");


route.get("/", HomeControler.paginaInicial);
route.post("/", HomeControler.recebeMensagem);
route.get("/contato", contatoControles.paginaInicial);

module.exports = route;
