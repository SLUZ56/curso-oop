function Ninja(nome, qtd) {
   this.nome = nome;
   this.estoqueShuriken = qtd;
   this.atirarShuriken = function(inimigo) {
       if(this.estoqueShuriken > 0) {
         console.log("Atirou a shuriken");
          this.estoqueShuriken -= 1;
          inimigo.vivo = false;
       } else {
        console.log("Naruto não possui mais shurikens para atirar!")
       }
     }
    
    }

function Inimigo(nome) {
  this.nome = nome;
  this.vivo = true;
}

let naruto = new Ninja('Naruto', 3)

let orochimaru = new Inimigo("Orochimaru")

console.log(naruto)
console.log(orochimaru)

naruto.atirarShuriken(orochimaru)

console.log(orochimaru)










