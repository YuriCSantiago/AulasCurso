const fs = require('fs').promises;
const path = require('path');

/*
fs.readdir(path.resolve(__dirname))
.then(files => console.log(files))
.catch(e => console.log(e));
*/

//                     Diretório raiz
async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath); // fileFullPath para fazer estatisticas do arquivos

        if(/\.git/g.test(fileFullPath)) continue; // se tiver git no caminho da pasta continue, nao mostra no terminal .git
        if(/\node_modules/g.test(fileFullPath)) continue;

        if(stats.isDirectory()) {
            readdir(fileFullPath); // vai listar todas as pastas, vai tentar voltar e listar 
            // se tiver arquivos dentro ele vai voltar e exibir os arquivos la dentro.
            continue;
        }

        if(
            !/\.css$/g.test(fileFullPath)/* para mostrar apenas arquivos de css*/ && (!/\.html/g.test(fileFullPath)) /* para mostrar apenas arquivos de html*/
            ) continue; 
        console.log(fileFullPath);
    }
}

readdir('D:/Curso/VS/1JS/'); // 'pwd' no diretoria para pegar o caminho.