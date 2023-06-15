const pessoas = [
    {id: 3, nome: 'Yuri'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];

/*
const novasPessoas = {};
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa };
}
*/

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set (id, { ...pessoa });
}

// console.log(novasPessoas.get(2)); // .get(2) para obter a pessoa 2

/*
// (const pessoa of novasPessoas.value())
for (const pessoa of novasPessoas.keys()) {
    console.log(pessoa);
}
*/

novasPessoas.delete(2); // Deleter chave 2
console.log(novasPessoas);