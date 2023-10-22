let teste = {
    a:1
}

let teste2 = {
    a:1
}

console.log(Object.is(teste, teste2)) // ===  =>false
console.log(Object.is(NaN, NaN))  // aqui dá true
console.log(Object.is(NaN === NaN))  // aqui dá false
console.log(Object.is(+0, -0))  // aqui dá false
console.log(+0 === -0)  // aqui dá true

let teste3 = teste

console.log(Object.is(teste3, teste)) // ===  -> true
