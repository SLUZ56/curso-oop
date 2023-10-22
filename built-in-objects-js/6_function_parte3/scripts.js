let a = {
    nome: "Selma",
    dizerNome() {
        console.log("O nome deste objeto é " + this.nome)
    }
}

let b = {
    nome: "João"
}

let c = {
    nome: "Carlos"
}

a.dizerNome()

a.dizerNome.call(b) // Function -> call

a.dizerNome.call(c)