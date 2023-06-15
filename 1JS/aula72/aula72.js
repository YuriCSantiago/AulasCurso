function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a chave
        configurable: false, // true configuravel // Como false, nao permite apagar a variavel nem reconfigurar
        
        get: function() {
            return estoquePrivado;
        },

        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Bad value');
                return;
            }
            estoquePrivado = valor;
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);