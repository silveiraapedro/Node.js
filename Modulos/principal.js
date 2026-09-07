var mul = require("./mul.js");
var sub = require("./sub.js");
var soma = require("./soma.js");
var div = require("./div.js");

// Posso puxar diferentes arquivos 'js' como modulos pra funcionar em uma unica principal, isso era utilizado em C também
// No arquivo = module.exports = <nome dele>;
// No arquivo a função var <nome dele> = function(variaveis aq){}, e pronto.
// Na principal = var <nome> = require("e o diretorio de onde ta");

console.log("Multiplicação: " + mul(2,3));
console.log("Subtração: " + sub(2,2));
console.log("Soma: " + soma(2,2));
console.log("Divisão: " + div(2,2));
