function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

//-------------------------------------------------

function subtracao(x = 1, y = 1) {
    const resultado = x - y;
    return resultado;
}

console.log(subtracao()); // Posso trocar os parametros


//--------------------------------------------------

// const raiz = function (n) {
//     return Math.sqrt(n);
// };

// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

//ARROW FUNCTION
const potencia = (n, p) => {
    return Math.pow(n, p);
} 

// Se a função possui apenas uma linha e um parâmetro, ela pode ser
// escrita assim:

const raiz = n => Math.sqrt(n);
