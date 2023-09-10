
let person = {
    name: 'Alex',
    lastName: 'Leandro',
    age: 41,
        //usando o This dentro de uma função
    getFullname() {
            return `${this.name} ${this.lastName}`;
        },
        start() {
            console.log("Deu um start na pessos")
        }
    }


person.start()
console.log(person.getFullname())