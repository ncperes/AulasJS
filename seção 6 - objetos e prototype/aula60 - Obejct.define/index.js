// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // pode alterar
        configurable: true // configuravel ou deletavel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);