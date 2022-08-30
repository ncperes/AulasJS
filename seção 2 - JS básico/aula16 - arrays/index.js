
//     índices:  0       1        2
const alunos = ['Luiz', 'Maria', 'João'];
alunos[1] = 'Eduardo'; // Alterei o indice escolhido do array
alunos.push('Luiza'); // Adiciono no fim do array
alunos.push('Fábio');
alunos.unshift('Pedro'); // Adiciono no começo do array
alunos.unshift('Leonardo');
alunos.pop(); // Remove o ultimo elemento do array
alunos.shift(); // Remove o primeiro elemento do array
delete alunos[1]; // Remove o elemento no índice escolhido
console.log(alunos.slice(0, 3)); // Retorna os elementos entre os índices(x, y) escolhidos (x<=[]<y)
console.log(alunos);
