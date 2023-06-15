// Dobre os numeros
//               0   1   2  3  4  5  6  7  8  9   10  11  12 -> indices
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

// Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome);
// console.log(nomes);

// Remova apenas a chave "nome" do objeto
const idades = pessoas.map(function(obj) {
// delete obj.nome; Uma maneira de deletar
return {idade: obj.idade};
});
// console.log(idades);

// Adicione uma chave id em cada objeto
const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj }; // ...Spread Operator
    newObj.id = indice;        // Novo Objeto
    return newObj;
});
console.log(comIds);
// console.log(pessoas);