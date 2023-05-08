const mongoose = require("mongoose");
require("dotenv").config();

async function conectaBancoDeDados() {
  try {
    console.log("Conexão com bancos de dados iniciou");

    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conexao com bancos de dados feita com sucesso");
  } catch (erro) {
    console.log(erro);
  }
}

module.exports = conectaBancoDeDados;
