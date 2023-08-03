for(i=0; i<=10; i++) {
    console.log(i*1)
}
console.log("Dando loop em array")
//Dando loop em arrays

let cores = ['Preto', 'Branco', 'Azul', 'Vermelho', 'Verde']

cores.push('Lilás')

for(i=0; i<cores.length; i++) {
    console.log(cores[i])
}

console.log("Usando o in para dar loop num array")

for(let i in cores) {
    console.log(cores[i])
}

//Outra maneira de fazer um loop em array é usando of, que ele joga o ítem do array direto na variável
console.log("Outra maneira de fazer um loop em array é usando of, que ele joga o ítem do array direto na variável")
for(let cor of cores) {
    console.log(cor)
}

let colors = [
    {nome: 'preto', qt: '5'},
    {nome: 'branco', qt: '10'},
    {nome: 'azul', qt: '7'}
]

for(let cor of colors) {
    console.log(`A cor é ${cor.nome.toUpperCase()} e a quantidade é ${cor.qt}`)
}