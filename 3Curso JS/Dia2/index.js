// operadores aritméticos  -- '**'-> exponencial
/*
let num1 = 3;
let num2 = 2;

let total = num1 + num2

console.log(total++);
console.log(total);

console.log(total--);
console.log(total);
*/

// Operadores de atribuição
 /* let num1 = 3;

num1 += 20;   //   -=   *=  /=

console.log(num1);
*/

// Operadores de Comparação
/*
let num1 = 3;

 console.log(num1 > 0);   //  '>' Maior que      
 console.log(num1 < 0);  // '<' Menor que
 console.log(num1 >= 3); //  '>=' Maior ou igual que     
 console.log(num1 <= 3); //    '<=' Menor ou igual que

 console.log(num1 === 3);  // '===' Valor identico ao que esta na variavel
 console.log(num1 !== 3);  // '!==' Não igual a 
*/

// Operadores de Igualdade
/*
let num1 = '1';
let num2 = 1;

console.log(num1 === num2); // false
console.log(num1 == num2); // true
*/

// Operadores ternarios
/*
let driver = 90; // Velocidade do motorista
//         Se a veloc foi maior que 110 retorne true'Above' se for false'below'
let speed = driver > 110 ? 'Above' : 'Below';
console.log(speed);
*/

// Operadores Lógicos
/*
let TemIdadeMinima = true;
let temTituloEleitor = true;
let podeVotar = TemIdadeMinima && temTituloEleitor;
console.log('Pode Votar: ' + podeVotar);


let TemIdadeMinima1 = true;
let temTituloEleitor1 = false;
let podeVotar1 = TemIdadeMinima1 || temTituloEleitor1;
// console.log(podeVotar1);

let podeViajar = !podeVotar;
console.log('Pode Viajar: ' + podeViajar);
*/

// Operadores Lógicos com string
/*
// let corCliente = 'white';
let corCliente = undefined;
let corEstoque = 'Black';
let corVendida = corCliente || corEstoque;
console.log(corVendida);
*/

// Precedencia de Operadores
/*
let num1 = 3 + 4 * 2;
console.log(num1);
*/

// if e else
/*
// let driverSpeed = 80;
// let driverSpeed = 120;
// let driverSpeed = 39;
let driverSpeed = 110;

if (driverSpeed > 110) {
    console.log('Driving too fast');
}

else if (driverSpeed > 40 && driverSpeed <= 110) {
    console.log('OK');
}

else
    console.log('Driving too slow');
*/

// Switch / Case
/*
// let airport = 'MCO';
let airport = 'JFK';
// let airport = 'ABC'; Unknown

switch(airport) {
    case 'MCO':
        console.log('Orlando');
        break
    case 'JFK':
        console.log('John F. Kennedy');
        break
    case 'SEA':
        console.log('Seattle');
        break
    default:
        console.log('Unknown');
}
*/

// For Loop
/*
//Variavel'i = 0' - Condição'i <= 10' - Imcremento'i++'
for (i = 0; i <= 10; i++) {
    console.log('Numero ', i);
}
*/

// For in loop
/*
const myCar = {
    model: 'BMW',
    year: 2023,
    km: 68000
}

for (let i in myCar)
//             'myCar[i] pega o valor atribuido'
console.log(i, myCar[i]);
*/

// While Loop
// Pode reutilizar variaveis setadas anteriormente
i = 1;
while (i <= 10) {
    if (i === 8) break
    console.log('Numero ', i);
    i++
}


// Do while
/*
i = 1;
do {
    console.log('numero ', i)
    i++
} while (i <=10)
*/

// For of
const friends = ['Marcos', 'Ana', 'jose'];

for (let i of friends) {
    console.log(i);
}