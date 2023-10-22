//Crie dois objetos que compartilhem nomes de propriedades 
// via object literals;
// Uma variável deve definir a parte que se repete nas
// propriedades dos objetos

let rodas = 4
let portas = 4
let aro = 20
let cor = "branca"
let tetoSolar = true

let t = "tipo_de_"

let carro = {
  rodas,
  portas,
  aro,
  cor,
  tetoSolar,
  bancoDeCouro: true,
  [t+"carro"]: "BMW",
  ligar() {
    console.log("O carro ligou!")
  },
  desligar: function() {
    console.log("O carro desligou!")
  }
}

let barco = {
  [t+"barco"]: "lancha"
}

let aviao = {
  [t+"aviao"]: "boeing"
}

let boneca = {
  [t+"boneca"]: "Barbie"
}

let n = "numero_de_"

let arvore = {
 [n+"frutos"]: 10
}

let carro2 = {
  [n+"portas"]: 4
}

let crianca = {
  [n+"brinquedos"]: 10
}

console.log(carro)
console.log(barco)
console.log(aviao)
console.log(boneca)
console.log(arvore)
console.log(carro2)
console.log(crianca)