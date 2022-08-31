// laço onde não se sabe o tanto de repetições
// o laço segue até uma determinada condição for false

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

// checa a condição antes de executar
while (rand != 10) {
    rand = random(min, max);
    console.log(rand);
}

// checa a condição depois q executa
do {
    rand = random(min, max);
    console.log(rand);
} while(rand != 10);