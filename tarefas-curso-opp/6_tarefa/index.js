// helpers
function compareObjs(obj1, obj2) {
  // instanceof - objeto, Classe
  if(obj1 instanceof obj2) {
    console.log("O objeto " + obj1.nome + " é uma isntância de  " + obj2.name)
  } else {
    console.log("O objeto " + obj1.nome + " não é uma isntância de " + obj2.name) 
  }
}

// objs
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

compareObjs(naruto, Ninja)
compareObjs(orochimaru, Ninja)
compareObjs(naruto, Inimigo)











