/*
    Operadores lógicos
    && -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true;
    || -> OR -> OU -> Apenas uma expressão precisa ser verdadeira para retornar true;
    ! -> NOT -> NÃO -> Inverte uma expressão;
*/

// EXPRESSÃO AND (&&)
console.log(true && true && true); // retorna true
console.log(true && false && true); // retorna false

// EXPRESSÃO OR (||)
console.log(false || true || false); // retorna true
console.log(false || false || false); // retorna false

//EXPRESSÃO NOT (!)
console.log(!false); // retorna true
console.log(!true); // retora false
console.log(!!true); // retorna true
console.log(!!false); // retorna false
