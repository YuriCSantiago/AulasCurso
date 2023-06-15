// Function Declaration
/*
function movie() {
    console.log('The Matrix');
}
movie();

// Function Expression

const car = function() {
    console.log('Tesla');
}
car();

const truck = car
truck();
*/

// Utilizando argumentos em funções(a, b)
/*
function price(a, b) {
    let total = 0;
    for (let value of arguments)
    total += value
    return total
}
console.log(price(10, 20, 30, 40));
*/

// Config parametros default
function carLoan(loan, rate = 2.5, year = 5) {
    return (loan * rate / 100 * year) + loan
}

console.log(carLoan(20000));