/*function apertou() {
    console.log("Apertou")
}

function segurou() {
    console.log("Segurou")
}

*/
function soltou(e) {
    console.log("Com o e.code aparecerá da maneira abaixo, dessa maneira ele fará diferença quando for uma tecla que tenha do lado direito e esquerdo, como o shift")
    console.log(e.code)
    console.log("Com o e.key aparecerá da maneira abaixo, dessa maneira ele não fará diferença quando for uma tecla que tenha do lado direito e esquerdo, como o shift")
    console.log(e.key)
}


const input = document.querySelector('input');
input.addEventListener('keyup', soltou);