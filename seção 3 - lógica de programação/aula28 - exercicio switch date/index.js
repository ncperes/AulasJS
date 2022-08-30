const data = new Date();
const diaSemana = getDiaDaSemana(data);
const dia = getDia(data);
const mes = getMes(data);
const ano = getAno(data);
const hora = getHoras(data);
const min = getMinutos(data);

const h1 = document.querySelector('.container h1');
h1.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano}<br>${hora}:${min}`;


function getDiaDaSemana(data) {
    let diaSemana = data.getDay();
    let diaSemanaTxt = ['Domingo', 'Segunda-feira', 'Terça-feira',
     'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    switch (diaSemana) {
        case 0:
            return diaSemanaTxt[0];
        case 1:
            return diaSemanaTxt[1];
        case 2:
            return diaSemanaTxt[2];
        case 3:
            return diaSemanaTxt[3];
        case 4:
            return diaSemanaTxt[4];
        case 5:
            return diaSemanaTxt[5];
        case 6:
            return diaSemanaTxt[6];
    }
}

function getDia(data) {
    const dia = data.getDate();
    dia >= 10 ? dia : `0${dia}`;
    return dia;
}

function getMes(data) {
    let mes = data.getMonth();
    let mesTxt = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    switch (mes) {
        case 0:
            return mesTxt[0];
        case 1:
            return mesTxt[1];
        case 2:
            return mesTxt[2];
        case 3:
            return mesTxt[3];
        case 4:
            return mesTxt[4];
        case 5:
            return mesTxt[5];
        case 6:
            return mesTxt[6];
        case 7:
            return mesTxt[7];
        case 8:
            return mesTxt[8];
        case 9:
            return mesTxt[9];
        case 10:
            return mesTxt[10];
        case 11:
            return mesTxt[11];
    }
}

function getAno(data) {
    const ano = data.getFullYear();
    return ano;
}

function getHoras(data) {
    const horas = data.getHours();
    return horas;
}

function getMinutos(data) {
    const min = data.getMinutes();
    return min;
}