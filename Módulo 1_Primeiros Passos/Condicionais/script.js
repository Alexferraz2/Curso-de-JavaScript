//Condicional if e else
/*
let idade = 41;

if(idade > 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}


*/

//*******************************************************************************************************
// Condicional == e ===
// o == igual ele iguala uma string que foi escrita com um número, com um number, por exemplo "41" == 41, já o ===, só irá igual se forem iguais na escrita e no tipo.

/*let idade = "41";

if(idade == 41) {
    console.log("Você tem 41 anos")
} 

let age = "41"

if(age === 41) {
    console.log("São iguais na escrita e no tipo de dados") 
} else {
    console.log("Podem serem iguais na escrita, mas não no tipo de dados")
} 
*/

//*******************************************************************************************************

// Multi-condicionais (&& e ||)

/*
let idade = 25;

if(idade >18 && idade <50) {
    console.log("Você é um adulto")
}

if(idade > 18 || idade < 60) {
    console.log("Você é uma adulto e não é um idoso")
}

*/
//*******************************************************************************************************

// Condicional Dupla (if else)

/*
let idade = 16;

if(idade < 16) {
    console.log("Você não pode votar")
} else if (idade >= 16) {
    console.log("Você pode votar")
} else if (idade >= 65) {
    console.log("Seu voto é opcional")
}
*/

//*******************************************************************************************************
//Condicional Ternário

/*
let isMember = false;

let shipping = isMember ? 2 : 10;

console.log(shipping)

let age = 16;

let adult = age > 18 ? "Maior de idade" : "Menor de idade"

console.log(adult)
*/

//*******************************************************************************************************
//Switch

let profession = "Dentista"
console.log(`Profissão: ${profession}`)
switch(profession) {
    case "Fiscal":
        console.log("A sua camisa será verde")
        break;
    case "Bombeiro":
        console.log("A sua camisa será azul")
        break;
    case "Policial":
        console.log("A sua camisa será vermelha")
        break;
    default:
        console.log("A sua camisa será preta");
        break;

}
