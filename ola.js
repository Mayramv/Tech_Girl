const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

function mostraOla(request, response) {
  response.send("Ola, mundo");
}

function mostraPorta() {
  console.log(" Servido criado e rodado na porta", porta);
}

app.use(router.get("/ola", mostraOla));
app.listen(porta, mostraPorta);
