function creatPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age,
        //usando o This dentro de uma função
        getFullname() {
            return `${this.name} ${this.lastName}`
        }
    }
}

let person1 = creatPerson('Alexsandro', 'Leandro', 41);
let person2 = creatPerson('Mony', 'Leandro', 40)

console.log(`${person1.name} tem ${person1.age} anos, e é casado com ${person2.name} que tem ${person2.age} anos.`)

let person = {
    name: 'Alex',
    lastName: 'Leandro',
    age: 41,
        //usando o This dentro de uma função
    getFullname() {
            return `${this.name} ${this.lastName}`;
        }
    }

console.log(person.getFullname())