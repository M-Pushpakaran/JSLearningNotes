// JavaScript Arrays - An array can hold many values under a single name, and you can access the values by referring to an index number.
// Syntax: const array_name = [item1, item2, ...];
{
    const cars = ["Saab", "Volvo", "BMW"]; // It is a common practice to declare arrays with the const keyword.
}

{//Spaces and line breaks are not important. A declaration can span multiple lines:
    const cars = [
        "Saab",
        "Volvo",
        "BMW"
      ]; 
}
{  //You can also create an array, and then provide the elements:
    const cars = [];
    cars[0]= "Saab";
    cars[1]= "Volvo";
    cars[2]= "BMW";
}

// Using the JavaScript Keyword new - The following example also creates an Array, and assigns values to it:
{
    const cars = new Array("Saab", "Volvo", "BMW");
//The two examples above do exactly the same. There is no need to use new Array(). For simplicity, readability and execution speed, use the array literal method.
}

//Accessing Array Elements - You access an array element by referring to the index number:
{
    const cars = ["Saab", "Volvo", "BMW"];
    let car = cars[0];  //Note: Array indexes start with 0. [0] is the first element. [1] is the second element.
//    console.log("Accessing 0th element : "+cars);
}

// Changing an Array Element - This statement changes the value of the first element in cars: "cars[0] = "Opel";"
{
    const cars = ["Saab", "Volvo", "BMW"];
    cars[0] = "Opel";
//    console.log(cars[0])
}

// Converting an Array to a String - The JavaScript method toString() converts an array to a string of (comma separated) array values.
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let kstring = fruits.toString();
//    console.log(kstring,"Type of kstring : "+typeof(kstring));
}

// Access the Full Array - With JavaScript, the full array can be accessed by referring to the array name:
{
    const cars = ["Saab", "Volvo", "BMW"];
//    console.log(cars);
}

/* Arrays are Objects
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays. But, JavaScript arrays are best described as arrays.
Arrays use numbers to access its "elements". In this example, person[0] returns John: eg - const person = ["John", "Doe", 46];

Objects use names to access its "members". In this example, person.firstName returns John:
const person = {firstName:"John", lastName:"Doe", age:46};
*/

/* Array Elements Can Be Objects
JavaScript variables can be objects. Arrays are special kinds of objects.
Because of this, you can have variables of different types in the same Array.
You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
*/

// Array Properties and Methods - The real strength of JavaScript arrays are the built-in array properties and methods:
{
    const cars = ["Saab", "Volvo", "BMW"];
//    console.log(cars.length);   // Returns the number of elements. The length property is always one more than the highest array index.
//    console.log(cars.sort());   // Sorts the array 
}
// Accessing the First Array Element - & Accessing the Last Array Element
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruitfirst = fruits[0]; //Accessing the First Array Element
    let fruitlast = fruits[fruits.length - 1];  //Accessing the Last Array Element
}

// Looping Array Elements - One way to loop through an array, is using a for loop:
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fLen = fruits.length;

    for (let i = 0; i < fLen; i++) {
       //console.log(fruits[i]);
        }
}
// JavaScript forEach() - The forEach() array method loops through any array, executing a provided function once for each array element in ascending index order.
// This function is referred to as a callback function. Note: Arrays are collections of elements that can be of any datatype.
{
    /*array.forEach(callbackFunction);
array.forEach(callbackFunction, thisValue);
*/
    const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];
  staffsDetails.forEach((staffDetail) => {
    let sentence = `I am ${staffDetail.name} a staff of Royal Suites.`;
    //console.log(sentence);
  }); 
}

// Adding Array Elements - The easiest way to add a new element to an array is using the push() method:
{
    const fruits = ["Banana", "Orange", "Apple"];
    fruits.push("Lemon");  // Adds a new element (Lemon) to fruits.
    fruits[fruits.length] = "Lemon";  // New element can also be added to an array using the length property:, Adds "Lemon" to fruits.
}

// Adding elements with high indexes can create undefined "holes" in an array:
/* { const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits 
}*/

// Associative Arrays - 
/* Many programming languages support arrays with named indexes. Arrays with named indexes are called associative arrays (or hashes).
JavaScript does not support arrays with named indexes. In JavaScript, arrays always use numbered indexes.   */
{
    const person = [];
    person[0] = "John";
    person[1] = "Doe";
    person[2] = 46;
    person.length;    // Will return 3
    person[0];        // Will return "John" 
    { // If you use named indexes, JavaScript will redefine the array to an object. After that, some array methods and properties will produce incorrect results.
        const person = [];
        person["firstName"] = "John";
        person["lastName"] = "Doe";
        person["age"] = 46;
        person.length;     // Will return 0
        person[0];         // Will return undefined 
    }}

    /*The Difference Between Arrays and Objects - In JavaScript, arrays use numbered indexes. In JavaScript, objects use named indexes.
Arrays are a special kind of objects, with numbered indexes.
When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays. You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers. */

//JavaScript new Array() - JavaScript has a built-in array constructor new Array(). But you can safely use [] instead.
// These two different statements both create a new empty array named points: const points = new Array(); & const points = [];
{ // These two different statements both create a new array containing 6 numbers:
    const points = new Array(40, 100, 1, 5, 25, 10);{
    const points = [40, 100, 1, 5, 25, 10]; }
}

{ //The new keyword can produce some unexpected results:
// Create an array with three elements:
const points = new Array(40, 100, 1);
// Create an array with two elements:
const points1 = new Array(40, 100);
// Create an array with one element ???
const points2 = new Array(40);
}
/*
A Common Error
const points = [40];

is not the same as:
const points = new Array(40);
// Create an array with one element:
const points = [40];
// Create an array with 40 undefined elements:
const points = new Array(40);  
*/

/*
How to Recognize an Array

A common question is: How do I know if a variable is an array?

The problem is that the JavaScript operator typeof returns "object":
const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
The typeof operator returns object because a JavaScript array is an object. 

Solution 1:

To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
Array.isArray(fruits);
Solution 2:

The instanceof operator returns true if an object is created by a given constructor:
const fruits = ["Banana", "Orange", "Apple"];
fruits instanceof Array;
*/
// JS ARRAY Methods
// 1. JavaScript Array length
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let size = fruits.length; // The length property returns the length (size) of an array:
}

//2. JavaScript Array toString() - The JavaScript method toString() converts an array to a string of (comma separated) array values.
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    //console.log(fruits);
    //console.log(fruits.toString());  // Banana,Orange,Apple,Mango
}

// The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator:
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    //console.log("This is Join method - "+fruits.join(" * "));  // O/P = Banana * Orange * Apple * Mango
}

// Popping and Pushing
// JavaScript Array pop() - The pop() method removes the last element from an array: 
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    //console.log(fruits.pop());
}
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits.pop(); // The pop() method returns the value that was "popped out":
    //console.log(fruit);
}

// JavaScript Array push() - The push() method adds a new element to an array (at the end):
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Kiwi");
    
    // The push() method returns the new array length:
    const fruitsabc = ["Banana", "Orange", "Apple", "Mango"];
    let length = fruitsabc.push("Kiwi");
}

// Shifting Elements - Shifting is equivalent to popping, but working on the first element instead of the last.
// JavaScript Array shift() - The shift() method removes the first array element and "shifts" all other elements to a lower index.
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.shift();
    const fruitsqwe = ["Banana", "Orange", "Apple", "Mango"];
    let fruitwe = fruitsqwe.shift(); //The shift() method returns the value that was "shifted out":
}

// JavaScript Array unshift() - The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: 
{
    const fruitsqw = ["Banana", "Orange", "Apple", "Mango"];
    fruitsqw.unshift("Lemon");
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift("Lemon"); // The unshift() method returns the new array length:
}

// Changing Elements - Array elements are accessed using their index number:
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits[0] = "Kiwi";
    //console.log(fruits)
}

    //1.  JavaScript Array length - The length property provides an easy way to append a new element to an array:
    {
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits[fruits.length] = "Kiwi"; // The Kiwi will be added as last element in the Array.
        //console.log(fruits);
    }

// JavaScript Array delete() - 
/* 
Warning !
Array elements can be deleted using the JavaScript operator delete. Using delete leaves undefined holes in the array. Use pop() or shift() instead.
 */
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    delete fruits[0];
    //console.log(fruits);
}

// Merging (Concatenating) Arrays - The concat() method creates a new array by merging (concatenating) existing arrays:
{
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
    const myChildren = myGirls.concat(myBoys);
    //console.log(myChildren);
}
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments:

{ // Example (Merging Three Arrays)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
//console.log(myChildren);
}
// The concat() method can also take strings as arguments:
{
    const arr1 = ["Emil", "Tobias", "Linus"];
    const myChildren = arr1.concat("Peter");
    //console.log(myChildren);
}

// Flattening an Array - Flattening an array is the process of reducing the dimensionality of an array. 
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
{
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
//console.log(newArr)
const myArr2 = [1,2,3,4,5,6];
const newArr2 = myArr2.flat();
//console.log(newArr2)
}

// Splicing and Slicing Arrays - The splice() method adds new items to an array. The slice() method slices out a piece of an array.
// JavaScript Array splice() - The splice() method can be used to add new items to an array: 
{
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
}
/* The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed. The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
The splice() method returns an array with the deleted items:  */
{
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
}
{
/*Using splice() to Remove Elements
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:  
The first parameter (0) defines the position where new elements should be added (spliced in).
The second parameter (1) defines how many elements should be removed.The rest of the parameters are omitted. No new elements will be added.*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
}

// JavaScript Array slice() - The slice() method slices out a piece of an array into a new array.
// This example slices out a part of an array starting from array element 1 ("Orange"): 
// Note - The slice() method creates a new array. The slice() method does not remove any elements from the source array.
{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(1);
}

{// This example slices out a part of an array starting from array element 3 ("Apple"):
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(3);
}
// The slice() method can take two arguments like slice(1, 3). The method then selects elements from the start argument, and up to (but not including) the end argument.
{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(1, 3);
}
// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(2);
}

/*Automatic toString() - JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
This is always the case when you try to output an array.
These two examples will produce the same result: */
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.toString();
    // document.getElementById("demo").innerHTML = fruits.toString();
    const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits;
}
// Note - All JavaScript objects have a toString() method.

// JavaScript Sorting Arrays - Sorting an Arrar - The sort() method sorts an array alphabetically: 
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    var abc = fruits.sort();
    console.log(abc)
}

/* Reversing an Array - The reverse() method reverses the elements in an array. You can use it to sort an array in descending order:  */
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    let abc = fruits.reverse();
    console.log(abc);
}

/* Numeric Sort
By default, the sort() function sorts values as strings. This works well for strings ("Apple" comes before "Banana").
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.
You can fix this by providing a compare function: */
{
    const points = [40, 100, 1, 5, 25, 10];
    let kkpp = points.sort(function(a, b){return a - b}); 
    console.log(kkpp);
    let abd = points.sort(function(a, b){return b - a});  // Use the same trick to sort an array descending:
    console.log(abd);
}
{
    const abcd = [20,10,"cc",50,100, "abd", 200, 150, 20];
    console.log(abcd.sort(function(a,b){return a - b}));  // O/P =[10, 20, 'cc', 20, 50, 100, 'abd', 150, 200]
}

/*The Compare Function
The purpose of the compare function is to define an alternative sort order. The compare function should return a negative, zero, or positive value, depending on the arguments:
function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
If the result is negative, a is sorted before b. If the result is positive, b is sorted before a. If the result is 0, no changes are done with the sort order of the two values.

Example:
The compare function compares all the values in the array, two values at a time (a, b).
When comparing 40 and 100, the sort() method calls the compare function(40, 100).
The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
You can use this code snippet to experiment with numerically and alphabetically sorting: */
{
    const points = [40, 100, 1, 5, 25, 10];
    function myFunction1() {
        var cdf = points.sort(); 
        console.log("This is myFunction1 : "+cdf);
      }
    function myFunction2() {
       var abc = points.sort(function(a, b){return a - b});
       console.log("This is myFunction2 : "+abc);
      }
    myFunction1();
    myFunction2();
}

// Sorting an Array in Random Order - 
{
    const points = [40, 100, 1, 5, 25, 10];
    let randonmOrderSorting = points.sort(function(){return 0.5 - Math.random()});
    console.log(randonmOrderSorting);
}

/* The Fisher Yates Method - The above example, array.sort(), is not accurate. It will favor some numbers over the others.
The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!
In JavaScript the method can be translated to this:*/
{
    const points = [40, 100, 1, 5, 25, 10];

    for (let i = points.length -1; i > 0; i--) {
        // console.log("Val of i "+i)
      let j = Math.floor(Math.random() * (i+1));
    //   console.log("Val of j "+j)
      let k = points[i];
      points[i] = points[j];
    //   console.log("Val of i "+i)
      points[j] = k;
    //   console.log("Val of K "+k)
    }
// console.log(points)
}

// Find the Lowest (or Highest) Array Value - There are no built-in functions for finding the max or min value in an array.
// However, after you have sorted an array, you can use the index to obtain the highest and lowest values.
{ //Sorting ascending:
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b});
    // now points[0] contains the lowest value
    // and points[points.length-1] contains the highest value 
{ // Sorting descending:
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return b - a});
    // now points[0] contains the highest value
    // and points[points.length-1] contains the lowest value 
}}  // Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.

// Using Math.max() on an Array - You can use Math.max.apply to find the highest number in an array:
{
    const points = [40, 100, 1, 5, 25, 10];
    function myArrayMax(arr) {
        return Math.max.apply(null, arr);
      }
    console.log(myArrayMax(points));
}
// Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).
// Using Math.min() on an Array - You can use Math.min.apply to find the lowest number in an array:
{
    const points = [40, 100, 1, 5, 25, 10];
    function myArrayMin(arr) {
        return Math.min.apply(null, arr);
      }
      console.log(myArrayMin(points));
}  // Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).

/* My Min / Max JavaScript Methods
The fastest solution is to use a "home made" method. This function loops through an array comparing each value with the highest value found: */
{
    function myArrayMax(arr) {
        let len = arr.length;
        let max = -Infinity;
        while (len--) {
          if (arr[len] > max) {
            max = arr[len];
          }
        }
        return max;
      } 
      // This function loops through an array comparing each value with the lowest value found: 
      function myArrayMin(arr) {
        let len = arr.length;
        let min = Infinity;
        while (len--) {
          if (arr[len] < min) {
            min = arr[len];
          }
        }
        return min;
      } 
}

// Sorting Object Arrays - JavaScript arrays often contain objects:
{
    const cars = [
        {type:"Volvo", year:2016},
        {type:"Saab", year:2001},
        {type:"BMW", year:2010}
      ]; 

    // Even if objects have properties of different data types, the sort() method can be used to sort the array. The solution is to write a compare function to compare the property values:
    cars.sort(function(a, b){return a.year - b.year});
    // Comparing string properties is a little more complex:
    cars.sort(function(a, b){
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      }); 
}

/* Stable Array sort() - ES2019 revised the Array sort() method.
Before 2019, the specification allowed unstable sorting algorithms such as QuickSort.
After ES2019, browsers must use a stable sorting algorithm:
When sorting elements on a value, the elements must keep their relative position to other elements with the same value. */
{
    const myArr = [
        {name:"X00",price:100 },
        {name:"X01",price:100 },
        {name:"X02",price:100 },
        {name:"X03",price:100 },
        {name:"X04",price:110 },
        {name:"X05",price:110 },
        {name:"X06",price:110 },
        {name:"X07",price:110 }
      ];

// In the example above, when sorting on price, the result is not allowed to come out with the names in an other relative position like this:
/*X01 100
X03 100
X00 100
X03 100
X05 110
X04 110
X06 110
X07 110 */
}

// JavaScript Array Iteration - Array iteration methods operate on every array item.
// 1. JavaScript Array forEach() - The forEach() method calls a function (a callback function) once for each array element.
/*
array.forEach(function callback(currentValue, index, array) {
    // Your code here
}, thisArg);

    forEach: A method applied to the numbers array. It iterates over each element of the array and executes a provided function once for each element.
    The provided function takes three parameters:
        value: The current element being processed.
        index: The index of the current element.
        array: The array on which forEach is called (in this case, numbers).

The provided function logs a message to the console for each element, indicating the index and value of that element.
*/

{
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (value, index, array) {
  //console.log(`Index ${index}: ${value}`);
});
}

{
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + " - ";
}
//console.log(txt);
}

/* JavaScript Array map() - The map() method creates a new array by performing a function on each array element.
The map() method does not execute the function for array elements without values.
The map() method does not change the original array.
This example multiplies each array value by 2:  */
{const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
//console.log(" "+numbers2);}

/*Note that the function takes 3 arguments:
    The item value
    The item index
    The array itself
When a callback function uses only the value parameter, the index and array parameters can be omitted:  */
{
const numbers1 = [45, 20, 10, 16, 25];
const numbers3 = numbers1.map(myFunction);
function myFunction(value) {
  return value * 2;}
//console.log("3rd Array in map "+numbers3);
}

/* JavaScript Array flatMap() - ES2019 added the Array flatMap() method to JavaScript.
The flatMap() method first maps all elements of an array and then creates a new array by flattening the array. */
{
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 3);  // x value => myArr[0]
// console.log("Array flatMap : "+newArr);
}

// JavaScript Array filter() - The filter() method creates a new array with array elements that pass a test.

{
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);
function myFunction(value, index, array) {
  return value > 18;  //This example creates a new array from elements with a value larger than 18:
}
// console.log("New Array with value more than 18 - "+over18);
}

/*Note that the function takes 3 arguments:
    The item value
    The item index
    The array itself
In the example above, the callback function does not use the index and array parameters, so they can be omitted:*/
{
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);
function myFunction(value) {
  return value > 18;
}
}
// JavaScript Array reduce() - The reduce() method runs a function on each array element to produce (reduce it to) a single value.The reduce() method works from left-to-right in the array.
// The reduce() method does not reduce the original array.
{
    const numbers = [10, 20, 30];
    let sum = numbers.reduce(myFunction);
    function myFunction(total, value, index, array){ // The total (the initial value / previously returned value), The item value, The item index (optional) and The array (optional) itself
            return total+value;  }
    // console.log("sum "+sum);
}
{//The reduce() method can accept an initial value:
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);
function myFunction(total, value) {
  return total + value;} // we can use * / + -
// console.log("Reduce with initial value : "+sum);
}

/*JavaScript Array reduceRight() - The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
The reduceRight() works from right-to-left in the array. See also reduce().
The reduceRight() method does not reduce the original array.This example finds the sum of all numbers in an array:
 */
{
const numbers = [45, 4, 9, 16, 25];
let sumss = numbers.reduceRight(myFunction);
function myFunction(total, value, index, array) {
  return total + value;
console.log("Sum of reduceRight : "+sumss)}
}
/*Note that the function takes 4 arguments:
    The total (the initial value / previously returned value)
    The item value
    The item index
    The array itself
The example above does not use the index and array parameters. It can be rewritten to: */
{
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}}

// JavaScript Array every() - The every() method checks if all array values pass a test. This example checks if all array values are larger than 18:
{
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
console.log("Every method : "+allOver18);
}}
{
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);
function myFunction(value) { // index and array can be ignored
  return value > 18;
}}

// JavaScript Array some() - The some() method checks if some array values pass a test. This example checks if some array values are larger than 18:
{
    const numbers = [45, 20, 30, 10];
    let someOver18 = numbers.some(myFunction)
    function myFunction(value, index, array){  //Note that the function takes 3 arguments:
        return value > 18;
    }
    console.log("some functions: "+someOver18);
}

// JavaScript Array indexOf() - The indexOf() method searches an array for an element value and returns its position. Note: The first item has position 0, the second item has position 1, and so on.
{
const fruits = ["Apple", "Orange","Apple", "Mango"];
//let position = fruits.indexOf("Apple")+1;
let position = fruits.indexOf("Apple"); // Index of First matching element in the array will display.
console.log("Index of : "+position);
}
/*Syntax
array.indexOf(item, start)
item 	Required. The item to search for.
start 	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
Array.indexOf() returns -1 if the item is not found.
If the item is present more than once, it returns the position of the first occurrence. */

/* JavaScript Array lastIndexOf() - Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
Syntax
array.lastIndexOf(item, start)
item 	Required. The item to search for
start 	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning*/
{
const fruits = ["Apple", "Orange","Apple", "Mango"];
let position = fruits.lastIndexOf("Apple"); // Index of Last matching element in the array will display.
console.log("Last index of : "+position);
}

/* JavaScript Array find() - The find() method returns the value of the first array element that passes a test function.
This example finds (returns the value of) the first element that is larger than 18:*/
{
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
function myFunction(value, index, array){ // The function takes 3 arguments: find() is not supported in Internet Explorer.
    return value > 19;
console.log("Find method: "+first);
}}

/* JavaScript Array findIndex() - The findIndex() method returns the index of the first array element that passes a test function.
This example finds the index of the first element that is larger than 18: */
{
const numbers = [4, 9, 16, 25, 29, 50];
let valueabc = numbers.findIndex(myFunction);
function myFunction(value, index, array){
    return value > 18;}
console.log("Find index val: "+valueabc);}
}

/*JavaScript Array.from() - The Array.from() method returns an Array object from any object with a length property or any iterable object. */
// Create an Array from a String: from() is not supported in Internet Explorer.
Array.from("ABCDEFG");

/* JavaScript Array Keys() - The Array.keys() method returns an Array Iterator object with the keys of an array.*/
// Create an Array Iterator object, containing the keys of the array:
{const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = "";
const keys = fruits.keys();
for (let x of keys) {
  text += x + " ";}
console.log("  "+keys);
}

/* JavaScript Array entries() - The entries() method returns an Array Iterator object with key/value pairs:
[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]
The entries() method does not change the original array. */
{const fruits = ['apple', 'banana', 'cherry'];

// Using for...of loop with entries()
for (const [index, value] of fruits.entries()) {
  console.log(`Index: ${index}, Value: ${value}`);
}}

/*JavaScript Array includes()
ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
Syntax
array.includes(search-item)
Array.includes() allows to check for NaN values. Unlike Array.indexOf().
 */
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.includes("Mango"); // is true
}

/*JavaScript Array Spread (...) - The ... operator expands an iterable (like an array) into more elements:  */
{
    const q1 = ["Jan", "Feb", "Mar"];
    const q2 = ["Apr", "May", "Jun"];
    const q3 = ["Jul", "Aug", "Sep"];
    const q4 = ["Oct", "Nov", "May"];
    
    const year = [...q1, ...q2, ...q3, ...q4];
    console.log(year);
}

// JavaScript Array Const - It has become a common practice to declare arrays using const:  
{ // Cannot be Reassigned - An array declared with const cannot be reassigned:
    const cars = ["Saab", "Volvo", "BMW"];
    //cars = ["Toyota", "Volvo", "Audi"];    // ERROR
}
/*Arrays are Not Constants - The keyword const is a little misleading.
It does NOT define a constant array. It defines a constant reference to an array.
Because of this, we can still change the elements of a constant array.
Elements Can be Reassigned
You can change the elements of a constant array: */
{
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
console.log("Cars after push: "+cars);
}

/*
Assigned when Declared - JavaScript const variables must be assigned a value when they are declared:
Meaning: An array declared with const must be initialized when it is declared. Using const without initializing the array is a syntax error:

Example - This will not work:
const cars;
cars = ["Saab", "Volvo", "BMW"];

Arrays declared with var can be initialized at any time. You can even use the array before it is declared:
Example - This is OK:
cars = ["Saab", "Volvo", "BMW"];
var cars;
*/
/*Const Block Scope - An array declared with const has Block Scope.
An array declared in a block is not the same as an array declared outside the block:
*/
{
    const cars = ["Saab", "Volvo", "BMW"];
    // Here cars[0] is "Saab"
    {
      const cars = ["Toyota", "Volvo", "BMW"];
      // Here cars[0] is "Toyota"
    }
    // Here cars[0] is "Saab" 
}
// An array declared with var does not have block scope:
{
    var cars = ["Saab", "Volvo", "BMW"];
    // Here cars[0] is "Saab"
    {
      var cars = ["Toyota", "Volvo", "BMW"];
      // Here cars[0] is "Toyota"
    }
    // Here cars[0] is "Toyota" 
}

//Redeclaring Arrays - Redeclaring an array declared with var is allowed anywhere in a program:
{
    var cars = ["Volvo", "BMW"];   // Allowed
    var cars = ["Toyota", "BMW"];  // Allowed
    cars = ["Volvo", "Saab"];      // Allowed
}
// Redeclaring or reassigning an array to const, in the same scope, or in the same block, is not allowed:
{
    var cars = ["Volvo", "BMW"];     // Allowed
    const cars = ["Volvo", "BMW"];   // Not allowed
    {
      var cars = ["Volvo", "BMW"];   // Allowed
      const cars = ["Volvo", "BMW"]; // Not allowed
    }
}
// Redeclaring or reassigning an existing const array, in the same scope, or in the same block, is not allowed:
{
    const cars = ["Volvo", "BMW"];   // Allowed
    const cars = ["Volvo", "BMW"];   // Not allowed
    var cars = ["Volvo", "BMW"];     // Not allowed
    cars = ["Volvo", "BMW"];         // Not allowed
    
    {
      const cars = ["Volvo", "BMW"]; // Allowed
      const cars = ["Volvo", "BMW"]; // Not allowed
      var cars = ["Volvo", "BMW"];   // Not allowed
      cars = ["Volvo", "BMW"];       // Not allowed
    }
}
// Redeclaring an array with const, in another scope, or in another block, is allowed:
{
    const cars = ["Volvo", "BMW"];   // Allowed
    {
      const cars = ["Volvo", "BMW"]; // Allowed
    }
    {
      const cars = ["Volvo", "BMW"]; // Allowed
    }
}