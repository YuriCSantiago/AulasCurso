const fs = require('fs').promises;

module.exports = (caminho, dados) => {

    fs.writeFile(caminho, dados, { flag: 'w' });
};

//              flag 'w' para apagar tudo que estiver dentro do arquivo e escreve oque esta pedindo 'Frase 1'
// fs.writeFile(caminhoArquivo, 'Frase 1 \n', { flag: 'a' });
// flag: 'a' sempre coloca coisas a mais no arquivo
// \n quebra a linha dentro do arquivo, barra inversa \n