class Person {

    steps = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    takeAStep() {
        this.steps++;
    }
}

let p1 = new Person('Alex', 41)
let p2 = new Person ('Mony', 39)
let p3 = new Person ('Alice', 11)

/*
console.log(`${p1.name} tem ${p1.age} é casado com ${p2.name} que tem ${p2.age} e são tios de ${p3.name} que tem ${p3.age}`) 
*/

p1.takeAStep();

console.log(`Passos de ${p1.name}: ${p1.steps}`)
