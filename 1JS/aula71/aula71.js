// defineProperty - defineProperties
/* function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a chave
        value: estoque,  // valor da chave
        writable: true, // true Pode alterar valor
        configurable: false // true configuravel // Como false, nao permite apagar a variavel nem reconfigurar
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 1000;
delete p1.estoque;
console.log(p1); */

////////////////////////////////////////////////////////////////////////////////////////////////////
// defineProperties

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a chave
        value: estoque,  // valor da chave
        writable: true, // true Pode alterar valor
        configurable: false // true configuravel // Como false, nao permite apagar a variavel nem reconfigurar
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true, 
            configurable: true
        },
    });
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for( let chave in p1) {
    console.log(chave);
}

