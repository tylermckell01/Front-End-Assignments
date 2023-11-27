// Write a program that takes an array of words and returns the longest word.
// ['a'. 'b', 'cc'] => 'cc'

// function longWord(array) {
//   let longest = array[0];

//   for (let x of array) {
//     if (x.length > longest.length) {
//       longest = x;
//     }
//   }
//   return longest;
// }

// console.log(longWord(["x", "b", "cc"]));

// Write a program that swaps the first and last characters of a string.
// 'ryan' => 'nyar'

// function swapFirstLast(string) {
//   let firstChar = string[0];
//   let lastChar = string[string.length - 1];

//   let swappedString = lastChar + string.slice(1, -1) + firstChar;

//   return swappedString;
// }

// console.log(swapFirstLast("ryan"));

// Write a program that finds the sum of a list of numbers.
// [1, 2, 3] => 6

// function addNum(array) {
//   let sum = 0;

//   for (let x of array) {
//     sum += x;
//   }
//   return sum;
// }
// console.log(addNum([1, 3, 5]));

// Combine two arrays by alternatingly taking elements from each at every iteration.
// EX: [1, 2, 3], [4, 5, 6] => [1, 4, 2, 5, 3, 6]

// Create a title case program
// EX: "I am a sentence" => "I Am A Sentence"

// function upperCase(string) {
//   let splitString = string.split(" ");
//   let finished = [];

//   for (let x of splitString) {
//     let item = x[0].toUpperCase() + x.slice(1);
//     finished.push(item);
//   }
//   console.log(finished.join(" "));
// }

// upperCase("i am a sentence");

// Return longest word in a string
// EX: "This string has several different values" => "different"

// Write a program that takes a string and returns the letters in alphabetical order
// EX: "Hi there" => "eehhirt"

// Write a program that returns extracted values from an array using specified indices and puts them into a new array.
// ['a', 'b', 'c', 'd'], [1, 3] => ['b', 'd']
// ['a', 'b', 'c', 'd'] is the original code.
// [1, 3] is the specified indices fo the array (index 1 and index 3)
// [b, d] is the new array returned from the specified indices.

// Complete the following steps:
// Create an object name 'user'. Give the object 2 (two) properties named userName and activeStatus
// the userName property should take any string value.
// the starter (or default) for the activeStatus property should be set to 'away'.

// Write an arrow function
// that changes the activeStatus to 'active'
// returns an interpolated string that contains the userName and activeStatus values.
// login(user) => 'ryan is active'

// Note: Use string interpolation. Avoid hardcoding this.

// Write a function that takes a base value and an exponent and will return the product (power).
// pow(4,2) => 16

// Note: No outside of pre-built functions and the '**' exponent operator is not allowed.
