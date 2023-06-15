// Escreva uma função que recebe 2 numeros e retorne o maior deles.

function max(x, y) {
    if (x > y) {
       
    // Ou
    // se X for maior que Y '?' Retorne X ':' o contrario disso retorne Y.
    // return x > y ? x : y; 
       
        return x; 
    }  //else {
        return y;
    }
// }

console.log(max(1, 2));


// Tudo acima em uma linha 

const max2 = (x, y) => x > y ? x : y;
console.log(max2(100, 20));
