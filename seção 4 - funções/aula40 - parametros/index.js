// argumentos que sustentam todos os argumentos enviados
// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total, a, b, c);
// }
// funcao(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

// function funcao(a, b = 2) {
//     console.log(a + b);
// }
// funcao(2);

// function soma(a, b = 2, c) {
//     console.log(a + b + c);
// }
// soma(2, undefined, 20);

// function funcao({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade);
// }
// funcao({ nome: 'Luiz', sobrenome: 'Otávio', idade: 20 });

const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};

conta('+', 0, 20, 30, 40, 50);

// rest operator
function restOperator(...args) {
    console.log(args);
}
restOperator(1, 2, 3, 4, 5, 6, 7,8 , 9, 10);