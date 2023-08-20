//o getAttribute serve para pegar o atributo, o hasAttribute serve para verificar se tem o atributo e o setAttribute serve para setar/criar/mudar um atributo

function clicou() {
    let input = document.querySelector('input')
    let btn = document.querySelector(".btn")

    console.log(input.getAttribute('type'))

    if(input.hasAttribute('placeholder')) {
        console.log('Tem o placeholder')
    } else {
        console.log("Não tem o placeholder")
    }
// o código ele pegou o atributo type verificou se era do tipo text, se for igual ele muda para password, e vice versa
    if(input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        btn.innerHTML = 'Mostrar Senha'
    } else{
        input.setAttribute('type', 'text')
        btn.innerHTML = 'Ocultar Senha'
    }
}