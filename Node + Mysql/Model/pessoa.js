const {DataTypes} = require('sequelize');
const sequelize  = require('../Database/database.js');


const pessoas = sequelize.define('pessoas', {
    nome: {
        type: DataTypes.STRING(100)

    },
    idade:{
        type: DataTypes.INTEGER
    }
});
  // Dar insert no banco de dados
//pessoas.create({
//    nome: "Pedro Silveira",
//    idade: '20'
//}) 
// executar esse comando uma unica vez se nao vai ficar derrubando a tabela toda hora
//pessoas.sync({force: true});
module.exports = pessoas;

