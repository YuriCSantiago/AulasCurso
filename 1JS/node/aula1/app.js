/* const mod1 = require('./mod1');
console.log(mod1.falaNome());
*/

const { nome, sobrenome, falaNome } = require('./mod1');
console.log(nome, sobrenome);
console.log(falaNome());



/////////////////////////////////////// Pode importar sem falar o caminho completo dele
const { Pessoa } = require('./mod1');
// cd aula1 -- npm init -y  --  npm i axios
const axios = require('axios');
/*
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(Response => console.log(Response.data))
.catch(e => console.log(e));
*/