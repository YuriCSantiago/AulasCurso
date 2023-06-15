function* geradora1() {
    // Codigo qualquer...
    yield 'valor 1';

    // Codigo qualquer...
    yield 'valor 2';

    // Codigo qualquer...
    yield 'valor 3';
}

const g1 = geradora1();
/* console.log(g1.next().value);
console.log(g1.next().value); */

for (let valor of g1) {
    console.log(valor);
}