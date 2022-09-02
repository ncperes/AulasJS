// IIFE -> Immediately Invoked Function Expression
//         Função de Expressão Invocada Imediatamente

// function qualquerCoisa() {
//     console.log(12341234);
// }
// qualquerCoisa();

//Posso ter qualquer coisa no escopo global
//que não vai afetar a função
(function(idade, peso, altura) {

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);
