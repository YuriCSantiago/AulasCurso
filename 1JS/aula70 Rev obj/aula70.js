const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};
// console.log(pessoa.nome);
//console.log(pessoa.sobrenome);
const chave = 'sobrenome';
console.log(pessoa['sobrenome']);
console.log(pessoa[chave]);



const pessoa1 = new Object();
pessoa1.nome = 'Yuri';
pessoa1.sobrenome = 'Candido';
pessoa1.idade = 26;
pessoa1.falarNome = function() {
    console.log(`${this.nome} esta falando seu nome`);
};

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());

// Factory functions - Constructor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this,sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Yuri', 'Candido');
console.log(p1.nomeCompleto);


// Constructor Funtions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
// {} <- this  Oque a palavra 'new' faz criar um novo objeto e atrelar a palavra this dentro dessa funçao ao objeto
const p2 = new Pessoa('Luiz', 'Miranda');
console.log(p2);