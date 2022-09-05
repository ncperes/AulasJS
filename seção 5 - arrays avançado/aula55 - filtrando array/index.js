// filter, map, reduce
// filter = filtrar
// map = alterar
// reduce = reduzir

// ----------------------------------------------------------------------

// Retorne os números maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const filtrado = numeros.filter(value => value > 10)

// console.log(filtrado);

// ----------------------------------------------------------------------

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
];

const filtrarQtdeLetras = pessoas.filter(obj => obj.nome.length >= 5);
const filtrarIdade = pessoas.filter(obj => obj.idade > 50);
const filtrarUltimaLetra = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(filtrarQtdeLetras);
console.log(filtrarIdade);
console.log(filtrarUltimaLetra);