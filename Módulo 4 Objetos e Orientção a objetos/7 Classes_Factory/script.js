class Person {

    static hands = 2;
    age = 0;

    constructor(name) {
        this.name = name
    }

   
}

function creatPerson(name, age) {
    let p = new Person(name);
    p.age = age;
    return p;
}

let p1 = creatPerson("Alex", 41);

console.log(`${p1.name} tem ${p1.age} anos!`)


