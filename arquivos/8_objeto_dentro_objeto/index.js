let pessoa = {
    nome: "Selma",
    idade: 57,
    falar: function() {
        console.log("Oi, meu nome é Selma")
    }, 
    aniversario() {
        this.idade +=1
    }, 
    dizerIdade() {
        console.log("A minha idade é" + " " + this.idade)
    },
    podeDirigir: function() {
        if(this.idade >= 18){
            console.log('Pode dirigir')
        } else {
            console.log('Ainda não pode dirigir')
        }
    },
    caracteristicas: {
        cnh: true,
        carteira: ['dinheiro', 'documentos', 'moedas']
    }
}

console.log(pessoa.caracteristicas)
console.log(pessoa.caracteristicas.carteira[2])



// get = traz o nome do objeto
// set  = altera o nome do objeto