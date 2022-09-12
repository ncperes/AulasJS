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

    validacao () {
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        if(!this.validador()) return false;
        return true;
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

// let cpf = new ValidarCpf();
// cpf.cpf = '031.631.061-10';
// cpf.mensagemValidacao();
