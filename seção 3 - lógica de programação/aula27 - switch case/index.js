const data = new Date('1987-04-25 00:00:00');
let diaSemana = data.getDay();
const diaSemanaTxt = getDayOfWeek(diaSemana);


console.log(diaSemanaTxt);

function getDayOfWeek(dayOfWeek) {
    let diaSemanaTxt;
    switch (diaSemana) {
        case 0:
            diaSemanaTxt = 'Domingo';
            return diaSemanaTxt;
        case 1:
            diaSemanaTxt = 'Segunda';
            return diaSemanaTxt;
        case 2:
            diaSemanaTxt = 'Terça';
            return diaSemanaTxt;
        case 3:
            diaSemanaTxt = 'Quarta';
            return diaSemanaTxt;
        case 4:
            diaSemanaTxt = 'Quinta';
            return diaSemanaTxt;
        case 5:
            diaSemanaTxt = 'Sexta';
            return diaSemanaTxt;
        case 6:
            diaSemanaTxt = 'Sábado';
            return diaSemanaTxt;
        default:
            diaSemanaTxt = 'Não existe'
            return diaSemanaTxt;
    }
}