let  carro = {
    tipo: "SUV",
    ligar: function() {
        console.log('ligou')

    }
}

delete carro.tipo
delete carro.ligar

console.log(carro.tipo)
// carro.ligar()

console.log(carro)



// get = traz o nome do objeto
// set  = altera o nome do objeto