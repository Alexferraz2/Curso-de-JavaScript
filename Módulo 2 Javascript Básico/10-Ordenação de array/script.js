let fruit = ['Maçã', 'Uva', 'Manga', 'Pinha']


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