const mongoose = require('mongoose');
const usuario = require('./model/usuario');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/db").then(() => {
    console.log("Conectado ao MongoDB");
}).catch((error) =>{
    console.log(error);
})