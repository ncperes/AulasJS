import Random from "./Random";

export default class GerarSenha {
    novaSenha() {
        const btnGerar = document.querySelector('.btn-gerar');
        btnGerar.addEventListener('click', (e) => {
            const el = e.target;
            if(el === btnGerar){
                const tamanho = this.qtdeChar();
                let i = 0;
                let senha = new Array();
                while(i <= tamanho){
                    senha.push(this.randMetodo());
                    i++;
                }
                const div = document.querySelector('.senha-gerada');
                div.innerHTML = senha.join();
            }
        });
    }   
    
    qtdeChar() {
        const qtdeChar = document.querySelector('.qtde-char');
        return qtdeChar.value;
    }

    addNumbers() {
        return Random.randNumero();
    }  

    addUpper() {
        return Random.randLetra();
    }

    addLower() {
        return Random.randLetra().toLowerCase();
    }

    addSymbol() {        
        return Random.randSimbolo();
    }

    randMetodo() {   
        const metodo = new Array();
        const checkNumbers = document.querySelector('.check-numbers');
        checkNumbers.addEventListener('change', () => {
            if(checkNumbers.checked) metodo.push(this.addNumbers());
        });

        const checkUpper = document.querySelector('.check-upper');
        checkUpper.addEventListener('change', () => {
            if(checkUpper.checked) metodo.push(this.addUpper());
        });

        const checkLower = document.querySelector('.check-lower');
        checkLower.addEventListener('change', () => {
            if(checkLower.checked) metodo.push(this.addLower());
        });

        const checkSymbols = document.querySelector('.check-symbols');
        checkSymbols.addEventListener('change', () => {
            if(checkSymbols.checked) metodo.push(this.addSymbol());
        });

        const rand = Number(Math.floor(Math.random() * metodo.length));
        return metodo[rand];
    }
}
