/*
const multiplicacao = require('./mod');
console.log(multiplicacao(2, 2));
*/

////////////////////////////////////////////////////
/*
const aaa = require('./mod'); // ../ Para acessar uma pasta atras

const cachorrinho = new aaa('Dog');
cachorrinho.latir();
*/

const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens')); // '..' voltar pasta // 'arquivos', 'imagens'
//                                                                      mandou voltar duas pastas e depois entrar na pasta arquivos e imagens 
