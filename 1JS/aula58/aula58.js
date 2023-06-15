// Função construtora retorna objetos (constroi objetos)
// Função fabrica -> objetos   (Fabrica objetos)
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    // Privadas     Atributos privados // Nao esta odisponiveis fora do corpo
    const ID = 123456;
    const metodoInterno = function() {
       
    };

// Atributos ou metodos publicos // Pode acessar fora função ultilizando anotaçao de 'ponto' '.'

    // Pessoa.nome
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um metodo');
    };
}

const p1 = new Pessoa('Yuri', 'Candido');
const p2 = new Pessoa('Luiz', 'Otavio');
p2.metodo();
