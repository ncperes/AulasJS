// 

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
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache.')
    } else {
        return esperaAi('Baixei a Página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO:', e)); // se for true cai no catch