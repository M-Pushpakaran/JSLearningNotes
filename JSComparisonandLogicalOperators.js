// https://www.w3schools.com/js/js_comparisons.asp

/*Comparison and Logical operators are used to test for true or false.
== 	equal to
=== 	equal value and equal type
!= 	not equal
!== 	not equal value or not equal type
> 	greater than
< 	less than
>= 	greater than or equal to
<= 	less than or equal to


How Can it be Used - Comparison operators can be used in conditional statements to compare values and take action depending on the result:
EG : if (age < 18) text = "Too young to buy alcohol"; */

/* Logical Operators - 
Logical operators are used to determine the logic between the variables or values. 
&& 	and
|| 	or
! 	not

Conditional (Ternary) Operator - JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.
Syntax :- variablename = (condition) ? value1:value2 
Eg: let voteable = (age < 18) ? "Too young":"Old enough";


Comparing Different Types 
Comparing data of different types may give unexpected results. When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.
An empty string converts to 0. A non-numeric string converts to NaN which is always false.
When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.
To secure a proper result, variables should be converted to the proper type before comparison:
*/

/* The Nullish Coalescing Operator (??) - The ?? operator returns the first argument if it is not nullish (null or undefined).
Otherwise it returns the second argument. 
let name = null;
let text = "missing";
let result = name ?? text; 


The Optional Chaining Operator (?.) - The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
let name = car?.name;
// Ask for car name:
document.getElementById("demo").innerHTML = car?.name;

*/

