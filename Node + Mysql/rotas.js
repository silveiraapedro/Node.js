const express = require("express");
const app = express();
const pessoas = require('./Model/pessoa');

app.get('/form', function(req, res){
    res.render('formulario');
});

app.get('/home', function(req,res){
    pessoas.findAll({order: [['id', 'DESC']], raw: true}).then(function(pessoaEncontrada){
        console.log(pessoaEncontrada);
        res.render('home', {pessoa: pessoaEncontrada});
    })
})

app.post('/add', function(req,res){
    res.send(req.body.nome + ' ' + req.body.idade);
    pessoas.create({
    nome: req.body.nome,
    idade: req.body.idade
}).then(function(){
    res.send("Pessoa criada com sucesso");
    res.redirect('/home');
}).catch(function(erro){
    res.send(erro);
})})

app.get('/deletar/:id', function(req,res){
    pessoas.destroy({where: {'id' : req.params.id}}).then(function(){
        res.send("Destroiu");
    }).catch(function(erro){
        res.send(erro);
    })})





module.exports = app;