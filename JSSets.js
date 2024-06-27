/*JavaScript Sets - https://www.w3schools.com/js/js_sets.asp

A JavaScript Set is a collection of unique values.Each value can only occur once in a Set.
The values can be of any type, primitive values or objects.

How to Create a Set
You can create a JavaScript Set by:
- Passing an array to new Set()
- Create an empty set and use add() to add values


The new Set() Method - Pass an array to the new Set() constructor:
Example
// Create a Set
const letters = new Set(["a","b","c"]);

Create a Set and add values:
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

Create a Set and add variables:
// Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);


The add() Method
Example
letters.add("d");
letters.add("e");

If you add equal elements, only the first will be saved:
Example
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");


Listing the Elements - You can list all Set elements (values) with a for..of loop:
Example
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters) {
  text += x;
}


Sets are Objects - typeof returns object:
typeof letters; // Returns object
instanceof Set returns true:
letters instanceof Set;  // Returns true
*/

/*JavaScript Set Methods - https://www.w3schools.com/js/js_set_methods.asp

The new Set() Method - Pass an array to the new Set() constructor:
Example
// Create a Set
const letters = new Set(["a","b","c"]);

The add() Method
Example
letters.add("d");
letters.add("e");

Listing Set Elements - You can list all Set elements (values) with a for..of loop:


The has() Method - The has() method returns true if a specified value exists in a set.
Example
// Create a Set
const letters = new Set(["a","b","c"]);
// Does the Set contain "d"?
answer = letters.has("d");


The forEach() Method - The forEach() method invokes a function for each Set element:
Example
// Create a Set
const letters = new Set(["a","b","c"]);

// List all entries
let text = "";
letters.forEach (function(value) {
  text += value;
})


The values() Method - The values() method returns an Iterator object with the values in a Set:
Example 1
// Create a Set
const letters = new Set(["a","b","c"]);

// Get all Values
const myIterator = letters.values();

// List all Values
let text = "";
for (const entry of myIterator) {
  text += entry;
}

Example 2
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Values
let text = "";
for (const entry of letters.values()) {
  text += entry;
}



The keys() Method - The keys() method returns an Iterator object with the values in a Set:
Note
A Set has no keys, so keys() returns the same as values().
This makes Sets compatible with Maps.

Example 1
// Create a Set
const letters = new Set(["a","b","c"]);

// Create an Iterator
const myIterator = letters.keys();

// List all Elements
let text = "";
for (const x of myIterator) {
  text += x;
}

// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters.keys()) {
  console.log(x);
}



The entries() Method - The entries() method returns an Iterator with [value,value] pairs from a Set.
Note
The entries() method is supposed to return a [key,value] pair from an object.
A Set has no keys, so the entries() method returns [value,value].
This makes Sets compatible with Maps.

Example 1
// Create a Set
const letters = new Set(["a","b","c"]);

// Get all Entries
const myIterator = letters.entries();

// List all Entries
let text = "";
for (const entry of myIterator) {
  text += entry;
}


Example 2
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Entries
let text = "";
for (const entry of letters.entries()) {
  text += entry;
}
*/

