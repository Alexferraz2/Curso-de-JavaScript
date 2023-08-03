let numero = 0;

while(numero <= 10) {
    console.log(`O número da vez é ${numero}`)
    numero++
}

//O código abaixo fará a mesma coisa do código acima

for(let numero=0; numero<= 10; numero++) {
    console.log(`O número da vez é ${numero}`)
}


let fruits = ['Maçã', 'Pera', 'Abacaxi']

for(let fruit of fruits) {
    console.log(`Eu gosto de ${fruit}`)
}

let number = 1;

while(number <= 100) {
    console.log(number)
    number++;
}