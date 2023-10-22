let  carro = {
    tipo: "SUV"
}

carro.portas = 4

console.log(carro.portas)
console.log(carro)

if(carro.tipo == 'SUV') {
    carro.tetoSolar = true
}

console.log(carro)

carro.acelerar = function() {
    console.log("Urummmmmmm")
}

carro.acelerar()

// get = traz o nome do objeto
// set  = altera o nome do objeto