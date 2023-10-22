//Crie um objeto que tenha características de um caminhão 
// e coloque em propriedades distintas
// Com destructuring coloque essas propriedades 
// em variáveis separadas

let caminhao1 = {
  portas: 2,
  cor: "Preta",
  banco: "couro"
}

let { portas, cor, banco } = caminhao1

console.log( portas, cor, banco)







// let caminhao = {
//   eixos: 2,
//   rodas: 12,
//   portas: 2,
//   combustivel: 'Diesel',
//   carga: 'animais'
// }

// {var} => obj
//[var] => arr
// let { eixos, rodas, portas, combustivel, carga } = caminhao

// console.log(eixos, rodas, portas, combustivel, carga)