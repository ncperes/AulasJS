function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoDoInterval() {
    console.log(mostraHora());
}


// inicia o timer com 1000ms
const timer = setInterval(function() { 
    console.log(mostraHora());
}, 1000);

// seta para o timer parar depois de 5000ms
setTimeout(function() {
    clearInterval(timer);
}, 5000);

// seta para q depois de 2000ms uma mensagem apareça
setTimeout(function() {
    console.log('Olá mundo');
}, 2000);