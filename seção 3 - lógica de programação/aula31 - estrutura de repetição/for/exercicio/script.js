const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

function createDiv() {
    const div = document.createElement('div')
    return div;
}

function setFrases() {
    const corpo = document.querySelector('.container');
    corpo.innerHTML = '';

    const div = createDiv();
    corpo.appendChild(div);

    for (let i = 0; i < elementos.length; i++) {
        const[i] { tag } = document.querySelector('.container div');
        
    }
}