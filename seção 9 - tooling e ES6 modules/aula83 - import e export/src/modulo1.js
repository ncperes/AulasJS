// Vamos usar esse arqv para exportar

export const nome = 'Luiz';
export const sobrenome = 'Miranda';
export const idade = 50;

export function soma(x, y) {
    return x + y;
}

// export { nome, sobrenome, idade, soma as conta }; //Exporto variaveis e funções de uma vez

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export default (x, y) => x * y;