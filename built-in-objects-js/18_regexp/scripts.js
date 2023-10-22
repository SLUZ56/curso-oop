// regex != regexp

let palavra = new RegExp(/el/)

console.log(palavra.test("Bola"))
console.log(palavra.test("Melancia"))
console.log(palavra.test("Selma"))