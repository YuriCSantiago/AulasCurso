const path = require('path');
//                                   '..' voltando uma pasta e criando o arquivo 'teste.txt'
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler')

/*
const pessoas = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'Eduardo' },
    { nome: 'Luiza' },
];
// vai criar uma string que contem arquivo json
const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json)
*/

// sempre que se cria uma função async retorna uma promisse
async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados) // os dados vao voltar a ser objetos
    dados.forEach(val => console.log(val));
}
leArquivo(caminhoArquivo);