export default class Random {
    randNumero() {
        return String(Math.floor(Math.random() * 10));
    }

    randLetra() {
        const abcdario = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';
        const abcdarioArray = Array.from(abcdario);
        const letra = Number(Math.floor(Math.random() * abcdarioArray.length));
        return abcdarioArray[letra];
    }

    randSimbolo() {
        const simbolos = '!@#$%&*()-_=+{}[]<>,.:;?';
        const simbolosArray = Array.from(simbolos);
        const simbolo = Number(Math.floor(Math.random() * simbolosArray.length));
        return simbolosArray[simbolo];
    }
}