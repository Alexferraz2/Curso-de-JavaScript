let urlPost = 'https://jsonplaceholder.typicode.com/posts'

let btn = document.querySelector('#btn');
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

