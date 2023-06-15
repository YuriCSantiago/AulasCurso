// const price = 30; // Variavel const nao pode ser trocada
// price = 20;

/*
    primitivo             |       Referencia
  string                  |     Object
  Numero                  |     Array
  Boolean                 |     Functions
  undefined               |
  null                    |
*/

/* 
let itemName = 'Pen';
let itemPrice = 3;
let itemAvailable = true // boolean true ou false
let itemColor = 'red';   // undefined

let pen = {
    itemName: 'Pen',
    itemPrice: 3,                      // Objetos
    itemAvailable: true,
    itemColor: 'Red'
}

pen.itemColor = 'blue';
console.log(pen.itemName);
 */


/* 
//                0         1         2  
let friends = ['Marcos', 'Silvia', 'Elisa'];
friends[1] = 'Junior';
console.log(friends);
*/

//                 Parametro
/* function saleStatus(status, total) {
  console.log('Transaction ' + status + '! Total amount: $' + total);
}
//         Argumento
saleStatus('Approved', 30);
*/

function percentage10(price) {
  return price - (price * 50 / 100); // 50% de 20
}
// let total = percentage10(20);
console.log(percentage10(20));