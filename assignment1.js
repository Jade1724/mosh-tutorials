/* JavaScript assignment 1 for Tim 21/03/2022 */

/* Question 1

Declare an object computer that comes with the following properties.
- Brand name of Apple,
- Product name of MacBook Air,
- Price of 999.99 dollars (unit can be abbriviated)
- Does not come with SSD
- Installed application of Visual Studio Code and Google Chrome
- No owner

Consider which data type suits the best for each properties. 
You are not allowed to define all of them as mere strings. 
*/

let computer = {
    brand: 'Apple',
    productName: 'MacBook Air',
    price: 999.99,
    hasSSD: false,
    applications: ['VS Code', 'Goole Chrome'],
    owner: null
};

/* Question 2 

(a) Print out the brand name to console.
(b) Print out the rounded up price using Math object method in JavaScript.
(c) Add Postman to the installed app.
(d) Set the owner to Haruka

Finally, print out the updated object.
*/

console.log(computer.brand);

console.log(Math.round(computer.price));

computer.applications.push('Postman');

computer.owner = 'Haruka';

console.log(computer);


/* Question 3 

Question about the installed app.
(a) Print out the number of installed apps.
(b) Print out the 2nd application in the installed app. 
(c) Print out the position of Postman in the installed app.
*/

console.log(computer.applications.length);

console.log(computer.applications[1]);

console.log(computer.applications.indexOf('Postman'));


/* Question 4

This is an advanced question. 
Create a new 'greeting' property in the computer object. 
Write a function as a property of greeting property.
The function should print out "Hello, I am {owner}'s computer."

*/

computer.greeting = function () {
    console.log("Hello, I am " + this.owner + "'s computer.");
}

computer.greeting();  // This should printout the message. 