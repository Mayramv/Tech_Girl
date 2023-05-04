const express = require("express");
const app = express();
const router = express.Router();

const porta = 3333;

const mulheres = [
  {
    nome: "Mayra Malaquias",
    Image: "WhatsApp Image 2023-01-26 at 14.19.02 (1).jpeg",
    minibio: " Desenvolvedora Fullstack",
  },
  {
    nome: "Laura passos",
    Image: "minin",
    minibio: " Desenvolvedora back-end",
  },
  {
    nome: "Maria Betania",
    Image: "WhatsApp Image 2023-01-26 at 14.19.02 (1).jpeg",
    minibio: " Desenvolvedora front-end",
  },
];
function mostraMulheres(request, response) {
  response.json(mulheres);
}

function mostraPorta() {
  console.log(" Servido criado e rodado na porta", porta);
}
app.use(router.get("/mulheres", mostraMulheres));
app.listen(porta, mostraPorta);
