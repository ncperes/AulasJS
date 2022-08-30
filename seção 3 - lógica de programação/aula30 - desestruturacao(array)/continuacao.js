const pessoa = {
    nome: 'Nélio',
    sobrenome: 'Peres',
    idade: 30,
    endereco: {
        rua: 'Dom Aquino',
        numero: 75
    }
};

// Atribuição via desestruturação
// const { nome: n = '', sobrenome } = pessoa;
// console.log(n, sobrenome);

// const { endereco: { rua, numero: num }, endereco } = pessoa;
// console.log(rua, num, endereco);

const { nome, ...resto } = pessoa;
console.log(resto);
