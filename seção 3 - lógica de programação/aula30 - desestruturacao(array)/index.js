// let a = 'A'; //B
// let b = 'B'; //C
// let c = 'C'; //A

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);



//... rest, ... spread
// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const [um, dois] = numeros;
// console.log(um, dois);


//Primeiro Array:|      0      |      1      |      2      |
//Segundo Array: |  0   1   2  |  0   1   2  |  0   1   2  |
const numeros = [ [10, 20, 30], [40, 50, 60], [70, 80, 90]];

console.log(numeros[2][0]); // acessa o elemento 2 do primeiro array e o elemento 0 do segundo array

const [lista1, lista2, lista3] = numeros;
console.log(lista3[0]); // Outra forma, mesmo resultado