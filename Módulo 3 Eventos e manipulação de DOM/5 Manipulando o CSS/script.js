function clicou() {
    let li = document.querySelector('li')

    
    //SEMPRE QUE FOR FAZER UMA VERIFICAÇÃO DE COR TEM QUE SER EM RGB PARA QUE DE CERTINHO E NÃO TENHA PROBLEMAS

    if(li.style.backgroundColor === "rgb(255, 0, 0)") {
        li.style.backgroundColor = '#0000FF';
        console.log('Azul')
    } else {
        li.style.backgroundColor = '#FF0000';
        console.log('vermelho')
    } 

    
   

}