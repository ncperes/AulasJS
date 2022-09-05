// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map(valor => valor * 2);

//console.log(numerosDobrados);

// Para cade elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
];

// const nomes = pessoas.map(obj => obj.nome);
// const idades = pessoas.map(obj => {
//     delete obj.nome;
//     return obj;
// });
//const addId = pessoas.map((obj, index) => obj.id = index + 1); // aqui estou alterando o obj original

const addIdSemAlterarPessoas = pessoas.map(function(obj, index) {
    const newObj = {...obj};
    newObj.id = index + 1;
    return newObj;
})

console.log(addIdSemAlterarPessoas);
console.log(pessoas);
