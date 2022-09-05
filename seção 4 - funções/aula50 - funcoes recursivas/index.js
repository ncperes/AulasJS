// é uma função q se chama de volta
// é preciso se preocupar com quando ela deve parar de se chamar 

function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(1);