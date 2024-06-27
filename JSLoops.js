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


/*JavaScript For Of - The For Of Loop
The JavaScript for of statement loops through the values of an iterable object.
It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
Syntax
for (variable of iterable) {
  // code block to be executed
}

variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
iterable - An object that has iterable properties.

Looping over an Array
Example
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x;
}

Looping over a String
Example
let language = "JavaScript";
let text = "";
for (let x of language) {
text += x;
}
*/


/* JavaScript While Loop - https://www.w3schools.com/js/js_loop_while.asp
Loops can execute a block of code as long as a specified condition is true.
The While Loop - The while loop loops through a block of code as long as a specified condition is true.
while (condition) {
  // code block to be executed
}
Example :-
while (i < 10) {
  text += "The number is " + i;
  i++;  //If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.
}

The Do While Loop
The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
Syntax:
do {
  // code block to be executed
}
while (condition);

Example
do {
  text += "The number is " + i;
  i++;  //Do not forget to increase the variable used in the condition, otherwise the loop will never end!
}
while (i < 10); 

Comparing For and While
If you have read the previous chapter, about the for loop, you will discover that a while loop is much the same as a for loop, with statement 1 and statement 3 omitted.

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

The loop in this example uses a for loop to collect the car names from the cars array:
for (;cars[i];) {
  text += cars[i];
  i++;
}

The loop in this example uses a while loop to collect the car names from the cars array:
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i];
  i++;
}
*/

/*JavaScript Break and Continue - https://www.w3schools.com/js/js_break.asp

JavaScript Break and Continue - The break statement "jumps out" of a loop. The continue statement "jumps over" one iteration in the loop.

The Break Statement

You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch() statement.
The break statement can also be used to jump out of a loop:
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}  //In the example above, the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 3.

The Continue Statement
The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
This example skips the value of 3: 

for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}



JavaScript Labels - To label JavaScript statements you precede the statements with a label name and a colon:
label:
statements

The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.

Syntax:
break labelname;
continue labelname;

The continue statement (with or without a label reference) can only be used to skip one loop iteration.
The break statement, without a label reference, can only be used to jump out of a loop or a switch.
With a label reference, the break statement can be used to jump out of any code block: 

const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}

A code block is a block of code between { and }.*/


/*JavaScript Iterables - https://www.w3schools.com/js/js_iterables.asp


Iterables are iterable objects (like Arrays). Iterables can be accessed with simple and efficient code.
Iterables can be iterated over with for..of loops

The For Of Loop - The JavaScript for..of statement loops through the elements of an iterable object.
Syntax
for (variable of iterable) {
  // code block to be executed
}

Iterating - Iterating is easy to understand. It simply means looping over a sequence of elements.
Here are some easy examples:
Iterating over a String
Iterating over an Array



Iterating Over a String

You can use a for..of loop to iterate over the elements of a string:
Example
const name = "W3Schools";

for (const x of name) {
  // code block to be executed
}


Iterating Over an Array

You can use a for..of loop to iterate over the elements of an Array:
Example 1
const letters = ["a","b","c"];

for (const x of letters) {
  // code block to be executed
}

const numbers = [2,4,6,8];

for (const x of numbers) {
  console.log(x);// code block to be executed
}


Iterating Over a Set

You can use a for..of loop to iterate over the elements of a Set:
Example
const letters = new Set(["a","b","c"]);

for (const x of letters) {
  // code block to be executed
}


Iterating Over a Map

You can use a for..of loop to iterate over the elements of a Map:
Example
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const x of fruits) {
  // code block to be executed
}

*/
