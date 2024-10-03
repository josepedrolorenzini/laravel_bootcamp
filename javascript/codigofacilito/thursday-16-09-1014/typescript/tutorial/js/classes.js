"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.identity = "animal";
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
    sayHi() {
        return `Hello, I am ${this.name}!`;
    }
    getAge() {
        return this.age;
    }
}
const myAnimal = new Animal("animal 1", 43);
console.log(myAnimal);
class Dog extends Animal {
    constructor(name, age, type, year) {
        super(name, age);
        this.type = type;
        this.year = year;
    }
    bark() {
        console.log(`${this.name} barks loudly.`);
    }
    sayHi() {
        return `Hello, I am ${this.name}! I am a ${this.identity}.`;
    }
}
const myDog = new Dog("Mad dog", 43, "pastor aleman", 1981);
console.log(myDog);
if (myDog.year > 1980) {
    console.log("you are an old dog");
    console.log(myDog.sayHi());
}
else {
    console.log("young dog");
}
