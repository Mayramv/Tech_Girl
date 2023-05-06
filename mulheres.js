const express = require("express"); // iniciando o express
const router = express.Router(); // configurando primeira parte da rota
const { v4: uuidv4 } = require("uuid");

const conectaBancoDeDados = require("./bancoDeDados"); // aqui ligando ao arquivo banco de dados
conectaBancoDeDados(); // chamando a funcao
const Mulher = require("./mulherModel");

const app = express(); // iniciando o app
app.use(express.json());
const porta = 3333; // Criando a porta

//GET
async function mostraMulheres(request, response) {
  try {
    const mulheresVindasDoBancoDeDados = await Mulher.find();

    response.json(mulheresVindasDoBancoDeDados);
  } catch (erro) {
    console.log(erro);
  }
}
//POST
function criaMulher(request, response) {
  const novaMulhher = {
    id: uuidv4(),
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
  };
  mulheres.push(novaMulhher);

  response.json(mulheres);
}

//PATCH
function corrigeMulher(request, response) {
  function encontraMulher(mulher) {
    if (mulher.id === request.params.id) {
      return mulher;
    }
  }
  const mulherEncontrada = mulheres.find(encontraMulher);

  if (request.body.nome) {
    mulherEncontrada.nome = request.body.nome;
  }

  if (request.body.imagem) {
    mulherEncontrada.imagem = request.body.imagem;
  }

  if (request.body.minibio) {
    mulherEncontrada.minibio = request.body.minibio;
  }
  response.json(mulheres);
}
//DELETE
function deletaMulher(request, response) {
  function todasMenosEla(mulher) {
    if (mulher.id !== request.params.id) {
      return mulher;
    }
  }

  const mulheresQueFicam = mulheres.filter(todasMenosEla);

  response.json(mulheresQueFicam);
}
//PORTA
function mostraPorta() {
  console.log(" Servido criado e rodado na porta", porta);
}

app.use(router.get("/mulheres", mostraMulheres)); //Configurando rota Get/ mulheres
app.use(router.post("/mulheres", criaMulher)); // Configurando rota POST/mulheres
app.use(router.patch("/mulheres/:id", corrigeMulher)); // Configurando rota PATCH/mulheres
app.use(router.delete("/mulheres/:id", deletaMulher)); // Configurando rota DELETE/mulheres
app.listen(porta, mostraPorta); //Servido ouvindo a porta
