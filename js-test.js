// let vs var vs const demo.
function variable_demo() {
    {
        var x1 = 1;
        const x2 = 2;
    }
    console.log(x1);
}
// Simple average value calculater. 
function average(a, b) {
    let sum = a + b;
    console.log(sum);
    return sum / 2;
}

let a = 2;
let b = 4;
console.log("The mean of " + a +" and " + b + " is " + average(a, b));

variable_demo();

// Primitives
let name = "Haruka";
let age = 23;
let isMasterOfJS = false;
let secret;

// Object
let person = {
    name: "Haruka",
    age: 23,
    isMasterOfJS: false,
}

console.log(person.name);
person.isMasterOfJS = true;