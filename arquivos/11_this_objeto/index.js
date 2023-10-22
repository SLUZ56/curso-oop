let ninja = {
    classe: 'profissional',
    arma: 'shuriken',
    atirarArma: function() {
        console.log("Atirou a " + this.arma)
    },
    atirarDuasVezes: function() {
        for(let i = 2; i > 0; i--) {
            this.atirarArma()
        }
    }
}
let ninja2 = {
    classe: 'profissional',
    arma: 'kunai',
    atirarArma: function() {
        console.log("Atirou a " + this.arma)
    }
}

ninja.atirarArma()
ninja2.atirarArma()

ninja.atirarDuasVezes()

// get = traz o nome do objeto
// set  = altera o nome do objeto