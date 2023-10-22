//Função do ES6, que permite criar objetos mais rapidamente.
// Utilizando nome de variáveis para nomes de propriedades.

let rodas = 4
let portas = 4
let aro = 20
let tetoSolar = true

let carro = {
    rodas,
    portas,
    aro,
    tetoSolar,
    bancoDeCouro: true,
    ligar() {
        console.log("O carro ligou")
    },
    desligar: function() {
        console.log("O carro desligou")
    }
}

console.log(carro)
console.log(carro.rodas)

let arma = 'sheriken'


let naruto = {
    arma,
    falar() {
        console.log("Iahhh")
    }
}

console.log(naruto)
console.log(naruto.arma)

naruto.falar()
carro.ligar()
carro.desligar()