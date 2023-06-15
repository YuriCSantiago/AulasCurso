class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

        // Metodo de instancia
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Metodo estatico
    static trocaPilha() {

    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha(); // So consegue acessar pela classe