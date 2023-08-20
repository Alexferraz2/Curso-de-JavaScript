function clicou() {
    const btn = document.querySelector('.btn');

    btn.classList.add('clicar');
    btn.classList.add('clicado');
    btn.classList.remove('clicado')
    alert(btn.classList.contains('clicar'))
}