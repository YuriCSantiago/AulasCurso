// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o proprio numero
// Checar se o numero é realmente um numero = Retorna o propio numero
// Usa a função com numeros de 0 a 100
function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0 ) return 'Fizz';
    if (numero % 5 === 0 ) return 'Buzz';
    return numero
}

console.log('a', fizzBuzz('a'))

for (let i = 0; i<= 100; i++) {
    console.log(i, fizzBuzz(i))
}