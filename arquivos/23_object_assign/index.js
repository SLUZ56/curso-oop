// Object assign usado para copiar propriedades de um objeto
// para outro

let pessoa = {
    nome: 'Selma',
    getNome() {
        console.log("Esse é o nome do objeto:  " +this.nome)
    }
}

let pessoa2 = {
   nome: 'Maria',
   age: 12
}

Object.assign(pessoa2, pessoa)

console.log(pessoa2)

pessoa2.getNome()

pessoa2.nome = 'Maria'

console.log(pessoa)
console.log(pessoa2)