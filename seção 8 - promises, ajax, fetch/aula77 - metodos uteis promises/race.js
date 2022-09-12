// O Promise.race() entrega a primeira promise resolvida

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// cria uma Promise usando seu proprio construtor
// BOA PRATICA: use resolve e reject como parametros do Promise()
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('Cai no erro.');
                return;
            }
            resolve(msg.toUpperCase() + ' - passei na promise');
        }, tempo);
    });
}

const promises = [
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 3)),
    esperaAi(1000, rand(1, 3)),
];

Promise.race(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });