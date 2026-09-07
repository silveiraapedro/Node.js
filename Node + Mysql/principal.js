const express = require("express");
const app = express();
const Sequelize = require('sequelize');
const sequelize = require('./Database/database');
const pessoas = require('./Model/pessoa');
const {engine} = require('express-handlebars');
const rotas = require('./rotas');
const bodyParser = require('body-parser');



// Config
  // Template Engine
  // main - Template base da aplicação
  app.engine('handlebars', engine({defaultLayout: 'main'}));
  app.set('view engine', 'handlebars');

  //Body-Parser
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());

app.listen(8080, function(){console.log("O servidor esta rodando.")});


app.use('/', rotas);

