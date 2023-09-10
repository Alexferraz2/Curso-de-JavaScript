let btn = document.querySelector('#btn');
let inputnumber = document.querySelector('#inputnumber');

// 'https://jsonplaceholder.typicode.com/posts'

async function clicou() {
    let order = parseInt(inputnumber.value) - 1;
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    //para quebrar uma linha no alert() utliza o \n 
    alert(`Título do ${inputnumber.value}º post: \n${json[order].title}
    \nConteúdo do corpo do ${inputnumber.value}º post: \n${json[order].body}`)
    
    
    }
    

//No código abaixo usamos  try para quando a requiisicão der certo e o catch quando der erro

/*
async function clicou() {
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/pots')
    let json = await response.json();
    alert(`Título do primeiro post: ${json[1].title}`)
    }catch(error) {
        console.log('deu errado')
    }
    
}

*/

//Forma de inserir um dados numa api usando o método post
let btnInserir = document.querySelector('#inserir');
async function inserir() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', 
    {
        method: 'Post',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            title: 'Título de Teste',
            body: 'Corpo de teste',
            userId: 2
        })
    })
    let json = await response.json();
    console.log(json);
}


btn.addEventListener('click', clicou)
btnInserir.addEventListener('click', inserir)




