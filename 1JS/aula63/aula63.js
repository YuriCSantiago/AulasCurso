//                -5        -4        -3      -2        -1
//                 0         1         2       3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
// pop -1 remove
//const removidos = nomes.splice(2, 2, 'Yuri', 'Otavio');
//console.log(nomes, removidos);

// shift
// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);

// UnShift
nomes.splice(0, 0, 'Yuri', 'Candido');
console.log(nomes);

// Push adicionar em ultimo
// nomes.splice(nomes.length, 0, 'Yuri');
// console.log(nomes);