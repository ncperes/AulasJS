// 705.484.450-52  070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o dígito > 9, consideramos como 0

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11  10 9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Segundo dígito)
*/

// /\D+/g  <-- representa tudo q nao é numero

// function Cpf(cpf) {
//     this.cpf = cpf;
// }


// function Cpf(cpf) {
//     this.cpf = cpf;
// }

function validarCpf(cpf) {
    let cpfLimpo = cpf.replace(/\D+/g, '');
    let cpfArray = Array.from(cpfLimpo);
    const multiplicador = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    let novoCpfArray1 = [];
    for (let i = 0; i < 9; i++) {
        let x = Number(cpfArray[i]) * multiplicador[i];
        novoCpfArray1.push(x);
    }
    const cpfArraySoma = novoCpfArray1.reduce((ac, valor) => ac += valor, 0);
    let penultimoDigito = calculoDigito(cpfArraySoma);
    penultimoDigito = penultimoDigito >= 10 ? 0 : penultimoDigito;
    novoCpfArray1.push(penultimoDigito);

    const multiplicador2 = [11, 10, 9, 8, 7, 6, 5, 4 ,3 ,2];
    let novoCpfArray2 = []
    for (let i = 0; i < 10; i++) {
        let y = cpfArray[i] * multiplicador2[i];
        novoCpfArray2.push(y);
    }
    const cpfArraySoma2 = novoCpfArray2.reduce((ac, valor) => ac += valor, 0);
    let ultimoDigito = calculoDigito(cpfArraySoma2);
    ultimoDigito = ultimoDigito >= 10 ? 0 : ultimoDigito;
    novoCpfArray2.push(ultimoDigito);

    const dig = `${cpfArray[9]}${cpfArray[10]}`;
    const verificador = `${penultimoDigito}${ultimoDigito}`;
    console.log(ultimoDigito);
    const check = dig === verificador ? true : false;

    console.log(cpfArray, novoCpfArray2);
    return mensagem(check);
}

function calculoDigito(soma) {
    return 11 - (soma % 11);
}

function mensagem(check) {
    check = true ? console.log('CPF válido') : console.log('CPF inválido');
} 

//const cpf = '070.987.720-03';
validarCpf('789.456.895-45');

// let cpf = '070.987.720-03';
// let cpfLimpo = cpf.replace(/\D+/g, '');
// let cpfArray = Array.from(cpfLimpo);
// const multiplicador = [10, 9, 8, 7, 6, 5, 4, 3, 2];
// let novoCpfArray1 = [];
// for (let i = 0; i < 9; i++) {
//     let x = Number(cpfArray[i]) * multiplicador[i];
//     novoCpfArray1.push(x);
// }
// const cpfArraySoma = novoCpfArray1.reduce((ac, valor) => ac += valor, 0);
// let penultimoDigito = 11 - (cpfArraySoma % 11);
// penultimoDigito = penultimoDigito >= 10 ? 0 : penultimoDigito;
// novoCpfArray1.push(penultimoDigito);

// const multiplicador2 = [11, 10, 9, 8, 7, 6, 5, 4 ,3 ,2];
// let novoCpfArray2 = []
// for (let i = 0; i < 10; i++) {
//     let y = cpfArray[i] * multiplicador2[i];
//     novoCpfArray2.push(y);
// }
// const cpfArraySoma2 = novoCpfArray2.reduce((ac, valor) => ac += valor, 0);
// let ultimoDigito = 11 - (cpfArraySoma2 % 11);
// ultimoDigito = ultimoDigito >= 10 ? 0 : ultimoDigito;
// novoCpfArray2.push(ultimoDigito);
// const dig = `${cpfArray[9]}${cpfArray[10]}`;
// const verificador = `${penultimoDigito}${ultimoDigito}`;
// const check = dig === verificador ? true : false;

// // console.log(novoCpfArray1);
// // console.log(penultimoDigito);
// // console.log(novoCpfArray2);
// // console.log(ultimoDigito);
// console.log(check);
