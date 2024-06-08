// JavaScript Date Objects - https://www.w3schools.com/js/js_dates.asp
/* 
const d = new Date();
const d = new Date("2022-03-25");
console.log("Date of d: "+d);  //Date of d: Mon Nov 27 2023 18:41:47 GMT+0530 (India Standard Time)
console.log("Date of e: "+e); // Date of e: Fri Mar 25 2022 05:30:00 GMT+0530 (India Standard Time)
Note
Date objects are static. The "clock" is not "running".
The computer clock is ticking, date objects are not.
*/

/* Creating Date Objects - Date objects are created with the new Date() constructor.
There are 9 ways to create a new date object:
new Date() - new Date() creates a date object with the current date and time:
new Date(date string) - 
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)
 */
//1. new Date() creates a date object with the current date and time:
const a = new Date();
//2. new Date(date string) creates a date object from a date string:
const b = new Date("October 13, 2014 11:13:00");
const bc = new Date("2022-03-25");
//3. new Date(year, month, ...) - new Date(year, month, ...) creates a date object with a specified date and time.7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
const c = new Date(2018, 11, 24, 10, 33, 30, 0); // Note- JavaScript counts months from 0 to 11: January = 0. December = 11.
//Specifying a month higher than 11, will not result in an error but add the overflow to the next year: 
const cd = new Date(2018, 15, 24, 10, 33, 30);
const cde = new Date(2019, 3, 24, 10, 33, 30); //both are same
// Specifying a day higher than max, will not result in an error but add the overflow to the next month:
const bcd = new Date(2018, 5, 35, 10, 33, 30);
const bcde = new Date(2018, 6, 5, 10, 33, 30); //both are same

// 6 numbers specify year, month, day, hour, minute, second:
const sixD = new Date(2018, 11, 24, 10, 33, 30);
// 5 numbers specify year, month, day, hour, and minute:
const FiveD = new Date(2018, 11, 24, 10, 33);
// 4 numbers specify year, month, day, and hour:
const Fourd = new Date(2018, 11, 24, 10);
// 3 numbers specify year, month, and day:
const ThreeD = new Date(2018, 11, 24);
// 2 numbers specify year and month:
const Twod = new Date(2018, 11);

// You cannot omit month. If you supply only one parameter it will be treated as milliseconds. const d = new Date(2018);


//Previous Century - One and two digit years will be interpreted as 19xx:
const towDigitYear = new Date(99, 11, 24);
const OneDigitYear = new Date(9, 11, 24);
/*
JavaScript Stores Dates as Milliseconds - JavaScript stores dates as number of milliseconds since January 01, 1970.
Zero time is January 01, 1970 00:00:00 UTC. One day (24 hours) is 86 400 000 milliseconds. Now the time is: 1701090572521 milliseconds past January 01, 1970
 */

// 4.new Date(milliseconds) creates a new date object as milliseconds plus zero time:
//01 January 1970 plus 100 000 000 000 milliseconds is:
const d = new Date(100000000000);
//January 01 1970 minus 100 000 000 000 milliseconds is:
const dc = new Date(-100000000000);
//January 01 1970 plus 24 hours is:
const DatePlusOneDay = new Date(24 * 60 * 60 * 1000);
// or
const DatePlusOneDayd = new Date(86400000);
//01 January 1970 plus 0 milliseconds is:
const ZeroWithd = new Date(0);
//console.log(ZeroWithd)

/*Displaying Dates - JavaScript will (by default) output dates using the toString() method. This is a string representation of the date, including the time zone.
The format is specified in the ECMAScript specification: Mon Nov 27 2023 18:39:32 GMT+0530 (India Standard Time) 
When you display a date object in HTML, it is automatically converted to a string, with the toString() method. */
const dateForDisplay = new Date();
const dateDisplayK = dateForDisplay.toString()
console.log("Date Display : "+dateDisplayK);

// The toDateString() method converts a date to a more readable format:
const TodateOfmethod = new Date();
console.log(d.toDateString()); //Sat Mar 03 1973

// The toUTCString() method converts a date to a string using the UTC standard:
const UTCTimedate = new Date();
console.log(d.toUTCString()); //Sat, 03 Mar 1973 09:46:40 GMT

// The toISOString() method converts a date to a string using the ISO standard:
const toISOstringd = new Date();
console.log(d.toISOString());

/* JavaScript Date Formats - https://www.w3schools.com/js/js_date_formats.asp

JavaScript Date Input

There are generally 3 types of JavaScript date input formats:
Type 	    Example
ISO Date 	"2015-03-25" (The International Standard)
Short Date 	"03/25/2015"
Long Date 	"Mar 25 2015" or "25 Mar 2015"

The ISO format follows a strict standard in JavaScript.
The other formats are not so well defined and might be browser specific.
 

JavaScript Date Output - Independent of input format, JavaScript will (by default) output dates in full text string format:
Thu Nov 30 2023 08:23:30 GMT+0530 (India Standard Time)

JavaScript ISO Dates - ISO 8601 is the international standard for the representation of dates and times.
The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:
Example (Complete date)*/
const IsoDateFormatYMD = new Date("2015-03-25");
/*The computed date will be relative to your time zone.
Depending on your time zone, the result above will vary between March 24 and March 25.
*/

// ISO Dates (Year and Month) - ISO dates can be written without specifying the day (YYYY-MM):
const IsoDateYearAndMonth = new Date("2015-03");  //Time zones will vary the result above between February 28 and March 01.

// ISO Dates (Only Year) - ISO dates can be written without month and day (YYYY):
const IsoDateYearOnly = new Date("2023"); //Time zones will vary the result above between December 31 2022 and January 01 2023.

// ISO Dates (Date-Time) - ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
const IsoDateWithTime = new Date("2015-03-25T12:00:00Z"); //UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).
// Date and time is separated with a capital T. UTC time is defined with a capital letter Z. If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:
const IsoDateAndTimeWithoutUTC = new Date("2015-03-25T12:00:00-06:30");  //Omitting T or Z in a date-time string can give different results in different browsers.

/*Time Zones
When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.
When getting a date, without specifying the time zone, the result is converted to the browser's time zone.
In other words: If a date/time is created in GMT (Greenwich Mean Time), the date/time will be converted to CDT (Central US Daylight Time) if a user browses from central US.
 */

// JavaScript Short Dates - Short dates are written with an "MM/DD/YYYY" syntax like this:
const ShortDateExample = new Date ("03/25/2023");

const ShortDateExampleTwo = new Date("2015-3-25"); // In some browsers, months or days with no leading zeroes may produce an error: 
const ShortDateExampleThree = new Date("2015/03/25"); //The behavior of "YYYY/MM/DD" is undefined. Some browsers will try to guess the format. Some will return NaN.
const ShortDateExampleFour = new Date("25-03-2015"); //The behavior of  "DD-MM-YYYY" is also undefined. Some browsers will try to guess the format. Some will return NaN.

// JavaScript Long Dates - Long dates are most often written with a "MMM DD YYYY" syntax like this:
const LongDateExample = new Date("Mar 25 2015"); 
const LongDateExampleTwo = new Date("25 Mar 2015"); //Month and day can be in any order:
const LongdateExamplThree = new Date("March 25 2015"); // And, month can be written in full (January), or abbreviated (Jan):
const LongDateExampleFour = new Date("January, 25, 2015"); //Commas are ignored. Names are case insensitive:

// Date Input - Parsing Dates - If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
// Date.parse() returns the number of milliseconds between the date and January 1, 1970:
let msec = Date.parse("25 Jan 2023");  //let msec = Date.parse("March 21, 2012"); console.log(msec);

// You can then use the number of milliseconds to convert it to a date object: You can then use the number of milliseconds to convert it to a date object:
const DateFromParsedmsec = new Date(msec);

// JavaScript Get Date Methods - https://www.w3schools.com/js/js_date_methods.asp
/*
The new Date() Constructor - In JavaScript, date objects are created with new Date(). new Date() returns a date object with the current date and time.*/
const simpleeDate = new Date();
/*Date Get Methods
Method 	Description
getFullYear() 	Get year as a four digit number (yyyy)
getMonth() 	Get month as a number (0-11)
getDate() 	Get day as a number (1-31)
getDay() 	Get weekday as a number (0-6)
getHours() 	Get hour (0-23)
getMinutes() 	Get minute (0-59)
getSeconds() 	Get second (0-59)
getMilliseconds() 	Get millisecond (0-999)
getTime() 	Get time (milliseconds since January 1, 1970)

Note 1
The get methods above return Local time.
Universal time (UTC) is documented at the bottom of this page.

Note 2
The get methods return information from existing date objects.
In a date object, the time is static. The "clock" is not "running".
The time in a date object is NOT the same as current time.*/

// The getFullYear() Method - The getFullYear() method returns the year of a date as a four digit number:
/*const dateWithFullYear = new Date();  //const d = new Date("2021-03-25");
console.log(dateWithFullYear);
console.log("After conversion of date: "+dateWithFullYear.getFullYear());  //After conversion of date: 2023*/

// The getMonth() Method - The getMonth() method returns the month of a date as a number (0-11). In JavaScript, January is month number 0, February is number 1, ...Finally, December is month number 11.
/*const dateWithGetMonth = new Date();  //const d = new Date("2021-03-25");
console.log(dateWithGetMonth);
console.log("Date after get month method: "+dateWithGetMonth.getMonth()); //Date after get month method: 11 */
// You can use an array of names to return the month as a name:
/* const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const datewithMMonth = new Date("2021-4-25");
let month = months[datewithMMonth.getMonth()];
console.log("Month in char : "+month);

const datewithMonthMM = new Date();
let monthh = months[datewithMonthMM.getMonth()]; //December
console.log("2nd Month: "+monthh)*/

/*The getDate() Method - The getDate() method returns the day of a date as a number (1-31):
const dateWithGetDateMethod = new Date(); //const d = new Date("2021-03-25");
console.log("Get date method: "+dateWithGetDateMethod.getDate()); */ //Get date method: 27

/*The getHours() Method - The getHours() method returns the hours of a date as a number (0-23):
const dateWithGetHoursMethod = new Date();
console.log("Get hours method: "+dateWithGetHoursMethod.getHours());
console.log("Get UTC hours method: "+dateWithGetHoursMethod.getUTCHours()); */

/*The getMinutes() Method - The getMinutes() method returns the minutes of a date as a number (0-59):
const dateWithGetMinutesMethod = new Date(); //const d = new Date("2021-03-25");
console.log("Date with Get Minutes method : "+dateWithGetMinutesMethod.getMinutes()); */

/*The getSeconds() Method - The getSeconds() method returns the seconds of a date as a number (0-59):
const dateWithGetSeconds = new Date(); //const d = new Date("2021-03-25");
console.log("Get Seconds method: "+dateWithGetSeconds.getSeconds()); //Get Seconds method: 9*/

/*The getMilliseconds() Method - The getMilliseconds() method returns the milliseconds of a date as a number (0-999):
const dateWithGetMilliseconds = new Date();
console.log("Get Milliseconds : "+dateWithGetMilliseconds.getMilliseconds()); //Get Milliseconds : 287 */

/*The getDay() Method - The getDay() method returns the weekday of a date as a number (0-6).
Note - In JavaScript, the first day of the week (day 0) is Sunday. Some countries in the world consider the first day of the week to be Monday.
const dateWithGetDay = new Date();
console.log("Date Get Day Method : "+dateWithGetDay.getDay()); //Date Get Day Method : 3 */

// You can use an array of names, and getDay() to return weekday as a name:
/*const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayInChar = new Date();
let dayd = days[dayInChar.getDay()];
console.log(dayd); //Wednesday */

/*The getTime() Method - The getTime() method returns the number of milliseconds since January 1, 1970:
const dateWithGetTime = new Date(); // const d = new Date("1970-01-01");  // const d = new Date("2021-03-25");
console.log("Get Time Method: "+dateWithGetTime.getTime()); //Get Time Method: 1703686662968 */
// console.log(dateWithGetTime.getTime().toString()) - Check conversion to the date

/*//The Date.now() Method - Date.now() returns the number of milliseconds since January 1, 1970.
let DateNow = Date.now()
console.log("Date Now O/P: "+DateNow);
const minutes = 1000 * 60;
const hours = minutes * 60;
const days = hours * 24;
const years = days * 365;

let yearss = Math.round(Date.now()/years)
console.log("Year: "+yearss);
console.log(typeof(yearss));
console.log(yearss+1970); //2024

//Date.now() is a static method of the Date object. You cannot use it on a date object like myDate.now(). The syntax is always Date.now(). */

/* UTC Date Get Methods
Method 	Same As 	Description
getUTCDate() 	getDate()	Returns the UTC date
getUTCFullYear() 	getFullYear()	Returns the UTC year
getUTCMonth() 	getMonth()	Returns the UTC month
getUTCDay() 	getDay()	Returns the UTC day
getUTCHours() 	getHours()	Returns the UTC hour
getUTCMinutes() 	getMinutes()	Returns the UTC minutes
getUTCSeconds() 	getSeconds()	Returns the UTC seconds
getUTCMilliseconds() 	getMilliseconds()	Returns the UTC milliseconds 

UTC methods use UTC time (Coordinated Universal Time). UTC time is the same as GMT (Greenwich Mean Time). The difference between Local time and UTC time can be up to 24 hours.*/

/* The getTimezoneOffset() Method - The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:
const date = new Date();
let diff = date.getTimezoneOffset();
console.log(diff); // -330 */

/* JavaScript Set Date Methods - https://www.w3schools.com/js/js_date_methods_set.asp
Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.
setDate() - Set the day as a number (1-31)
setFullYear() - Set the year of a date object (optionally month and day)
setHours() - Set the hour (0-23)
setMilliSeconds() - Set the milliseconds (0-999)
setMinutes() - Set the minutes (0-59)
setMonths() - Set the month (0-11)
setSeconds() - Set the seconds (0-59)
setTime() - Set the time (Milliseconds since January 1 1970)
*/

/* The setFullYear() -
const dateSetFullYearMethod = new Date();
dateSetFullYearMethod.setFullYear(2020); //The setFullYear() method can optionally set month and day:  dateSetFullYearMethod.setFullYear(2020,02,03);
console.log("Set Full Year Method output: ", dateSetFullYearMethod); 

// The setMonth() - 
const dateSetMonthMethod = new Date();
//console.log(dateSetMonthMethod);
dateSetMonthMethod.setMonth(6);
console.log(dateSetMonthMethod); 

// The setDate() - The setDate() method can also be used to add days to a date, If adding days shifts the month or year, the changes are handled automatically by the Date object.
const dateSetDateMethod = new Date();
dateSetDateMethod.setDate(31);
console.log("Changing the date with setDate method: ",dateSetDateMethod);
dateSetDateMethod.setDate(dateSetDateMethod.getDate()+1);
console.log("Current date + days : ",dateSetDateMethod); 

//The setHours() method -
const dateSetHoursMethod = new Date();
dateSetHoursMethod.setHours(1);
console.log(dateSetHoursMethod);
dateSetHoursMethod.setHours(dateSetHoursMethod.getHours()+2);
console.log("After adding hours with current time: ",dateSetHoursMethod);

// The setMinutes() method - The setMinutes() method sets the minutes of a date object (0-59):
const dateSetMinutesMethod = new Date();
dateSetMinutesMethod.setMinutes(30);
console.log(dateSetMinutesMethod);
dateSetMinutesMethod.setMinutes(dateSetMinutesMethod.getMinutes()+20);
console.log("After Adding minutes: ",dateSetMinutesMethod);

// The setSeconds() method - sets the seconds of a date object (0-59):
const dateSetSecondsMethod = new Date();
dateSetSecondsMethod.setSeconds(22);
console.log(dateSetSecondsMethod);
dateSetSecondsMethod.setSeconds(dateSetSecondsMethod.getSeconds()+5);
console.log("Adding seconds: ",dateSetSecondsMethod); */

/* Compare Dates - Dates can easily compared.*/
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100,8,25);

if(someday < today){
    console.log("Today is greater than 2100 Mar 8th: ", today);
    }
    else{
        console.log("Today is lesser than 2100 Mar 8th: ", today);
    }