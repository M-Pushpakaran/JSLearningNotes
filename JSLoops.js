/*JavaScript For Loop - https://www.w3schools.com/js/js_loop_for.asp

Loops can execute a block of code a number of times.

JavaScript Loops - Loops are handy, if you want to run the same code over and over again, each time with a different value.
Often this is the case when working with arrays:
Instead of writing:
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";

You can write:
let cars = [1,2,5,10];
for (let i = 0; i < cars.length; i++) {  // length = 3, 1 is 0 and print 1 then i = 1 prints 2 and so on.
  console.log(cars[i]); //text += cars[i] + "<br>";
}*/

/*Different Kinds of Loops - JavaScript supports different kinds of loops:

    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true

The For Loop - The for statement creates a loop with 3 optional expressions:
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
Expression 1 is executed (one time) before the execution of the code block.

Expression 2 defines the condition for executing the code block.

Expression 3 is executed (every time) after the code block has been executed.
Example
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}



*/

/*
Loop Scope

Using var in a loop:
Example
var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10

Using let in a loop:
Example
let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5

In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.

In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.

When let is used to declare the i variable in a loop, the i variable will only be visible within the loop. 
 */

/*JavaScript For In - https://www.w3schools.com/js/js_loop_forin.asp

The For In Loop : The JavaScript for in statement loops through the properties of an Object:
Syntax
for(key in object){
// code block to be executed
}

Eg:
const person = {fname:"John", lname:"Doe", age:25};
let texts = "";
for (let x in person){
texts += person[x];
}

console.log(texts);

The for in loop iterates over a person object, Each iteration returns a key (x), The key is used to access the value of the key
The value of the key is person[x]

For In Over Arrays : The JavaScript for in statement can also loop over the properties of an Array:
for (variable in array) {
  //code
}

//Eg:
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

Do not use for in over an Array if the index order is important.
The index order is implementation-dependent, and array values may not be accessed in the order you expect.
It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.


Array.forEach() : The forEach() method calls a function (a callback function) once for each array element.

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;

Note that the function takes 3 arguments:

    The item value
    The item index
    The array itself

The example above uses only the value parameter. It can be rewritten to:
}


Example
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value;
}

*/