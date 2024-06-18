/* Math.random() - returns a random number between 0 (inclusive),  and 1 (exclusive):
Math.random() always returns a number lower than 1.
//Javascript Random Integers
Math.random() used with math.floor() can be used to return random integers.
There is no such thing as javascript integers. We are talking about numbers without decimal points.

console.log(Math.floor(Math.random()*10)); // returns random number between 0-9
console.log(Math.floor(Math.random()*11)); // returns random number between 0-10
console.log(Math.floor(Math.random()*100)); // returns random number between 0-99
console.log(Math.floor(Math.random()*10)+1); // Returns a random integer from 1 to 10
console.log(Math.floor(Math.random()*100)+1); // Returns a random integer from 1 to 100 */

/* A Proper Random Function - As you can see from the examples above, it might be a good idea to create a proper random function to use for all random integer purposes.
This JavaScript function always returns a random number between min (included) and max (excluded):

function randomIntegerincl(min, max){
    return Math.floor(Math.random() * ( max - min )) + min;
}
console.log(randomIntegerincl(2,4));

//This JavaScript function always returns a random number between min and max (both included):
function randomIntegerincldng(min, max){
    return Math.floor(Math.random() * ( max - min+1 )) + min;
}
console.log(randomIntegerincldng(2,4));  */


/*JavaScript Booleans - A JavaScript Boolean represents one of two values: true or false.

Boolean Values - YES / No , TRUE / FALSE, ON / OFF.

Boolean() function - Function to find out if an expression (or a variable) is true:
Boolean(10>9) - // True
//Or 10>9 / (10>9) */

/* Comparisans and Conditions - ==, < , >. The Boolean value of an expression is the basis for all JS Comparisans and Conditions.
Everything with a value is True eg: 100, 3.14, -15, "Hello", "false", 7 + 1 + 3.14
Everything without a value is False eg: let x = 0 / -0 / ""; Boolean(x); Zero, -Zero, undefined, null, NaN and Empty string are false.

Javascript Booleans as Objects - Normally JS Booleans are primitive values created from literals : let x = false;
But booleans can also be defined as objects with the new keyword: let y = new Boolean(false);
let x = false;  // typeof x returns boolean
let y = new Boolean(false)   // typeof y returns object

Do not create Boolean objects.
The new keyword complicates the code and slows down execution speed.
Boolean objects can produce unexpected results:

When using the == operator, x and y are equal:
let x = false;
let y = new Boolean(false);

When using the === operator, x and y are not equal:
let x = false;
let y = new Boolean(false);
*/

// Comparing two JavaScript objects always return false.