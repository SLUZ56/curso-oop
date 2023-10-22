// Crie um objeto Ninja, por constructor function;
// Com a propriedade de nome do ninja e o método atirarShuriken.

function Ninja(nome, qtd) {
   this.nome = nome;
   this.estoqueShuriken = qtd;
   this.atirarShuriken = function() {
       if(this.estoqueShuriken > 0) {
         console.log("Atirou a shuriken");
          this.estoqueShuriken -= 1;
       } else {
        console.log("Naruto não possui mais shurikens para atirar!")
       }
     }
    
}

let naruto = new Ninja('Naruto', 3)

console.log(naruto);

naruto.atirarShuriken();

console.log(naruto);

naruto.atirarShuriken();
naruto.atirarShuriken();
naruto.atirarShuriken();

console.log(naruto);




