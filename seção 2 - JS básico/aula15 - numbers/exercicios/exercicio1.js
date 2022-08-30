const numero = Number(prompt("Informe um número:"));
document.getElementById('numero-titulo').innerHTML = numero;
const texto = document.getElementById('texto');

texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;