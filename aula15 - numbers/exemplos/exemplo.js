let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
// Dessa forma ele nao volta 1, mas 0.99999999
// Isso é por conta do padrão q o JavaScript segue

console.log(num1);



//Para corrigir

let num3 = 0.7;
let num4 = 0.1;

num3 += num4;
num3 += num4;
num3 += num4;

num3 = Number(num3.toFixed(2)); // ou --> num3 = toFloat(num3.toFixed(2)); <--

console.log(num3);