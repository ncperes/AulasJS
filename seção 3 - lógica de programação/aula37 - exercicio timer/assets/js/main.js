function relogio() {    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = createHour(segundos);
        }, 1000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target;

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            relogio.style.color = 'black';
        }
        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.style.color = 'red';
        }
        if (el.classList.contains('iniciar')) {
            clearInterval(timer);
            iniciaRelogio();
            relogio.style.color = 'black';
        }
        console.log(el);
    });


    function createHour(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
}

relogio();