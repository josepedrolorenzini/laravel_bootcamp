let myVariable = 10 ;
let othervar = 20;
let myname :string = "jose pedros"
const isActive:boolean = false;


const artistas: string[] = ["cerati", "caifanes", "los tres", "la renga"];

function getVariable<T extends string[]>(e: T): T {
    e.forEach((ele: string) => {
        console.log(ele);
    });
    return e;
}

console.log(getVariable(artistas));



