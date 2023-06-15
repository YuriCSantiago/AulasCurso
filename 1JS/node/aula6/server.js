const express = require('express'); // não precisa de caminho poque esta dentro da pasta node modules
const app = express();

//         Criar    Ler    Atualizar  Apagar
// CRUD -> Create,  Read,  Update,    Delete 
//        Post      Get    Put        Delete

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

/*
app.get('/', (req, res) => { // Assim que acessou a /
    res.send('Hello World!') // Recebe esta resposta
});
*/

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `); 
});

app.post('/', (req, res) => {
    res.send('Recebi o formulario');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato'); // /contato para acessar a aba contato
});

app.listen(3000, () => {// 3000 = porta que nao sao muito utilizadas
    console.log('Acessar http://localhost:3000'); // gera um link, apertanto ctrl e clickando, abre a pagina web
    console.log('Servidos executando na porta 3000');
});