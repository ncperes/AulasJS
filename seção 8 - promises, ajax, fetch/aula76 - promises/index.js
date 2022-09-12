// function rand(min, max) {
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, tempo, cb) {
//     setTimeout(() => {
//         console.log(msg);
//         if(cb) cb();
//     }, tempo);
// }

// // GAMBIARRA XXXXX
// esperaAi('Frase 1', rand(1, 3), function() {
//     esperaAi('Frase 2', rand(1, 3), function() {
//         esperaAi('Frase 3', rand(1, 3), function() {
//             esperaAi('Frase 4', rand(1, 3));
//         });
//     });
// });



function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// cria uma Promise usando seu proprio construtor
// BOA PRATICA: use resolve e reject como parametros do Promise()
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error());
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// resolve = callback
// reject = erro
// a função do resolve é o .then() e a função do reject é o .catch()
esperaAi('Conexão com o DB', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(2222, rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
.then(() => {
    console.log('Exibe dados na tela');
})
.catch(e => {
    console.log('ERRO:', e);
});

console.log('Isso é exibido antes de qualquer promisse.')