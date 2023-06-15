// Arguments que sustenta todos os argumento enviados
// function funcao(a, b, c) {
//   let total = 0;
//   for (argumento of arguments) {
//    total += argumento;
//   }

//   console.log(total, a, b, c);
// }

// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* function funcao(a, b, c, d, e, f) {

   console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3); */

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// function funcao(a, b = 2, c = 4) {

//    console.log(a + b + c);
// }
// funcao(2, undefined, 20); // Para assumir valor de B coloque undefined

 // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*  function funcao({nome, sobrenome, idade }) {

    console.log(nome, sobrenome, idade);
 }

 funcao({ nome: 'Yuri', sobrenome: 'YuriS', idade: 20 }); */

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const conta = function conta(operador, acumulador, ...numeros) { // '...' rest operator,
    for( let numero of numeros) {                  //   o rest operator sempre te mque ser o ultimo parametro
      if (operador === '+')  acumulador += numero;
      if (operador === '-')  acumulador -= numero;      //  Nao tem 'arguments' em arroz function =>
      if (operador === '/')  acumulador /= numero;
      if (operador === '*')  acumulador *= numero;
    }

    console.log(acumulador);
};

conta('+', 1, 20, 30, 40, 50);




