class ValidarCpf {
    constructor() {
        this.cpfLimpo;
    }

    get cpf() {
        return this.cpfLimpo;
    }

    set cpf(valor) {
        this.cpfLimpo = valor.replace(/\D+/g, '');
    }

    mensagemValidacao () {
        if(typeof this.cpfLimpo === 'undefined') return console.log('CPF indefinido');
        if(this.cpfLimpo.length !== 11) return console.log('CPF inválido, tamanho incorreto');
        if(this.isSequencia()) return console.log('CPF inválido, é uma sequência');
        if(!this.validador()) return console.log('CPF incorreto');
        return console.log('CPF válido');
    }

    validador() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criarDigitos(cpfParcial);
        const digito2 = this.criarDigitos(cpfParcial + digito1);
        const validador = cpfParcial + digito1 + digito2;
        return validador === this.cpfLimpo;
    }

    criarDigitos(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let contador = cpfArray.length + 1;
        const somatorio = cpfArray.reduce(function(ac, val) {
            ac += (contador * Number(val));
            contador--;
            return ac;
        }, 0);
        const digito = 11 - (somatorio % 11);
        return digito > 9 ? '0' : String(digito);
    }

    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
}

let cpf = new ValidarCpf();
cpf.cpf = '031.631.061-10';
cpf.mensagemValidacao();
