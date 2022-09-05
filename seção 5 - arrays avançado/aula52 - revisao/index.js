const array = [1, 2, 3];
array.push(4); // adiciona um elemento no final do array
array.pop(); // exclui o ultimo elemento do array e permite o uso desse item deletado
array.shift(); // exclui o primeiro elemento do array e permite o uso desse item deletado
array.unshift(0); // adiciona um elemento no começo do array
[...array] // espalha os elementos do array
const novo = array.slice(1, 3); // divide o array, ex: slice(índice inicial, indice final)
/* 
observações do slice:
- o indice final* não aparece na resposta entre os indices definidos
- se usar um número negativo no indice final, voce vai excluindo do ultimo indice para o primeiro 
*/

const nome = 'Nélio Carlos Diniz Peres';
const nomeArray = nome.split(' '); // Separa os elementos da string em indices, selecionando o caractere(s) de separação
const stringNome = nomeArray.join(', '); // Inverso do split, junta os elementos de um array definindo um unificador entre eles
console.log(nomeArray);
console.log(stringNome);





//-------------------------------------------------------------------

//índices         0          1        2
//const nomes = ['Eduardo', 'Maria', 'Joana'];

// String, Objetos, Funções, Números
// const nomes = new Array('Eduardo', 'Maria', 'Joana');

// nomes[2] = 'João';
// delete nomes[2]; // usado para deletar o valor mas manter o indice
// console.log(nomes);