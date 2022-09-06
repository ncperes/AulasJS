// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador += valor;
//     return acumulador;
// }, 0); // valor opcional do primeiro parametro
// console.log(total);

/*
    FAZENDO DE FORMA ERRADA (Más práticas)
    const pares = numeros.reduce(function(acumulador, valor) {
        if(valor % 2 === 0) acumulador.push(valor);
        return acumulador;
    }, []);
    console.log(pares);

    const dobro = numeros.reduce(function(acumulador, valor) {
        acumulador.push(valor * 2);
        return acumulador;
    }, []);

    console.log(dobro);
*/

/*
    FAZENDO DE FORMA CORRETA (Boas práticas)
    const pares = numeros.filter(valor => valor % 2 === 0);
    console.log(pares);

    const dobro = numeros.map(valor => valor *= 2);
    console.log(dobro);
*/

// Retorne a pessoa mais velha usando reduce
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 65},
    { nome: 'Wallace', idade: 47}
];

const maisVelha = pessoas.reduce(function(base, value) {
    if (value.idade > base.idade) return value;
    return base;
});
console.log(maisVelha);