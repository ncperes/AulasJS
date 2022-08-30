// Não podemos criar variáveis com palavras reservadas
/* let if; */ // Errado
/* let nome; */ // Correto

// Variáveis precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
/* var 1nome; */ // Errado
/* var nome1; */ // Correto

// Não podem conter espaços ou traços
/* var nome Cliente; */ // Errado
/* var nomeCliente; */ // Correto

// Utilizamos camelCase
// Case-sensitive
var nomecliente = 'Luiz';
var nomeCliente = 'Otávio';
console.log(nomecliente, nomeCliente); // Funciona

// Não podemos redeclarar variáveis com let
// NÃO UTILIZE VAR, UTILIZE LET