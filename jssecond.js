// JavaScript Numbers - JavaScript Numbers are Always 64-bit Floating Point
{    let x = 3.14;    // A number with decimals
    let y = 3;       // A number without decimals 
}
//Extra large or extra small numbers can be written with scientific (exponent) notation:
{
    let x = 123e5;    // 12300000
    let y = 123e-5;   // 0.00123 
}

//Integer Precision - Integers (numbers without a period or exponent notation) are accurate up to 15 digits. The maximum number of decimals is 17.
{ let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000 
}
//Floating Precision - 
{
    let x = 0.2 + 0.1; // Floating point arithmetic is not always 100% accurate:
    let xy = (0.2 * 10 + 0.1 * 10) / 10; //To solve the problem above, it helps to multiply and divide:
    let xz = (0.02 * 100 + 0.1 * 10)/100;
    console.log(xz);
}

// JavaScript BigInt - JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
//JavaScript integers are only accurate up to 15 digits,let x = 999999999999999; let y = 9999999999999999;
/*In JavaScript, all numbers are stored in a 64-bit floating-point format (IEEE 754 standard).
With this standard, large integer cannot be exactly represented and will be rounded.
Because of this, JavaScript can only safely represent integers:
Up to 9007199254740991 +(253-1)
and
Down to -9007199254740991 -(253-1).
Integer values outside this range lose precision. 
*/
//To create a BigInt, append n to the end of an integer or call BigInt():
{let x = 9999999999999999;
let y = 9999999999999999n;
let xb = 1234567890123456789012345n;
let yb = BigInt(1234567890123456789012345)
}
//BigInt: A new JavaScript Datatype - The JavaScript typeof a BigInt is "bigint":, BigInt is the second numeric data type in JavaScript (after Number).
//With BigInt the total number of supported data types in JavaScript is 8: 1. String, 2. Number, 3. Bigint, 4. Boolean, 5. Undefined, 6. Null, 7. Symbol, 8. Object 
{
    let x = BigInt(999999999999999);
let type = typeof x;
console.log(type) // bigint
}
// BigInt Operators - Operators that can be used on a JavaScript Number can also be used on a BigInt.
// Arithmetic between a BigInt and a Number is not allowed (type conversion lose information).
// Unsigned right shift (>>>) can not be done on a BigInt (it does not have a fixed width).

//BigInt Decimals - A BigInt can not have decimals.

{
    let x = 5n;
    let y = x / 2; // Error: Cannot mix BigInt and other types, use explicit conversion.
    let x1 = 5n;
    let y1 = Number(x) / 2;
}

//BigInt Hex, Octal and Binary - BigInt can also be written in hexadecimal, octal, or binary notation:
{
let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;
}

//Minimum and Maximum Safe Integers - ES6 added max and min properties to the Number object:

// MAX_SAFE_INTEGER
{
    let x = Number.MAX_SAFE_INTEGER;
}
// MIN_SAFE_INTEGER
{
    let x = Number.MIN_SAFE_INTEGER;
}

// New Number Methods - 
// The Number.isInteger() Method - The Number.isInteger() method returns true if the argument is an integer.
{
Number.isInteger(10);
Number.isInteger(10.5);
}

// The Number.isSafeInteger() Method - A safe integer is an integer that can be exactly represented as a double precision number.
// The Number.isSafeInteger() method returns true if the argument is a safe integer.
{
    Number.isSafeInteger(10);
Number.isSafeInteger(12345678901234567890);
}

// JavaScript Number Methods

// The toString() Method - The toString() method returns a number as a string. All number methods can be used on any type of numbers (literals, variables, or expressions):
{
    let x = 123;
    x.toString();
    //(123).toString();
    //(100 + 23).toString();
}

//The toExponential() Method - toExponential() returns a string, with a number rounded and written using exponential notation.
// A parameter defines the number of characters behind the decimal point, The parameter is optional. If you don't specify it, JavaScript will not round the number.
{
    let x = 9.656;
    x.toExponential(2);
    x.toExponential(4);
    x.toExponential(6);
}

// The toFixed() Method - toFixed() returns a string, with the number written with a specified number of decimals, toFixed(2) is perfect for working with money.
{
let x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);
}

// The toPrecision() Method - toPrecision() returns a string, with a number written with a specified length:
{
    let x = 9.656;
    x.toPrecision();
    x.toPrecision(2);
    x.toPrecision(4);
    x.toPrecision(6);
}

// The valueOf() Method - valueOf() returns a number as a number. 
{
let x = 123;
x.valueOf();
(123).valueOf();
(100 + 23).valueOf();
}
/* In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).
The valueOf() method is used internally in JavaScript to convert Number objects to primitive values. There is no reason to use it in your code.
All JavaScript data types have a valueOf() and a toString() method.*/

// Converting Variables to Numbers - The methods are global JavaScript methods.
//1. The Number() Method - The Number() method can be used to convert JavaScript variables to numbers:
{
Number(true);
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("John");
}  // If the number cannot be converted, NaN (Not a Number) is returned.
// Number() can also convert a date to a number. The Date() method returns the number of milliseconds since 1.1.1970.
{
    Number(new Date("1970-01-01"))
}
// The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:
{
    Number(new Date("1970-01-02"))
    Number(new Date("2017-09-30"))
}

// 2. The parseInt() Method - parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
// If the number cannot be converted, NaN (Not a Number) is returned.
{
    parseInt("-10");
    parseInt("-10.33");
    parseInt("10");
    parseInt("10.33");
    parseInt("10 20 30");
    parseInt("10 years");
    parseInt("years 10");
}

// 3. The parseFloat() Method - parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
// If the number cannot be converted, NaN (Not a Number) is returned.
{
    parseFloat("10");
    parseFloat("10.33");
    parseFloat("10 20 30");
    parseFloat("10 years");
    parseFloat("years 10");
}

// Number Object Methods - These object methods belong to the Number object:
/*
Number Methods Cannot be Used on Variables
The number methods above belong to the JavaScript Number Object.
These methods can only be accessed like Number.isInteger().
Using X.isInteger() where X is a variable, will result in an error:
TypeError X.isInteger is not a function.
 */

// 1. The Number.isInteger() Method - The Number.isInteger() method returns true if the argument is an integer.
{
    Number.isInteger(10);
    Number.isInteger(10.5);
}

// 2. The Number.isSafeInteger() Method - A safe integer is an integer that can be exactly represented as a double precision number.
// The Number.isSafeInteger() method returns true if the argument is a safe integer.
{
    Number.isSafeInteger(10);
    Number.isSafeInteger(12345678901234567890);
} // Safe integers are all integers from -(253 - 1) to +(253 - 1). This is safe: 9007199254740991. This is not safe: 9007199254740992.

// 3. The Number.parseFloat() Method - Number.parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
{
    Number.parseFloat("10");
    Number.parseFloat("10.33");
    Number.parseFloat("10 20 30");
    Number.parseFloat("10 years");
    Number.parseFloat("years 10");  // If the number cannot be converted, NaN (Not a Number) is returned.
}

// The Number.parseInt() Method - Number.parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
{
    Number.parseInt("-10");
    Number.parseInt("-10.33");
    Number.parseInt("10");
    Number.parseInt("10.33");
    Number.parseInt("10 20 30");
    Number.parseInt("10 years");
    Number.parseInt("years 10"); //If the number cannot be converted, NaN (Not a Number) is returned.
}


// JavaScript Number Properties
// 1. JavaScript EPSILON - Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.
{
    let x = Number.EPSILON;
}
// Note - Number.EPSILON is an ES6 feature. It does not work in Internet Explorer.

// 2. JavaScript MAX_VALUE - Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.
{let x = Number.MAX_VALUE;}
/*
Number Properties Cannot be Used on Variables
Number properties belong to the JavaScript Number Object.
These properties can only be accessed as Number.MAX_VALUE.
Using x.MAX_VALUE, where x is a variable or a value, will return undefined:
 */
{ let x = 6;
    x.MAX_VALUE } //Error message


// 3. JavaScript MIN_VALUE - Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.
{let x = Number.MIN_VALUE;}

// 4. JavaScript MAX_SAFE_INTEGER - Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript. Number.MAX_SAFE_INTEGER is (253 - 1).
{let x = Number.MAX_SAFE_INTEGER;}

// 5. JavaScript MIN_SAFE_INTEGER - Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript. Number.MIN_SAFE_INTEGER is -(253 - 1).
{let x = Number.MIN_SAFE_INTEGER;}
/* Note
MAX_SAFE_INTEGER and MIN_SAFE_INTEGER are ES6 features.
They do not work in Internet Explorer.
 */

// 6. JavaScript POSITIVE_INFINITY - 
{let x = Number.POSITIVE_INFINITY;}
{//POSITIVE_INFINITY is returned on overflow:
    let x = 1 / 0;
}

// 7. JavaScript NEGATIVE_INFINITY - 
{let x = Number.NEGATIVE_INFINITY;}
{
//NEGATIVE_INFINITY is returned on overflow:
let x = -1 / 0;
}

// 8. JavaScript NaN - Not a Number - NaN is a JavaScript reserved word for a number that is not a legal number.
{let x = Number.NaN;}
{//Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
    let x = 100 / "Apple";}
