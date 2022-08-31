// Escreva uma função que recebe 2 números e retorne o maior deles

// const max = (num1, num2) => num1 > num2 ? num1 : num2; // Isso...

// const max2 = function (x, y) {  // é igual a isso.
//     return x > y ? x : y;
// }

// console.log(max(10, 2));
// console.log(max2(2, 10));

// eu fiz assim:
function comparador(num1, num2) {
    if(num1 > num2){
        return num1;
    }
    return num2;
}
console.log(comparador(3, 5));