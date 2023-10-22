let data = new Date()

console.log(data)

console.log(new Date(data.setMonth(0)))

console.log(new Date(Date.now()))

// data em milisegundos
console.log(Date.now())

// para transformar a data em milisecungos
console.log(Date.parse(new Date(data.setMonth(0))))

// pesquisar em date javascript mdn