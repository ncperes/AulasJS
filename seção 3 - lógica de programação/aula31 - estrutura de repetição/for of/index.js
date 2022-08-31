const nome = 'Nélio Carlos';

// for clássico
// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// for in --> retorna o indice
for (let i in nome) {
    console.log(i);
}

// for of --> retorna o valor no indice
for (let valor of nome) {
    console.log(valor);
}