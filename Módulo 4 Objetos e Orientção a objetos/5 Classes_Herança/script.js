class Person {

    age = 0;

    constructor(name) {
        this.name = name
    }
}

class Student extends Person {

    constructor(name, id) {
        super(name);
        this.id = id;
    }
}

let p1 = new Student("Alex", 1);
p1.age = 41;
console.log(`${p1.name} tem ${p1.age} anos e sua matrícula é ${p1.id}`)
let p2 = new Student("Mony", 2)
p2.age = 40;
console.log(`${p2.name} tem ${p2.age} anos e sua matrícula é ${p2.id}`)

