const express = require("express"); // iniciando o express
const router = express.Router(); // configurando primeira parte da rota
const cors = require("cors"); // Aquie estou trazendo o pacote cors que permite consumir pacote de api front end
const conectaBancoDeDados = require("./bancoDeDados"); // aqui ligando ao arquivo banco de dados
conectaBancoDeDados(); // chamando a funcao
const Mulher = require("./mulherModel");

const app = express(); // iniciando o app
app.use(express.json());
app.use(cors());
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
async function criaMulher(request, response) {
  const novaMulhher = new Mulher({
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
    citacao: request.body.citacao,
  });
  try {
    const mulherCriada = await novaMulhher.save();
    response.status(201).json(mulherCriada);
  } catch (erro) {
    console.log(erro);
  }
}

//PATCH
async function corrigeMulher(request, response) {
  try {
    const mulherEncontrada = await Mulher.findById(request.params.id);
    if (request.body.nome) {
      mulherEncontrada.nome = request.body.nome;
    }

    if (request.body.imagem) {
      mulherEncontrada.imagem = request.body.imagem;
    }

    if (request.body.minibio) {
      mulherEncontrada.minibio = request.body.minibio;
    }
    if (request.body.citacao) {
      mulherEncontrada.citacao = request.body.citacao;
    }
    const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save();
    response.json(mulherAtualizadaNoBancoDeDados);
  } catch (erro) {
    console.log(erro);
  }
}
//DELETE
async function deletaMulher(request, response) {
  try {
    await Mulher.findByIdAndDelete(request.params.id);
    response.json({ messagem: "Mulher Deletada com Sucesso" });
  } catch (erro) {
    console.log(erro);
  }
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
