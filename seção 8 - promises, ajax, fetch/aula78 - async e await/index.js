function rand(min = 0, max = 2) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// função que simula algo que demora (tempo de carregamento de sites, requisições, etc...)
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO!');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei no promise.');
            return;
        }, tempo);
    });
}

// esperaAi('Fase I', rand())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase II', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase III', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => console.log('Terminamos na fase', fase.replace(' - Passei no promise.', '')))
//     .catch(e => console.log(e));

async function executa() {
    try {
        const fase1 = await esperaAi('Fase I', rand());
        console.log(fase1);

        const fase2 = await esperaAi(111, rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase III', rand());
        console.log(fase3);

        console.log('Terminamos na fase', fase3.replace(' - Passei no promise.', ''));        
    } catch(e) {
        console.log(e);
    }

}
executa();

// TRÊS ESTADOS
/*
    Pendente <pending> --> foi executada mas ainda nao retornou o valor
    Preenchido <fullfield> --> foi resolvida
    Rejeitada <rejected> --> foi rejeitada
*/