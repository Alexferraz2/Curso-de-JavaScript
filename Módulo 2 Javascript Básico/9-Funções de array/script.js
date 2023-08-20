let fruit = ['Maçã', 'Uva', 'Manga', 'Pinha']

console.log('O método length mostra a quantidade de elementos dentro do array')
console.log(fruit.length)

console.log("O método push adcionará um elemento na última posição no array. Ex: fruit.push('Cajá')")
fruit.push('Cajá')
console.log(fruit)

console.log("O método unshift adcionará um elemento na primeira posição no array. Ex: fruit.unshift('Siriguela')")
fruit.unshift('Siriguela')
console.log(fruit)

console.log("O método shift removerá o elemento da primeira posição no array. Ex: fruit.shift()")
fruit.shift()
console.log(fruit)

console.log("O método pop removerá o elemento da última posição no array. Ex: fruit.pop()")
fruit.pop()
console.log(fruit)

console.log("O método join juntará todo array e retornará em uma string, e no parâmetro podemos colocar o separador")
console.log(fruit.join(' => '))


console.log("Alterando o último elemento do array, pode ser dessa maneira fruits[fruits.length - 1] = 'Pêra'") 
fruit[fruit.length - 1]  = 'Pêra'
console.log(fruit)

console.log("Ou podemos fazer usando o método pop para eliminar o último elemento e depois com o push adcionar o último")

fruit.pop()
fruit.push('Caju')

console.log(fruit)

console.log("Ordenando  o array por ordem alfabética com o método sort()")
fruit.sort();
console.log(fruit)

console.log("Ordenando  o array por ordem reversa com o método reverse()")
fruit.reverse();
console.log(fruit)

console.log("Ordenando  o array por ordem alfabética reversa com a combinação do do método sort() e com o reverse()")
fruit.sort()
fruit.reverse();
console.log(fruit)


let cars = [
    {brand: 'Fiat', year: 2018},
    {brand: 'Ford', year: 2020},
    {brand: 'Chevorlet', year: 2022}
]

console.log("Ordenando por ordem de ano do menor para o maior")
cars.sort((a, b) => {
    if(a.year > b.year) {
        return 1;
    }else if(a.year < b.year) {
        return -1;
    }else {
        return 0;
    }
});

console.log(cars)

console.log("Ordenando por ordem de ano do menor para o maior")
cars.sort((a, b) => {
    return a.year - b.year;
});

console.log(cars)

console.log("Ordenando por ordem de ano do menor para o maior")
cars.sort((a, b) => a.year - b.year);

console.log(cars)