"use strict";
let myVariable = 10;
let othervar = 20;
let myname = "jose pedros";
const isActive = false;
const artistas = ["cerati", "caifanes", "los tres", "la renga"];
function getVariable(e) {
    e.forEach((ele) => {
        console.log(ele);
    });
    return e;
}
console.log(getVariable(artistas));
