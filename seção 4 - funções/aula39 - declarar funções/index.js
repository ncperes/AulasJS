// Declaração de função (Function hoisting)
falaOi();

function falaOi() {
    console.log('Oi');
}

// funções são First-class objects
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const arrowFunction = () => {
    console.log('Sou uma arrow function');
};
arrowFunction();

// Dentro de um objeto
const obj = {
    falar: function () {
        console.log('Estou falando');
    }
};
obj.falar();