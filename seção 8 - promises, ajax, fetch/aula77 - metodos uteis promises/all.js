// Promise.all() resolve todas e retorna um array
// Se uma der erro ele rejeita todas

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// cria uma Promise usando seu proprio construtor
// BOA PRATICA: use resolve e reject como parametros do Promise()
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('Cai no erro.');
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - passei na promise');
        }, tempo);
    });
}

// Promise.all  Promise.race  Promise.resolve  Promise.reject
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    //esperaAi(1000, 1000),
    'Outro valor'
];

Promise.all(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });