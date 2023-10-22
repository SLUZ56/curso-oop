// Crie um objeto Ninja, por constructor function;
// Com a propriedade de nome do ninja e o método atirarShuriken.

// function Ninja(nome, arma) {
//    this.nome = nome;
//    this.arma = arma;
//    this.atirarShuriken = function() {
//         console.log("Atirou a " + this.arma)
//      }
   
    
// }

// let ninja1 = new Ninja('naruto', 'shuriken')

// console.log(ninja1.nome);

// ninja1.atirarShuriken()


function Ninja(nome, arma) {
    this.nome = nome;
    this.arma = arma;
    this.AtirarSuriken = function() {
        console.log("Atirou a " + this.arma)
    }
}

let ninja2 = new Ninja('naruto', 'shuriken')

console.log(ninja2.nome)

ninja2.AtirarSuriken()