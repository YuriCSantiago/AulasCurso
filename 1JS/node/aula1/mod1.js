const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => nome + ' ' + sobrenome;

/*
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
console.log(module.exports);
*/

// um atalho para exportar
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
// Palavra this aponta para qualquer coisa, tanto module e exports
this.qualquerCoisa = 'o que eu quiser exportar';
console.log(module.exports);


/////////////////////////////
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Pessoa = Pessoa;