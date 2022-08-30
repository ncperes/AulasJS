/*
    Primitivos (imutáveis) - string, number, boolean, 
    undefined, null (bigint, symbol)

    Referência (mutável) - array, object, function
*/

const a = [1, 2, 3];
let b = a;
a.push(4);
console.log(a, b);

b = [...a];
a.pop();
console.log(a, b); 