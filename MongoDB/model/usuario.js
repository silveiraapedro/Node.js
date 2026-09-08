const mongoose = require('mongoose');

// Type - pode ser Object, String, Number, Date
const usuarioSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true // Faz o campo ser obrigatorio
        },
        idade: {
            type: Number,
            require: true
        }

    }
)
// Collection - ela equivale as tabelas de um banco de dados em SQL
mongoose.model('usuario', usuarioSchema);

// Assim se coloca uma informação dentro do banco
//const Pedro = mongoose.model('usuario')

//new Pedro({
//   nome: '',
//    email: '',
//   idade: 0
//}).save().then(() => {
//    console.log("Usuario cadastrado com sucesso");
//}).catch((error) =>{
//    console.log("Algo deu errado: " + error);
//})

module.exports = usuarioSchema;