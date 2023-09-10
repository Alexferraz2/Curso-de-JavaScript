// 'https://jsonplaceholder.typicode.com/posts'
let url = 'https://jsonplaceholder.typicode.com/posts'

async function readPosts() {
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando...';

    let response = await fetch(url);

    let json = await response.json();

    if(json.length > 0) {
        postArea.innerHTML = "";

        for(let i in json) {
            let postHtml = 
            `<div>
            <h1>${json[i].title}</h1>
            ${json[i].body}
            </div>`;
            postArea.innerHTML += postHtml;
        }
    }else {
        postArea.innerHTML = 'Nenhum post a exibir';
    }
}

//Ação para adcionar um post novo


let btn = document.querySelector('#insertButton')

async function addNewPost(title, body) {
    await fetch(url,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/Json'
        },
        body: JSON.stringify({
            title,
            body,
            userId: 2
        })
        
    }
    
    );

    document.querySelector('#titleField').value ='';
    document.querySelector('#bodyField').value = '',

    readPosts();
}
btn.addEventListener('click', () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

if(title && body) {
    addNewPost(title, body)
    alert(`O comentário não será exibido no body da página, por se tratar de uma API FAKE, mas baixo está o comentário:\nTítulo\n${title}\nComentário\n${body}`)
}else {
    alert("Preencha todos os campos")
}
})


readPosts();

//Método para buscar o comentário digitando o número dele

let input = document.querySelector('#search')
let btnSearch = document.querySelector('#SearchtButton')

btnSearch.addEventListener('click', ()=> {
    let order = parseInt(input.value)
    console.log(order)
        
        
        if(isNaN(order)) {
            input.value = ""
            alert('Digite um número de 0 à 100')
            console.log('Digite um número de 0 à 100')
        }else {
            let inpuValue = input.value -1
        fetch(url)
        .then((response) => {
        return response.json()
    })
        .then((data) => {
        let postArea = document.querySelector('.posts');
        postArea.innerHTML = 'Carregando...';
        //alert(`Esse é o título do ${order}º post: ${data[inpuValue].title}`)
        //console.log(data[inpuValue].title)
        let postHtml = 
            `<div>
            <h1>${data[inpuValue].title}</h1>
            ${data[inpuValue].body}
            </div>`;
            postArea.innerHTML = postHtml;
    })
    .catch((error) => {
        alert("A requisição falhou")
        console.log(error)
    })
    input.value = ""
        }
        
        
    
    
})