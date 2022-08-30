// const data = new Date(2022, 6, 12, 24); // parâmetros (ano, mês, dia, hora, minutos, segundos, milésimos)
// console.log(data.toString());           // não são necessários todos, apenas ano e mês e os desejados

// const data2 = new Date('2022-07-12 12:35:30'); // outro formato
// console.log('Dia', data2.getDate());
// console.log('Mês', data2.getMonth());
// console.log('Ano', data2.getFullYear());
// console.log('Hora', data2.getHours());
// console.log('Minutos', data2.getMinutes());
// console.log('Segundos', data2.getSeconds());
// console.log('Milisegundos', data2.getMilliseconds());
// console.log('Dia da semana', data2.getDay());
// console.log(data2.toString());

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const sec = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} - ${hora}:${min}:${sec}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

