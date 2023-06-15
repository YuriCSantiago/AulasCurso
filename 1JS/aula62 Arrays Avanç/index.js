//                 0         1         2
/* const nomes = ['Eduardo', 'Maria', 'Joanna'];
// const nomes = new Array('Eduardo', 'Maria', 'Joanna');
nomes[2] = 'João';
delete nomes[2];
console.log(nomes); */

//                     0        1        2         3 
/* const nomes = ['Eduardo', 'Maria', 'Joanna', 'Yuri'];
const removido = nomes.pop(); .pop remove do final
console.log(nomes, removido); */

//                 0          1        2        3  
/* const nomes = ['Eduardo', 'Maria', 'Joanna', 'Yuri'];
const removido = nomes.shift(); // .shift remove do começo
console.log(nomes, removido); */

//                 0          1        2        3  
/* const nomes = ['Eduardo', 'Maria', 'Joanna', 'Yuri'];
nomes.push('João');  // .push adiociona um item ao array -> Adiciona item no final
nomes.push('Walace');
console.log(nomes); */

/* const nomes = ['Eduardo', 'Maria', 'Joanna', 'Yuri'];
nomes.unshift('João');  // .unShift adiciona item no inicio
nomes.unshift('Walace');
console.log(nomes); */

//                 0          1        2        3  
/* const nomes = ['Eduardo', 'Maria', 'Joanna', 'Yuri', 'Rosana'];
const novo = nomes.slice(1, -1) // .slice Corta o array
console.log(novo); */


// String para Array
/* const nome = 'Luiz Otavio Miranda';
const nomes = nome.split(' '); // nome.split(' ') Separa a string em um array
console.log(nomes); */

// Array para string
const nomes = ['Luiz', 'Otavio', 'Miranda'];
const nome = nomes.join(' ');
console.log(nome);

