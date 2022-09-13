 // o que vem fora da chave é o default, posso escolher qualquer nome pra ele sem usar 'alias'
 import  multiplicador, { nome as nome2, sobrenome, idade, soma, Pessoa } from './modulo1';
//import * as MeuModulo from './modulo1'; // o * significa que selecionou tudo que tenha export para ser importado
//console.log(MeuModulo);

console.log(multiplicador(2, 5));

const nome = 'Nélio';

console.log(nome, nome2, sobrenome, idade);
console.log(soma(5, 4));

const p1 = new Pessoa('Nélio', 'Carlos');
console.log(p1);