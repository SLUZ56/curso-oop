function criarArvore(especie, temFruto) {
    return{
        especie: especie,
        temFruto: temFruto
    }
}

let laranjeira = criarArvore('laranjeira', true)

console.log(laranjeira)
console.log(laranjeira.constructor)

function Heroi(nome, classe) {
    this.nome = nome,
    this.classe = classe

}

let jaspion = new Heroi('Jaspion', 'robô')


let obj = {
    teste: 'teste'
}

console.log(laranjeira instanceof criarArvore)
console.log(laranjeira instanceof Object)
console.log(jaspion instanceof Heroi)
console.log(obj instanceof Object)

let arr = []

console.log(arr instanceof Array)
