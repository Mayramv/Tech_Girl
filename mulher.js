const express = require("express");
const app = express();
const router = express.Router();

const porta = 3333;
function mostraMulher(request, response) {
  response.json({
    nome: "Mayra Malaquias",
    Image: "WhatsApp Image 2023-01-26 at 14.19.02 (1).jpeg",
    minibio: " Desenvolvedora Fullstack",
  });
}

function mostraPorta() {
  console.log(" Servido criado e rodado na porta", porta);
}
app.use(router.get("/mulher", mostraMulher));
app.listen(porta, mostraPorta);
