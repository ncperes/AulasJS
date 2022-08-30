// Mais diferenças entre var, let e const

const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

/*
let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando

if(verdadeira) {
    let nome = 'Otávio'; // criando
    var nome2 = 'Otávio'; // redeclarando

    if(verdadeira) {
        let nome = 'Augusto'; // criando
        var nome2 = 'Augusto'; // redeclarando
    }
}
console.log(nome, nome2);
*/

function falaOi() {
    var nome = 'Nelio';
    return nome;
}

console.log(falaOi());
// falaOi();