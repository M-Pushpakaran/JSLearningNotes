/*JavaScript if, else, and else if

https://www.w3schools.com/js/js_if_else.asp

Conditional Statements - Conditional statements are used to perform different actions based on different conditions.
Very often when you write code, you want to perform different actions for different decisions.
You can use conditional statements in your code to do this.
In JavaScript we have the following conditional statements:
- Use if to specify a block of code to be executed, if a specified condition is true
- Use else to specify a block of code to be executed, if the same condition is false
- Use else if to specify a new condition to test, if the first condition is false
- Use switch to specify many alternative blocks of code to be executed
*/
// if statement - Use this to specify a block of JS code to be executed when the condition is TRUE.
/*Syntax - 
if (condition) {//  block of code to be executed if the condition is true} 
Note that if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.
Eg:
if (hour < 18) {
  greeting = "Good day";
} */

/*
The else Statement - Use the else statement to specify a block of code to be executed if the condition is false.
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

Eg:
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
*/

/*The else if Statement - Use the else if statement to specify a new condition if the first condition is false.
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

Eg:
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
*/


/* 
JavaScript Switch Statement - The switch statement is used to perform different actions based on different conditions.
Use the switch statement to select any one of many code blocks to be executed.

Syntax:

switch (expression){
  case x:
    // code block
  break;
  case y:
    // code block
  break;
  default:
    // code block
  }
The switch expression is evaluated once. The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed. If there is no match, the default code block is executed.
*/
//example
/* The getDay() method returns the weekday as a number between 0 - 6 (Sun = 0, Mon = 1, Tue = 2).
This example uses the weekday number to calculate the weekday name:
 
switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
  break;
  case 1:
    day = 'Monday';
  break;
  case 2:
    day = 'Tuesday';
  break;
  case 3:
    day = "Wedenesday";
  break;
  case 4:
    day = 'Thursday';
  break;
  case 5:
    day = 'Friday';
  break;
  case 6:
    day = 'Saturday';
  
} */

/* The Break keyword - When JS reaches a break keyword, it breaks out of the switch block. This will stop execution inside switch block. It is not necessary to break the last block
in a switch case the block ends there anyway.
Note: If you omit the break statement the next case will be executed even if the evaluation doesnot match the case.

The default keyword - The default keyword is specifies the code to run if there is no case match:
Eg:
The getDay() method returns the weekday as number between 0 - 6, If today is saturday (6) or sunday (0) write a default message.

switch (new Date().getDay()){
  case 6:
    text = 'Today is Saturday';
    break;
  case 0:
    text = 'Today is Sunday';
    break;
  default:
    text = 'Looking forward to the weekend';
  }

-- The default case does not have to be the last case in a switch block:

switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}

//If default is not the last case in the switch block, remember to end the default case with a break.
*/

/* Common Code Blocks - Sometimes you will want different switch cases to use the same code.
-In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:
switch (new Date().getDay()){
  case 0:
  case 6:
    text = 'Weekend';
    break;
  case 4:
  case 5:
    text = 'Soon to be weekend';
    break;
  default:
    text = 'Looking for weekend';
}
*/

/* Switching details
If multiple cases matches a case value, the first case is selected.
If no matching cases found the program continues to the default label.
If no default label is found, the program continues to the statement(s) after the switch.
 */
let a = 5;
let b = 8;
let text;
switch (true){
  case a>b:
    text = 'a is bigger';
    break;
  case b>a:
    text = 'b is bigger';
    break;
  default:
    text = 'a = b'
}

console.log(text); 

/* Strict Comparison - Switch cases use strict comparisan (===), The values must be same type to match. A strict comparison can only be true if the operands are of the same type. 
In this example there will be no match for x:
let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
 */