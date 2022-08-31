const section = document.querySelector('.container');
// declarando tags
const h1 = document.createElement('h1');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const iniciar = document.createElement('button');
const pausar = document.createElement('button');
const zerar = document.createElement('button');

// declarando styles


// declarando textos
h1.innerText = 'Meu timer';
p1.innerText = '00:00:00';
iniciar.innerText = 'Iniciar';
pausar.innerText = 'Pausar';
zerar.innerText = 'Zerar';

// declarando classes
p1.className = 'relogio';

// declarando filhos
h1.appendChild(p1);
h1.appendChild(p2);
p2.appendChild(iniciar);
p2.appendChild(pausar);
p2.appendChild(zerar);
section.appendChild(h1);