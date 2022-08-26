let num1 = 1;
let num2 = 2.5;
let num3 = 10.45687413576;

console.log(num1.toString() + num2); // concatenação por conta da conversão para string do num1
console.log(num1 + num2); // operação matemática pois são dois numbers
console.log(num3.toFixed(2)); // toFixed(<número de casas decimais arredondado>)
console.log(Number.isInteger(num1)); // retorn a um boolean e verifica se o número é inteiro

let temp = num1 * 'Olá';
console.log(Number.isNaN(temp)); // retorna um boolean se é ou não -NaN (Not a Number)