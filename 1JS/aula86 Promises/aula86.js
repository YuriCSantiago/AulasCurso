function rand(min, max) {
    min *= 1000; // mili segundos
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min); 
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log(msg);
            resolve(msg);
        }, tempo);
    });
}

// sempre que chamar resolve then vai ser chamado -- then sera chamado quando revolvermos a promise
esperaAi('Frase 1', rand(1, 3)) // rand entre 1 a 3 segundos
.then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 2', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 3', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
// sempre que chamar reject, catch vai ser chamado que vai capturar o erro
.catch();
