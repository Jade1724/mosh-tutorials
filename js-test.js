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

let selectedColors = ['red', 'blue', 'green'];
selectedColors.push('orange');
console.log(selectedColors);

let cups = [];
cups.push('coffee cup');
if (cups.length == 0) {
    console.log("You haven't selected any cup!");
} else {
    console.log("Enter your address");
}

// Functions
function greet(nameToCall) {
    console.log('Hello ' + nameToCall + ' !');
}

greet('John', 'Doe');

// Escape sequence test
let message = 'something\nwrong';
console.log(message);

// if and else

let hour = 10;

// Loops

let products = ['good phone', 'nice phone', 'laptop', 'another laptop', 'yet another nice phone'];

for (let i = 0; i < products.length; i++) {
    if (products[i].includes('phone')) console.log(products[i]);
}

const yellowCardCount = 1;
const faulMessage = 
`Tim has got ${yellowCardCount} yellow card${yellowCardCount === 1 ? '': 's'}`;
console.log(faulMessage);