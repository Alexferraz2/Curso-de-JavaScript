let urlPost = 'https://jsonplaceholder.typicode.com/posts'

let btn = document.querySelector('#btn');
let inputnumber = document.querySelector('#inputnumber');

btn.addEventListener('click', () => {
    let order = inputnumber.value
    let inpuValue = inputnumber.value -1
    fetch(urlPost)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        alert(`Esse é o título do ${order}º post: ${data[inpuValue].title}`)
        console.log(data[inpuValue].title)
    })
});

