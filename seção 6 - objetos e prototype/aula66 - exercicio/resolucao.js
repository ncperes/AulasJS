function ValidarCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}


ValidarCpf.prototype.validar = function() {
    if (typeof this.cpfLimpo === 'undefined') return console.log('CPF inválido');
    if (this.cpfLimpo.length !== 11) return console.log('CPF inválido, tamanho incorreto');
    if (this.isSequencia()) return console.log('CPF inválido, é uma sequência');
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    novoCpf === this.cpfLimpo ? console.log('CPF válido') : console.log('CPF inválido');
};

ValidarCpf.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce(function(ac, val) {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};


ValidarCpf.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidarCpf('111.111.111-11');
cpf.validar();