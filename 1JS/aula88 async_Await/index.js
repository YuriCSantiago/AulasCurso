function rand(min = 0, max = 3) {
    min *= 1000; // mili segundos
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }
            //console.log(msg);
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}
/*
esperaAi('Fase 1', rand(0, 3))
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', rand());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', rand());
    })
    .then(fase => {
        console.log(fase);
        return fase;
    })
    .then(fase => {
        console.log('Terminamos na fase: ', fase);

    })
    .catch(e => console.log(e));
    */

// só da para usar await se tiver async na funtion
async function executa() {
    try { // joga tudo dentro do tray se quiser tratar algum erro
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
    
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
    
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
    
        console.log('Terminamos na fase: ', fase3);
    } catch(e) {
        console.log(e);
    }
}
executa();