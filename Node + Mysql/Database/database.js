const Sequelize = require('sequelize');

const sequelize = new Sequelize('post', 'root', '12341', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Conectado ao bando de dados")
}).catch(function(erro){
    console.log(erro);
});

module.exports = sequelize;
