class Pessoa {   // Defino o nome da classe
    constructor(nome, sobrenome) {  // Crio seu construtor com seus parametros
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Defino métodos que são automaticamentes adicionados ao prototype da classe
    falar() {
        console.log(`${this.nome} está falando`)
    }

    comer() {
        console.log(`${this.nome} está comendo`)
    }

    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

const p1 = new Pessoa('Nélio', 'Carlos');

console.log(p1);
