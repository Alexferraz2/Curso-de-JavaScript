let input = document.querySelector('input')
let ul = document.querySelector("ul")

input.addEventListener('keyup', (e)=> {  
    //Peagando valor do input  
    let value = input.value;
    
    if(e.code === 'Enter') { 
        //Adcionar o elemento li na lista dentro do ul     
        let newLi = document.createElement("li");
        newLi.innerText = `${value}`
        ul.appendChild(newLi)
        //Limpar o campo
        input.value = ""       
    }  
})

