/* 
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop') retorna se writable, configurable, enumerable
... (spread)

// Ja vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (defina varias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = {nome: 'Produto', preco: 1.80};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);
// Object.freeze(produto);
// produto.nome = 'outro nome';
// const caneca = Object.assign({}, produto, { material: 'porcelana' }); // Copiar um objeto

/*
caneca.nome = 'Outro nome';
caneca.preco = 2.5
console.log(produto);
console.log(caneca);
*/

