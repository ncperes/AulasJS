let elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');
container.appendChild(div);

for (let i = 0; i < elementos.length; i++) {
    let novaTag = document.createElement(elementos[i].tag)
    novaTag.innerText = elementos[i].texto;
    div.appendChild(novaTag);
}
