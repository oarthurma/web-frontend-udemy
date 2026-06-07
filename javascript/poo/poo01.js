// Paradigma -> exemplo ou padrão a ser seguido, não se trata de uma linguagem, mas a forma como você
//soluciona problemas usando uma linguagem de programação.

// JavaScript é multi paradigma

// Procedural
// Funções que manipulam dados
function verificarDisponibilidade(quartos, ocupados) {
  let res = quartos - ocupados
  console.log("Disponíveis: " + res)
}
/*
let quartos = 20;
let ocupados = 10

verificarDisponibilidade(quartos, ocupados);
*/

// Orientado a objetos

// Notação Literal
/*
const hotel = {
  quartos: 20,
  ocupados: 10,
  piscinas: 2,
  verificarDisponibilidade: function () {
    let res = this.quartos - this.ocupados
    console.log("Disponíveis: " + res)
  }
}

hotel.quartos = 25
hotel['quartos'] = 30
delete hotel.piscinas

console.log(hotel.piscinas)
*/

// Notação de cosntrutor (objeto em branco)
// const hotel = new Object()
// hotel.quartos = 30
// hotel.ocupados = 10
// hotel.verificarDisponibilidade = function () {
//   let res = this.quartos - this.ocupados
//   return ("Disponíveis: " + res)
// }

// console.log(hotel.quartos)
// hotel.verificarDisponibilidade()

//Criando classes (mais simples)
class Hotel {

  constructor() {
    this.quartos = 20
    this.ocupados = 10
  }

  verificarDisponibilidade() {
    let res = this.quartos - this.ocupados
    return "Disponível: " + res
  }

}

const hotel = new Hotel()
//hotel.verificarDisponibilidade()
//hotel.quartos = 10
console.log(hotel.quartos)