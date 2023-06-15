// Arrays
/*
let friends = ['Marcos', 'Silvia', 'Elisa'];
friends[2] = 'Junior';
console.log(friends);
*/


// Adicionando valores a um array
/*
const num = [7, 8, 9];

num.push(10, 11, 12); // push adiciona no final
num.unshift(1, 2, 3); // unshift adiciona no inicio
num.splice(3, 0, 4, 5, 6) // A partir do index '3' -- '0' nao quis deletar nenhum numero -- Adicionado '4, 5, 6'

console.log(num);
*/


// Localizando itens em uma array primitiva
/*
const num = [6, 7, 8, 9];
// console.log(num.indexOf()); indexof indica posição do numero no index
console.log(num.includes(8)); // Para saber se tem 8 dentro da array
*/


// Localizando itens e uma array de referencia
/*
const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'}
]

console.log(movies.includes({id: 1, movieName: 'Dejavu'}));

console.log(movies.find(function(movie) {
    return movie.movieName == 'The Matrix';
}))
*/


// Arroz Function
/*
const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'}
]

console.log(movies.includes({id: 1, movieName: 'Dejavu'}));

console.log(movies.find(movie => movie.movieName == 'The Matrix'))
*/

// Removendo itens da Array
/*
const num = [5, 6, 7, 8];
// const final = num.pop() // Remove o ultimo numero
// const final = num.shift() // Remove o primeiro
const final = num.splice(2, 1) // Apartir do index 2 remova 1 item

console.log(num);
console.log(final);
*/

// Esvaziando uma Array
/*
let num = [5, 6, 7, 8];
// num = []; Uma maneira de esvaziar
// num.length = 0;
num.splice(0, num.length)

console.log(num);
*/

// Concatenando uma Array
/*
let numbers = [5, 6, 7, 8];
let letters = ['a', 'b', 'c'];

all = numbers.concat(letters);
half = all.slice(3, 5)

console.log(all);
console.log(half);
*/

// Utilizando o join Array
/*
let clients = ['Andre', 'Jose', 'Marcela'];

console.log(clients);

let clientsJoin = clients.join(', '); // join serve para adicionar qualquer coisa a uma array

console.log(clientsJoin);
*/

// Revertendo Array
/*
let clients = ['Andre', 'Marcela', 'Jose'];
clients.sort(); // Vai organizar o array em ordem alfabetica
clients.reverse(); // Inverte o Array
console.log(clients);
*/

// Verificando elementos na Array
/*
const tempLondon = [18, 13, 8, 2];
const tempPositive = tempLondon.every(function(value) {
    return value >= 0
})

console.log(tempPositive);
*/

// Filtrando uma array com filter
const tempLondon = [18, 13, 8, 2];
const tempPositive = tempLondon.filter(value => value >= 0)

console.log(tempPositive);