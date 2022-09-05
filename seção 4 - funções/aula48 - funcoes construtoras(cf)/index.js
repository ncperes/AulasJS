// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa(new)

function Pessoa(nome, sobrenome) {
    // atributos ou métodos privados
    const ID = 1;
    const metodoInterno = () => {
        console.log('Sou privado');
    };

    // atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Maria', 'Oliveira');
const p2 = new Pessoa('Nélio', 'Carlos');

console.log(p1);
console.log(p2);
p1.metodo();