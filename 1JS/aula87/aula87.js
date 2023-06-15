function rand(min, max) {
    min *= 1000; // mili segundos
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min); 
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if(typeof msg !== 'string') {
        reject('CAI NO ERRO');
        return;
        }
            //console.log(msg);
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// Promise.all Promise.race Promise.resolve promise.reject
const promises = [
   // 'Primeiro valor', valor ja resolvido race entrega primeiro
    esperaAi('Promise 1', 3000), // esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', 500),  // esperaAi('Promise 2', rand(1, 5)), .race vai resolver promise aleatorio
    esperaAi('Promise 3', 1000),  // esperaAi('Promise 3', rand(1, 5)),
  //  'Outro valor' valor ja resolvido race entrega primeiro
];

// Resolva todos essas promises
/*
Promise.all(promises)   .all se uma promise der errado ele rejeita todas
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro);
})
*/

// .race seria uma corrida, vai resolver promise com menor tempo em Segundos
Promise.race(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro);
})