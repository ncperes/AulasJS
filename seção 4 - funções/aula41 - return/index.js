// // return
// // retorna um valor
// // termina a função

// function soma(a, b) {
//     return a + b;
// }

// function soma2(a, b) {
//     console.log(a + b)
// }
// soma(2, 5); // essa me retorna um valor q posso usar em outro lugar
// soma2(2, 5); // essa só me mostra o valor e nada além disso

// function soma3(a, b) {
//     b = soma2(2, 2)
//     console.log(a + b);
// }
// soma3();

// function criaPessoa(nome, sobrenome) {
//     return { nome, sobrenome};
// }

// const p1 = criaPessoa('Nelio', 'Carlos');
// const p2 = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// };

// console.log(typeof p1, typeof p2);

// // -------------------------------------------

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const olaMundo = falaFrase('Olá');
// console.log(olaMundo('mundo!'));

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));