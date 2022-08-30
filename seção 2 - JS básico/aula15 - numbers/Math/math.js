let num1 = 9.54578;

// Arredonda pra baixo
let num2 = Math.floor(num1);
console.log(num2);

// Arredonda pra cima
num2 = Math.ceil(num1);
console.log(num2);

// Arredonda pro numero inteiro mais próximo
num2 = Math.round(num1);
console.log(num2);

// Retorna o maior número
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Retorna o menor número
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Retorna um número aleatório entre 0 e 1
const aleatorio = Math.random();
console.log(aleatorio);

// Retona a potenciação de um número (número, potencia)
console.log(Math.pow(2, 3)); // Método
console.log(10 ** 2); // Forma fácil

// Retorna a raiz quadrada
console.log(Math.sqrt(81)); // Método
console.log(81 ** 0.5); // Modo fácil
console.log(16 ** (1/4)); // 16 na raíz quarta