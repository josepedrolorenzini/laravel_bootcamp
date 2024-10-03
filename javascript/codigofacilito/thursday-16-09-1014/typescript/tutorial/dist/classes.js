"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
    sayHi() {
        return `Hello, I am ${this.name}!`;
    }
}
const myAnimal = new Animal("animal 1", 43);
