// Single line comments
/* multiple
line
comments8*/

let x = 2 + 3 + 5;
console.log(x)
console.log(typeof(x))

const a=20;
{const a=20;}


{
let x = (100 + 50) * 3;
let y = 100 + 50 * 3;
console.log("Value of x is", x)
console.log("Value of y is", y)}

{
    let x = 10;
    let y = 2;
    x +=y; // here x is x=x+y (10+2) 
    console.log("Addition: ", x)
    x -=y;
    console.log("Substraction: ", x)
}{
let text = "hellow";
console.log(text+=" world");
}
{
// let x = 10; x /= 5;
// let x = 10; x **= 3;
// let x = 10; x *= 5;
// let x = -100; x <<= 5;
// let x = -100; x >>= 5;
// let x = -100; x >>>= 5; //The Unsigned Right Shift Assignment Operator right shifts a variable (unsigned).
//console.log(x)
}

{
    let y = 20;
// let x = 10; x &= 5; // The Bitwise AND Assignment Operator does a bitwise AND operation on two operands and assigns the result to the the variable.
// let x = 10; x |= 5; //The Bitwise OR Assignment Operator does a bitwise OR operation on two operands and assigns the result to the variable.
// let x = 10; x ^= 5; // The Bitwise XOR Assignment Operator does a bitwise XOR operation on two operands and assigns the result to the variable.
//let x = 10; x &&= 5; // The Logical AND assignment operator is used between two values. If the first value is true, the second value is assigned.
// let x = 10; x ||= 5; // The Logical OR assignment operator is used between two values. If the first value is false, the second value is assigned.
let x; x ??= y; //The Nullish coalescing assignment operator is used between two values. If the first value is undefined or null, the second value is assigned.
console.log(x)
}

let bigIntex = BigInt("123456789012345678901234567890");  //JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
{
let x = 5;
let y = 5;
let z = 6;
console.log(x == y); // Returns true
console.log(x == z); // Returns false
// Booleans can only have two values: true or false. Booleans are often used in conditional testing.

}

let resultOfMyFunction = myFunction(2,20);
console.log("calling the function before declaration : ",resultOfMyFunction);

function myFunction(p1,p2){
    return p1*p2;
}

let afterDecl = myFunction(12,6);
console.log("calling the function after declaration : ",afterDecl);

function toCelcious(farenheet){
    return (5/9) * (farenheet-32);
}
// let value = toCelcious(50);  // Passed value and got answer.
// let value = toCelcious(); //NaN returned instead of the value. Accessing a function with incorrect parameters can return an incorrect answer - toCelsius() refers to the function result.
let value = toCelcious;  // Accessing a function without () returns the function and not the function result - toCelsius refers to the function object
console.log("Value : ",value);

{
    let x = toCelcious(77);
let text = "The temperature is " + x + " Celsius";
{
    let text = "The temperature is " + toCelcious(77) + " Celsius";  // calling function without 2 variable declarations
}
}

function myFunctionCar(){
    let myCar = "test";  // Local variables are created when a function starts, and deleted when the function is completed.
}



// Methods are stored in properties as function definitions.
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// https://hackr.io/blog/javascript-projects

/*
All string methods return a new string. They don't modify the original string.
Formally said: Strings are immutable: Strings cannot be changed, only replaced.
*/

// JavaScript String slice()
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); // Slice out a portion of a string from position 7 to position 13
console.log("1st "+part)

{
let text = "Apple, Banana, Kiwi";
let part = text.slice(7); // If you omit the second parameter, the method will slice out the rest of the string:
console.log("2nd "+part)
}

{ //If a parameter is negative, the position is counted from the end of the string:
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12);
console.log("3rd "+part)
}

{ //This example slices out a portion of a string from position -12 to position -6:
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);
console.log("4th "+part)
}


// JavaScript String substring()

{
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13); // If you omit the second parameter, substring() will slice out the rest of the string.
console.log("Sub-string 1 "+part);
}

//substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
{
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
console.log("substr 1 "+part);
}

{
    let str = "Apple, Banana, Kiwi";
let part = str.substr(7);
console.log("substr 2 "+part);  // If you omit the second parameter, substr() will slice out the rest of the string.
}

// Replacing String Content

{
    let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log("text "+text)
console.log("new text "+newText)
}
{
    let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools"); //By default, the replace() method replaces only the first match:
console.log("new text without regular expression "+newText)
{
    let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools"); //By default, the replace() method replaces only the first match:
console.log("new text regular expression "+newText)
}
}
{
    let text = "Please visit Microsoft!";
let newText = text.replace("MicrosOFT", "W3Schools"); // By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
console.log("new text without reg exp "+newText)
{
    // To replace case insensitive, use a regular expression with an /i flag (insensitive):
    let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");
console.log("new text after regular exp "+newText)
}
}

// Regular expressions are written without quotes.

// JavaScript String ReplaceAll()

{
let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
console.log("Replace all method : "+text);
}

// JavaScript String toUpperCase()
{
    let text1 = "Hello World!";
let text2 = text1.toUpperCase(); // A string is converted to upper case with toUpperCase()
console.log("Uppercase - "+text2)
}

// JavaScript String toLowerCase()
{
    let text1 = "Hello World!";       // String
    let text2 = text1.toLowerCase();  // text2 is text1 converted to lower - A string is converted to lower case with toLowerCase()
    console.log("Lowercase - "+text2)
}


// JavaScript String concat()
{
    let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log("Concate simple : "+text3);
{
    text = "Hello" + " " + "World!"; // The concat() method can be used instead of the plus operator. These two lines do the same
text = "Hello".concat(" ", "World!");
console.log("Concate method used instead of + operator : "+text);
} // Strings are immutable: Strings cannot be changed, only replaced.
}


//JavaScript String trim() - The trim() method removes whitespace from both sides of a string:
{
    let text = "    ABC   DE    ";
    let text1 = text.trim();
    console.log("trim method - "+text1); // O/P = 'ABC   DE'
}
{ //String trimStart()
    let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
console.log("trimStart method - "+text2);  //o/p = 'Hello World!   '
{ //String trimEnd()
    let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
console.log("trimEnd method - "+text2);  //o/p = 'Hello World!   '
}
}


// JavaScript String Padding - ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.
// String padStart() - The padStart() method pads a string from the start. It pads a string with another string (multiple times) until it reaches a given length.
{
    let text = "5";
    let padded = text.padStart(4,"0"); //Pad a string with "0" until it reaches the length 4:
    let paddedx = text.padStart(4,"x"); //Pad a string with "x" until it reaches the length 4:
    let pad = text.padStart(4," ");
    console.log("Pad a string with 0 "+padded);
    console.log("Pad a string with x "+paddedx);
    console.log("Pad a string with space "+pad);
    // The padStart() method is a string method. - To pad a number, convert the number to a string first.
    {
let numb = 5;
let text = numb.toString();
let padded = text.padStart(4,"0");
console.log(padded);
    }
}
{ // padEnd() - The padEnd() method pads a string from the end. It pads a string with another string (multiple times) until it reaches a given length.
    let text = "5";
    let padded = text.padEnd(4,"0");
    console.log(padded)  // The padEnd() method is a string method. To pad a number, convert the number to a string first.
{
    let numb = 5;
let text = numb.toString();
let padded = text.padEnd(4,"0");
console.log(padded)
}
}

// Extracting String Characters
/*
There are 3 methods for extracting string characters:
    charAt(position)
    charCodeAt(position)
    Property access [ ]
*/
// JavaScript String charAt()
{
    let text = "HELLO WORLD";
let char = text.charAt(6);
console.log(char);
//JavaScript String charCodeAt() - The charCodeAt() method returns the unicode of the character at a specified index in a string:
// returns a UTF-16 code (an integer between 0 and 65535).
//let text = "HELLO WORLD";
let chCodeAt = text.charCodeAt(0);
console.log("charCodeAt "+chCodeAt);

// Property Access - ECMAScript 5 (2009) allows property access [ ] on strings:
/*Property access might be a little unpredictable:
    It makes strings look like arrays (but they are not)
    If no character is found, [ ] returns undefined, while charAt() returns an empty string.
    It is read only. str[0] = "A" gives no error (but does not work!) */
//let text = "HELLO WORLD";
let propchar = text[0];
console.log("property access "+propchar);
console.log(text[0]); //Gives no error, but does not work
}


// Converting a String to an Array - If you want to work with a string as an array, you can convert it to an array.
{//JavaScript String split() - A string can be converted to an array with the split() method:
    let text = "this is a simple, test | text \"\" ok"
    const comma = text.split(",")    // Split on commas
    const spaces = text.split(" ")    // Split on spaces
    const close = text.split("|")    // Split on pipe 
// If the separator is omitted, the returned array will contain the whole string in index [0].
// If the separator is "", the returned array will be an array of single characters:
const quo = text.split("")

console.log("Actual Text - "+text);
console.log("Commas - "+comma[1]);
console.log("Space - "+spaces[0]);
console.log("Close - "+close[0]);
console.log("Quotes - "+quo[0]);
{
    let text = "Hello";
const myArr = text.split("");

text = "";
for (let i = 0; i < myArr.length; i++) {
  text += myArr[i] + "<br>"
  console.log(myArr[i]) //i'th index value of the myArr array.
}}}


//JavaScript String Search

{// JavaScript String indexOf() - The indexOf() method returns the index (position) the first occurrence of a string in a string:
    let text = "Please locate where 'locate' occurs!";
    let index = text.indexOf("locate");
    console.log("IndexOf method : "+index);
}
{ //JavaScript String lastIndexOf() - The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
    let text = "Please locate where 'locate' occurs!";
    let index = text.lastIndexOf("locate");
    console.log("LastIndexOf method : "+index);
    let indexno = text.lastIndexOf("John");
    console.log("LastIndexOf method text not found : "+indexno); //Both indexOf(), and lastIndexOf() return -1 if the text is not found
    let indextwoparams = text.indexOf("locate",15)
    console.log("Two parameters : "+indextwoparams); //Both methods accept a second parameter as the starting position for the search:

} // Both indexOf(), and lastIndexOf() return -1 if the text is not found, Both methods accept a second parameter as the starting position for the search:
{ //JavaScript String search() - The search() method searches a string for a string (or a regular expression) and returns the position of the match:
let text = "Please locate where 'locate' occurs!";
console.log(text.search("locate"));
console.log(text.search(/locate/));
}
//The two methods are NOT equal. These are the differences:
//The search() method cannot take a second start position argument.
//The indexOf() method cannot take powerful search values (regular expressions).

{//JavaScript String match() - The match() method returns an array containing the results of matching a string against a string (or a regular expression).
let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match("ain")); // Perform a search for "ain":
console.log(text.match(/ain/)); // Perform a search for "ain":
console.log(text.match(/ain/g)); // Perform a global search for "ain":
console.log(text.match(/ain/gi));  //Perform a global, case-insensitive search for "ain":
} //If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.


//JavaScript String matchAll() - The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
{
    const regexp = /t(e)(st(\d?))/g;
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll("Cats");
const textarr = [text.matchAll(regexp)];
console.log(textarr[0]);
// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
const iterators = text.matchAll(/Cats/g);
const iteratorgi = text.matchAll(/Cats/gi);
console.log(iterators);
} //matchAll() is an ES2020 feature. matchAll() does not work in Internet Explorer.

//JavaScript String includes() - The includes() method returns true if a string contains a specified value. Otherwise it returns false.
// includes() is case sensitive. includes() is an ES6 feature. includes() is not supported in Internet Explorer.
{ //Check if a string includes "world":
    let text = "Hello world, welcome to the universe.";
    console.log(text.includes("world"));
    console.log(text.includes("world", 12)); //Check if a string includes "world". Start at position 12:
}

// JavaScript String startsWith() - The startsWith() method returns true if a string begins with a specified value.
{
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello"); // return True
text.startsWith("world"); // Returns False
text.startsWith("world", 5); // A start position for the search can be specified: Returns False
text.startsWith("world", 6); //Returns true:
}

//JavaScript String endsWith() - The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:
{
let text = "John Doe"; //Check if a string ends with "Doe":
text.endsWith("Doe");
let text1 = "Hello world, welcome to the universe.";
text1.endsWith("world", 11);  //Check if the 11 first characters of a string ends with "world":
}

// JavaScript Template Literals
// Back-Tics Syntax - Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
{
    let text = `Hello World!`;
    let text1 = `He's often called "Johnny"`; // With template literals, you can use both single and double quotes inside a string:
}

//Multiline Strings - Template literals allows multiline strings:
{
let text =
`The quick
brown fox
jumps over
the lazy dog`;
}
/*Interpolation - Template literals provide an easy way to interpolate variables and expressions into strings. The method is called string interpolation.

The syntax is: ${...}
*/

{//Variable Substitutions - Template literals allow variables in strings, Automatic replacing of variables with real values is called string interpolation.
    let firstName = "John";
    let lastName = "Doe";
    
    let text = `Welcome ${firstName}, ${lastName}!`;
}

// Expression Substitution - Template literals allow expressions in strings, Automatic replacing of expressions with real values is called string interpolation.
{
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
}

// HTML Templates
{let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;}