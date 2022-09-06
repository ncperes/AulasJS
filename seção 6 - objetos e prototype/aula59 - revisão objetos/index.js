/*
    const pessoa = {
        nome: 'Luiz',
        sobrenome:'Otávio'
    };

    const pessoa1 = new Object();
    pessoa1.nome = 'Nélio';
    pessoa1.sobrenome = 'Carlos';

    // notação de ponto é a mais usada por ser intuitiva e simples
    console.log(pessoa.nome, pessoa.sobrenome);

    // forma interenssante de notação dependendo da situação
    const chave = 'nome';
    console.log(pessoa1[chave], pessoa1['sobrenome']);

    console.log(pessoa, pessoa1);
*/ 

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}