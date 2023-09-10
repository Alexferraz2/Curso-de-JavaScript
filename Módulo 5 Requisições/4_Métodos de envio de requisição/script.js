let urlPost = 'https://jsonplaceholder.typicode.com/posts'

let btn = document.querySelector('#btn');
let btnInserir = document.querySelector('#inserir');
let inputnumber = document.querySelector('#inputnumber');

btn.addEventListener('click', () => {    
    
        let order = parseInt(inputnumber.value)
        
        
        if(isNaN(order)) {
            inputnumber.value = ""
            alert('Digite um número de 0 à 100')
            console.log('Digite um número de 0 à 100')
        }else {
            let inpuValue = inputnumber.value -1
        fetch(urlPost)
        .then((response) => {
        return response.json()
    })
        .then((data) => {
        alert(`Esse é o título do ${order}º post: ${data[inpuValue].title}`)
        console.log(data[inpuValue].title)
    })
    .catch((error) => {
        alert("A requisição falhou")
        console.log(error)
    })
    inputnumber.value = ""
        }
        
        
    
    
    
});

//Forma de inserir um dados numa api usando o método post
function inserir() {
    fetch('https://jsonplaceholder.typicode.com/posts', 
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
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    })
}



btnInserir.addEventListener('click', inserir)




