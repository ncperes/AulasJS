// Produto -> desconto, aumento
// Camisetas = cor, canecas = material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco);
    this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

// const camiseta = new Camiseta('Regata', 50, 'Preta');
// camiseta.desconto(10);
// console.log(camiseta);

const caneca = new Caneca('Caneca', 30, 'Porcelana');
caneca.aumento(5);
console.log(caneca);
