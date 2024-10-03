interface AnimalInterface{
    name: string;
    getAge():number ;
}

class Animal implements AnimalInterface{
    public name: string;
    private age: number ;
    protected identity :string;

    constructor(name: string , age: number){
        this.name = name;
        this.age = age;
        this.identity = "animal";
    }


    makeSound(): void{
        console.log(`${this.name} makes a sound.`);
    }

    sayHi():string{
       return `Hello, I am ${this.name}!` ;
    }
    getAge(): number{
        return this.age;
    }
}


const myAnimal = new Animal("animal 1" ,43) ;
console.log(myAnimal)


class Dog extends Animal {

    public type:string;
    public year:number;

    constructor(name: string , age: number , type: string , year: number){
        super(name , age);
        this.type = type;
        this.year = year;
    }
    bark(): void{
        console.log(`${this.name} barks loudly.`);
    }
    sayHi(): string {
        return `Hello, I am ${this.name}! I am a ${this.identity}.` ;
    }
}

const myDog = new Dog("Mad dog" , 43 , "pastor aleman" , 1981) ;

console.log(myDog) ; 

if(myDog.year > 1980){
    console.log("you are an old dog")
    console.log(myDog.sayHi());
}else{
    console.log("young dog")
}