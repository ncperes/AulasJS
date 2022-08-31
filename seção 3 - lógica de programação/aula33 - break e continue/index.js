const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in numeros) {
    let numero = numeros[i];
    
    // O "continue" pula a condição determinada pelo programador
    if (numero === 2) {
        console.log('Pulei o numero 2')
        continue;
    }

    // "break" quebra o laço quando a condição é encontrada
    if (numero === 7) {
        console.log('Achei o numero 7, to saindo...');
        break;
    }

    console.log(numero);
}