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