// indices ngtv -5       -4        -3         -2        -1
// indices       0        1         2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice escolhido, quantos quero remover, add elem1, add elem2,...);

// const removidos = nomes.splice(3, 2);
// const adicionados = nomes.splice(3, 0, 'Luiz');
console.log('Antes:', nomes)
const alterado = nomes.splice(3, 1, 'Luiz', 'Nelio', 'Carlos'); 
// explicando:
/*
    - definido o indice 3 como referencia
    - definido o numero de elementos para serem deletados do indice referencia
    - definido o elemento a ser adicionado no indice referencia
    - qualquer item adicionado depois é colocado um indice a frente do referencia e assim por diante
*/
console.log('Depois:', nomes);

// splice simulando outros métodos
// pop
const pop = nomes.splice(-1, 1);

// shift
const shift = nomes.splice(0, 1);

// push
const push = nomes.splice(nomes.length, 0, 'Nome');

// unshift
const unshift = nomes.splice(0, 0, 'Nome');