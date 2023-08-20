let fruits = ['Maçã', 'Uva', 'Manga', 'Pinha']

console.log("Filtrando elementos com mais de quatro letras com o método filter()")

let bigFruits = fruits.filter((item) => item.length > 4)


console.log(bigFruits)

console.log("Verificando se todos os ítem são maior que três caracteres com o método every(), que será true se todos os elementos for maior que três caracteres")
let ok = fruits.every((item) => item.length > 3)

if(ok) {
    console.log("Todas as frutas tem mais de três caracteres")
}else{
    console.log('Nem todas as frutas tem mais de três caracteres')
}

console.log("Verificando se todos os ítem são maior que quatro caracteres com o método some(), que será true se algum dos elementos for maior que quatro caracteres")
let okSome = fruits.some((item) => item.length > 4)

if(okSome) {
    console.log("alguma das frutas tem mais de quatro caracteres")
}else{
    console.log('Nem todas as frutas tem mais de quatro caracteres')
}

console.log('Verificando se há algum item em específico com o método includes()')

if(fruits.includes("Uva")) {
    console.log('O array contém Uva')
}else{
    console.log('Não existe a palavra "Uva" no Array')
}