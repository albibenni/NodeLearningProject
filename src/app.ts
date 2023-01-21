console.log("hello")

const person = {
    firstName: 'Max',
    age: 10,
    greet() {
        console.log("Hi I'm " + this.firstName + this.age)
    }
}

const {firstName, age}: {firstName: string, age: number} = person
console.log(firstName);
console.log(age);