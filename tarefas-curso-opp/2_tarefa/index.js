// Crie um objeto Pessoa, que tem uma propriedade nome;
// Crie um método que exibe o nome do objeto Pessoa.

let pessoa = {
    nome: 'Selma',
    exibirNome: function() {
        console.log("Olá, meu nome é " + this.nome)
    }
    
}

console.log(pessoa.nome);

pessoa.exibirNome()
