
// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome: 'Nélio',
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        altura,
        peso,
        // Getter - quer só obter o valor
        get imc() { // imc agr passa a fingir ser um atributo
            const indice = this.peso / Math.pow(altura, 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);