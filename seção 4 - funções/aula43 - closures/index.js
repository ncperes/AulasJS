// Escopo global

function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Nélio'); // closure
console.log(funcao());


// Closure:
// É a facilidade que a função tem de acessar seu escopo léxico