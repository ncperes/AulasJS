/*
Object.values -> parecido com o Object.keys, porem mostra os valores contidos nas chaves
Object.entries -> retorna as chaves e seus valores em arrays
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

Já vimos:
Object.keys -> retorna as chaves
Object.freeze -> congela o objeto
Object.defineProperty -> define uma propriedade
Object.defineProperties -> define várias propriedades
*/

// Associando duas variaves ao mesmo espaço na memória
// const produto = { nome: 'Caneca', preco: 1.8 };
// const outraCoisa = produto; // agora as duas variaveis apontam para o mesmo espaço na memoria
// outraCoisa.nome = 'Caneta';
// console.log(produto.nome);

// Copiando as propriedades de uma variavel para outra sem ocupar o mesmo espaço na memoria
// const produto = { nome: 'Caneca', preco: 1.8 };
// const outraCoisa = {...produto}; // agora outraCoisa é uma variavel diferente de produto
// outraCoisa.nome = 'Caneta';
// console.log(produto.nome);

// Copiando as propriedades de uma variavel para outra usando método Object.assign
// const produto = { nome: 'Caneca', preco: 1.8 };
// const outroProduto = Object.assign({}, produto, { material: 'porcelana' });
// outroProduto.nome = 'Outra coisa';
// console.log(produto, outroProduto);

// Checando a descricao das propriedades
// const produto = { nome: 'Produto', preco: 1.8 };
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

const produto = { nome: 'Produto', preco: 1.8 };