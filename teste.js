class Veiculo {
    constructor(modelo,ano) {
        this.modelo = modelo;
        this.ano = ano;
    }

    calcularConsumo() {
    }
}

class Carro extends Veiculo {
    constructor(modelo,ano, eficiencia) {
        super(modelo,ano);
        this.eficiencia = eficiencia
    }

    calcularConsumo(quilometragem) {
        const consumo = quilometragem / this.eficiencia
        return `O carro ${this.modelo} consome ${consumo.toFixed(2)} litros para ${quilometragem} km `;
    }
}

class Moto extends Veiculo {
    constructor(modelo, ano, eficiencia) {
        super(modelo, ano)
        this.eficiencia = eficiencia
    }

    calcularConsumo(quilometragem) {
        const consumo = quilometragem / this.eficiencia
        return `A moto ${this.modelo} consome ${consumo.toFixed(2)} litros para ${quilometragem} km`
    }
}