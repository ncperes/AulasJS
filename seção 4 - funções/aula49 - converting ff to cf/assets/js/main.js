function Calculadora() {
    this.display = document.querySelector('.display');

    this.cliqueBotoes = function() {
        document.addEventListener('click', e => {
            const el = e.target;

            if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-del')) this.apagaUm();
            if(el.classList.contains('btn-eq')) this.realizaConta();

            this.display.focus();
        });
    };

    this.btnParaDisplay = function(valor) {
        this.display.value += valor;
    };

    this.clearDisplay = function() {
        this.display.value = '';
    };

    this.apagaUm = function() {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = function() {
        let conta = this.display.value;

        try {
            conta = eval(conta);
            if(!conta) alert('Conta inválida.');
            this.display.value = String(conta);
        } catch(e) {
            alert('Conta inválida.');
            return;
        }    
    };

    this.pressionarEnter = function() {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) this.realizaConta();
        });
    };
}

function iniciarCalculadora() {
    const calculadora = new Calculadora();
    calculadora.cliqueBotoes();
    calculadora.pressionarEnter();
}

iniciarCalculadora();
