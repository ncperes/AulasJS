// Observações
/*
    Os métodos são buscados primeiramente em suas classes originais, caso
    nao sejam encontrados eles são procurados nas classes acima na hierarquia.
*/


class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado.');
            return;
        }
        console.log('Ligado');
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado.');
            return;
        }
        console.log('Desligado');
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }

    ligar() {
        console.log('Eu ligo por aqui!')
    }
}

// Procurar saber se isso é correto
class iPhone extends Smartphone {
    constructor(nome, cor, modelo) {
        super(nome, cor);
        this.modelo = modelo;
    }
    // A classe iPhone procura o método ligar() primeiramente em seu corpo
    // Como nao foi encontrado, ele procura na sua classe pai 'Smartphone'
    // Caso não existisse na sua classe pai, ela procuraria na classe pai de 'Smartphone', 'Dispositivos Eletrônicos'
}

const s1 = new iPhone('iPhone', 'Preto', 'iPhone 11');
s1.ligar();
console.log(s1);

