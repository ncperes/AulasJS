//const frutas = ['Pera', 'Maçã', 'Uva'];

// tradicional
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }


// Lê os índices ou chaves do objeto
// for (let i in frutas) {
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'Nélio',
    sobrenome: 'Peres',
    idade: 27
};

for (let dados in pessoa) {
    console.log(pessoa[dados]);
}