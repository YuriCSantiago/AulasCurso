function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
//    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Funçao construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Funçao construtora
const data = new Date(); // <- Date = Funçao construtora