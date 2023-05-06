const mongoose = require("mongoose");

async function conectaBancoDeDados() {
  try {
    console.log("Conexão com bancos de dados iniciou");

    await mongoose.connect(
      "mongodb+srv://mayramalaquias:fAfdaZEoEZNaAjy3@clustermulheres.n56gtaa.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Conexao com bancos de dados feita com sucesso");
  } catch (erro) {
    console.log(erro);
  }
}

module.exports = conectaBancoDeDados;
