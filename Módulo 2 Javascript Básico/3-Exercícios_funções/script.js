/*
Calcule a porcetagem entre 2 números.
Exemplo: 25% de 40 é 10
Fórmula da porcentagem: (y / x) * 100
Uso da função:
*/

function porcent(porce,base) {
    return (porce/base) *100
}


let base = 40
let porce = 10

let result = porcent(porce, base)
console.log(`A porcentagem de ${result}% de ${base} é ${porce}`)

/*Calcule o preço do imóvel
- m² = 3.000
- Se tiver 1 quarto, o m² é 1X
- Se tiver 2 quartos, o m² é 1.2x
- Se tiver 3 quartos, o m² é 1.5x
Uso da função
*/
//Feito if e else
function calcularMetragem(metragem, quartos) {
    let m2 = 3000;

    if(quartos === 1) {
        return metragem * m2
    } else if (quartos === 2 ) {
        return 1.2 * m2 * metragem
    } else if ( quartos === 3 ) {
        return 1.5 * m2 * metragem
    }
}

let metragem = 123
let quartos = 3

let preco = calcularMetragem(metragem, quartos)

console.log(`A casa custa R$ ${preco}`)

//Feito com switch

function calculaMetragem(metragemm, quarto) {
    let mdois = 3000;
    let precco = 0;

    switch(quarto) {
        case 1:
        default:
            precco = metragemm * mdois;
            break;
        case 2:
            precco = metragem * (mdois * 1.2);
            break;
        case 3:
            precco = metragem * (mdois * 1.5);
            break;
        
    }

    return precco;
}

let metragemm = 123;
let quarto = 3;
let precco = calculaMetragem(metragemm, quarto)

console.log(`O valor da casa é R$ ${precco}`)

/*
Crie uma função que valide usuário e senha.
Usuário correto: Alex;
Senha correta: 123;
*/
//Uso da Função

let usuario = 'Alex'
let senha = 123;

validar(usuario, senha)

function validar(usuario, senha) {
    if(usuario == "Alex" && senha == 123 ) {
        console.log("Login efetuado")
    }else {
        console.log("Login não efetuado")
    }
}