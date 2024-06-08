//https://www.w3schools.com/js/js_math.asp

/*JavaScript Math Object - Allows to perform mathematical tasks on numbers 
Unlike other objects math has no constructor. The math object is static, all methods and properties can be created without creating an math object first.
Math Properties(Constants)
The syntax of any math property is : Math.property. JS has 8 math properties.
Math.E  - Return Eulers number
Math.PI  - Returns PI
Math.SQRT2 - Returns the squareroot of 2
Math.SQRT1_2 - Returns squareroot of 1/2.
Math.LN2 - Returns Natural Logarithm of 2
Math.LN10 - Returns Natural Logarithm of 10
Math.LOG2E - Returns base 2 logarithm of E
Math.LOG10E - Returns base 10 logarithm of E

Math Methods - The syntax for Math any method is: Math.method(number)
Number to Integer - There are four common methods to round a number to an integer:
Math.round(x) - Returns x rounded to it's nearest integer.
Math.ceil(x) - Returns x rounded upto it's nearest integer.
Math.floor(x) - Returns x rounded down to it's nearest integer.
Math.trunc(x) - Returns the integer part of x.
*/
// Math.round(x) - 
Math.round(9.4); // returns 9
Math.round(9.5); // returns 10
Math.round(9.6); // returns 10

// Math.ceil(x)
Math.ceil(3.4); // returns 4
Math.ceil(3.6); // returns 4
Math.ceil(-2.5); // returns -2
Math.ceil(-3.9); // returns -3

// Math.floor(x) -
Math.floor(4.9); // Returns 4
Math.floor(5.5); // Returns 5
Math.floor(-4.7); // Returns -5

// Math.trunc(x) -
Math.trunc(5.9); // Returns 5
Math.trunc(2.1); // Returns 2
Math.trunc(-1.5); // Returns -1

// Math.sign(x) -
Math.sign(5.9); // Returns 1 as value is positive
Math.sign(-5.9); // Returns -1 as value is Negative
Math.sign(0); // Returns 0.

// Math.pow(x,y) - returns the value of x to the power of y
Math.pow(5,2); // Returns 25
Math.pow(5,3); // Returns 125
Math.pow(8,3); // Returns 512

// Math.sqrt(x) - Squareroot of x
Math.sqrt(9); // Returns 3
Math.sqrt(25); // Returns 5

// Math.abs(x) - Absolute positive value of x -
Math.abs(-4.9); // Returns 4.9
Math.abs(4.9); // Returns 4.9
Math.abs(-8.1); // Returns 8.1

// Math.sin(x) - returns the sine value of x, Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians: Angle in radians = Angle in degrees x PI / 180.
Math.sin(90 * Math.PI / 180); // returns 1 (the sine of 90 degrees)
Math.sin(45 * Math.PI / 180); // returns 0.7071067811865476

// Math.cos(x) - Returns the cosine (a value between -1 and 1) of the angle x (given in radians)
//If you want to use degrees instead of radians, you have to convert degrees to radians: Angle in radians = Angle in degrees x PI / 180.
Math.cos(0 * Math.PI / 180); // returns 1 (the cos of 0 degrees)

//Math.min() , Math.max() - Finds the Highest and Lowest values in a list of arguments.
Math.min(0,8,20,-5,-1,-20,300); // Returns -20
Math.max(0,300,560,20,-200,35,60); // Returns 560

//Math.random() - returns a random number between 0 (inclusive), and 1 (exclusive):
Math.random(); // Returns a random number between 0 and 1

// Math.log(x) - Returns the natural logarithm of x. The natural logarithm returns the return time needed to reach a certain level of growth.
Math.log(1); // returns 0
Math.log(2); // returns 0.6931471805599453
Math.log(3); // returns 1.0986122886681096
Math.log(100); // returns 4.605170185988092
// Math.E and Math.log() are twins.
const xv = Math.log(10);  // Returns 2.302585092994046

// Math.log2(x) method - returns the base 2 logarithm of x. How many times must we multiply 2 to get 8?
Math.log2(8); // returns 3
Math.log2(9); // returns 3.169925001442312
Math.log2(20); // returns 4.321928094887363

// Math.log10(x) - returns the base 10 logarithm of x. How many times must we multiply 10 to get 1000?
Math.log10(1000); // Returns 3, 10*10 = 100, 100*10 = 1000
Math.log10(100); // Returns 2, 10*10 = 100

/*
JavaScript Math Methods
Method 	Description
abs(x) 	Returns the absolute value of x
acos(x) 	Returns the arccosine of x, in radians
acosh(x) 	Returns the hyperbolic arccosine of x
asin(x) 	Returns the arcsine of x, in radians
asinh(x) 	Returns the hyperbolic arcsine of x
atan(x) 	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x) 	Returns the arctangent of the quotient of its arguments
atanh(x) 	Returns the hyperbolic arctangent of x
cbrt(x) 	Returns the cubic root of x
ceil(x) 	Returns x, rounded upwards to the nearest integer
cos(x) 	Returns the cosine of x (x is in radians)
cosh(x) 	Returns the hyperbolic cosine of x
exp(x) 	Returns the value of Ex
floor(x) 	Returns x, rounded downwards to the nearest integer
log(x) 	Returns the natural logarithm (base E) of x
max(x, y, z, ..., n) 	Returns the number with the highest value
min(x, y, z, ..., n) 	Returns the number with the lowest value
pow(x, y) 	Returns the value of x to the power of y
random() 	Returns a random number between 0 and 1
round(x) 	Rounds x to the nearest integer
sign(x) 	Returns if x is negative, null or positive (-1, 0, 1)
sin(x) 	Returns the sine of x (x is in radians)
sinh(x) 	Returns the hyperbolic sine of x
sqrt(x) 	Returns the square root of x
tan(x) 	Returns the tangent of an angle
tanh(x) 	Returns the hyperbolic tangent of a number
trunc(x) 	Returns the integer part of a number (x) */