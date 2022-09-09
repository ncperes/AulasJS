/*
Métodos estáticos são funções dentro das Classes
Não usa a palavra reservada 'new'
Não tem acesso aos dados da classe
Então devem ser usados declarando a classe junto
Exemplo: 
    NomeDaClasse.métodoEstático();

Métodos de instância são usadas com as variáveis instanciadas
É usado 'new' para ser instanciado
Exemplo:
    var nomeDavariavel = new NomeDaClasse(parametros);
    nomeDaVariavel.métodoInstanciado();
*/

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    // Método de instância
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar.');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(controle1);