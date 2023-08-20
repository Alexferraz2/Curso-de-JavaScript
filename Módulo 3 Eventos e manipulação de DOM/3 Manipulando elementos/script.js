function clicou() {
    const teste = document.querySelector("#teste")
    console.log(teste.children[0].children)
    teste.children[0].children[0].innerHTML = "<li>Alterado!</li>";
    teste.children[0].children[1].append(" (alterado)")
    teste.children[0].innerHTML += "<li>Adcionando</li>";
    //Para criar um novo elemento com o appendChild, primeiro cria o elemento, segundo criar o conteúdo dele, terceiro adciona no HTML. O append adciona o elemento no final do elemento pai, o prepend adciona no inicio do elemento pai
    let newLi = document.createElement("li");
    newLi.innerText = "Ítem novo adcionado"
    teste.children[0].appendChild(newLi)
    //Para criar um elemento antes ou depois de um elemento, primeiro criar o elemento com creatElement, depois o conteúdo do elemento, e por fim determina qual elemento ele será criado antes o depois usando o before ou o after
    let ulLista = document.querySelector("#lista")
    let newButton = document.createElement('button')
    newButton.innerHTML = "Botão"

    ulLista.before(newButton)



    
}