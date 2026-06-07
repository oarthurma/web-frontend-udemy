// Pilar 1 - Abstração
/*
Modelo, Entidade, Identidade,
Características e Açẽos
*/
class Carro {
  constructor() {
    this.marca = "Volkswagen",
      modelo = "Gol",
      this.cor = "prata",
      this.placa = "EMJ-2564"
  }
}

const carro = new Carro()
carro.modelo = "Golf"
console.log(carro.modelo)

const carro2 = new Carro()

// Aula 169. Pilares da Orientação a Objetos - Abstração