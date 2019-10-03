// ***QUESTION 1 - MUSCLE MEMORY, CAN DO ITERATIVELY OR RECURSIVELY -> TEST BOTH

// -----LIFTOFF (THIS IS ON THE ASSESSMENT)

// Given an integer "num", write code to print a countdown from num to 1. After the countdown is up, print the line 'Liftoff!'. 

function liftoff(num){
  // YOUR CODE HERE

}

liftoff(5) // should print 
// 5 
// 4 
// 3
// 2 
// 1 
// Liftoff! 

// -----RIGHT TRIANGLE (MY CUSTOM QUESTION)

// Create a function that returns a string representing a right triangle using '*'. The 'num' argument represents the number of rows the triangle will have.
// For example: If num is 5, return the string:
// "*****
//  ****
//  ***
//  **
//  *"
// Note: The string '\n' can be concatenated to a string to create a new line. 

function rightTriangle(num) {
  // YOUR CODE HERE

};

console.log(rightTriangle(0)); // ''
console.log(rightTriangle(1)); // '*'
console.log(rightTriangle(5)); // see description

// SOLUTION:
function rightTriangle(num) {
	return '*'.repeat(num).concat(
		(num > 1)
			? '\n' + rightTriangle(num - 1)
			: ''
	);
}
function rightTriangle(num) {
  const arr = [];
  for (let i = num; i >= 1; i--) {
    arr.push('*'.repeat(i));
  }
  return arr.join('\n');
}

// -----LESS THAN ONE (HARDER)

// Write a function that will take a number, "num", and divide it by 2 until it's less than 1. Once num is less than 1, return num.

function lessThanOne(num) {
  // YOUR CODE HERE

}

console.log(lessThanOne(1)); // should be 0.5
console.log(lessThanOne(25)); // should be 0.78125
console.log(lessThanOne(66)); // should be 0.515625
console.log(lessThanOne(87)); // should be 0.6796875

// SOLUTION:
function lessThanOne(num) {
  while (num >= 1) num /= 2;
  return num;
}
function lessThanOne(num) {
  return (num < 1) ? num : lessThanOne(num / 2);
}

// -----MULTIPLICATIVE PERSISTENCE (HARDEST)

// Write a function that takes a positive integer, "num", and return its multiplicative persistence, which is the number of times you must multiply the individual digits in num until you reach a single digit.
// For example: If num is 39, then your program should return 3, because:
// 3 * 9 = 27,
// then 2 * 7 = 14, and
// finally 1 * 4 = 4 and you stop at 4, which is a single digit.
// You took 3 steps before you stopped, so you return 3.

function multiplicativePersistence(num) {
  // YOUR CODE HERE

}

console.log(multiplicativePersistence(4)) // 0
console.log(multiplicativePersistence(25)) // 2
console.log(multiplicativePersistence(39)) // 3

// SOLUTION
function multiplicativePersistence(num) {
	let result = 0;
	while (num >= 10) {
    	num = num.toString().split('').reduce((acc, digit) => acc * Number(digit), 1);
		result++;
	}
	return result;
}
function multiplicativePersistence(num) {
	return num < 10
		? 0
		: 1 + multiplicativePersistence(num.toString().split('').reduce((acc, digit) => acc * Number(digit), 1));
}


// ***QUESTION 2 - LOOPS AND/OR RECURSION, CONDITIONAL LOGIC

// -----PAIRSUM

// Given an array of numbers "arr" which is sorted in ascending order (least to greatest), and a separate target number, "sum", determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum. 

function pairSum(arr, sum){
  // YOUR CODE HERE

}

// normal test cases
console.log(pairSum([1, 1, 2, 3, 4, 5], 7) ) // true
console.log(pairSum([1, 2, 3, 4, 5], 10) ) // false
console.log(pairSum([1, 2, 3, 7, 8], 7) ) // false
console.log(pairSum([1, 2, 3, 4, 5], 2) ) // false

// edge test cases
console.log(pairSum([1], 1) ) // false
console.log(pairSum([], 2) ) // false

// -----MULTIDIMSUM (THIS IS ON THE ASSESSMENT)

// Write a method to find the sum of all the numbers in a multi-dimensional array of integers. (A multi-dimensional array contains elements that are either integers, or other multi-dimensional arrays.)

// SAMPLE OUTPUT
// Given a multi-dimensional array: a = [1, [2, [3, 4]], [5, 6]],  multiDimSum would return 21.
// We got 21 by adding up all the elements of the array: 1 + 2 + 3 + 4 + 5 + 6 = 21

// HINT
// This problem should probably take about 12 lines or less.
// You may have to use recursion.

function multiDimSum(arr){
  // YOUR CODE HERE

}

console.log(multiDimSum([1, [2, [3, 4]], [5, 6]])) // 21 
console.log(multiDimSum([10, [2, [[3], [10, 4]]], [5, 6]])) // 40 

// -----NESTINGBIRD (A GOOD ALTERNATIVE TO MULTIDIMSUM)

// Write a function that, given an array of characters and nested sub-arrays, concatenates the characters and returns the name of the bird in the nest.

// HINT
// You may have to use recursion.

function nestingBird(arr) {
  // YOUR CODE HERE

}

console.log(nestingBird(['r', 'o', ['b', ['i'], 'n']]))   // 'robin'
console.log(nestingBird([['c', ['a']], 'r', [['d']], 'i', [['n', 'a'], 'l']]))  // 'cardinal'

// -----BIGGESTNUM (A GOOD ALTERNATIVE TO MULTIDIMSUM)

// Write a function that, given a multi-dimensional array of numbers, returns the largest number.

// HINT
// You may have to use recursion.

function biggestNum(arr) {
  // YOUR CODE HERE

}

console.log(biggestNum([5, [3, 7], [-2, [0], [8, -4]]]))   // => 8
console.log(biggestNum([17, [83, 49], [43, [90], [62]]]))   // => 90

// -----MULTIDIMPRODUCTSUM

// Write a method to find the "product sum" of a multi-dimensional array of integers. (A multi-dimensional array contains elements that are either integers, or other multi-dimensional arrays.) To find the product sum of an array, add up all the elements, except that nested arrays inside the array should be summed themselves and then multiplied by their level of depth.

// SAMPLE OUTPUT
// Given a single-dimensional array: a = [1, 2, 3], multiDimProductSum would return 6 (because 1 + 2 + 3 = 6).
// Given a multi-dimensional array: a = [[[[5]]]],  multiDimProductSum would return 120 because 1*(2*(3*(4*(5)))) = 120.
// Given a multi-dimensional array: a = [1, [1], [[1]], 1],  multiDimProductSum would return 10 because 1 + 2*1 + 2*(3*1) + 1 = 10.

// HINT
// You may have to use: (i) recursion; (ii) optional arguments.

function multiDimProductSum(arr){
  // YOUR CODE HERE

}

console.log(multiDimProductSum([1, 2, 3])) // 6
console.log(multiDimProductSum([[[[5]]]])) // 120
console.log(multiDimProductSum([1, [1], [[1]], 1])) // 10
console.log(multiDimProductSum([1, [2, [3, 4]], [5, 6]])) // 69 

// SOLUTION:
function multiDimProductSum(arr, depth) {
	depth = depth || 1;
	return arr.reduce((sum, element) => {
		return sum + (
			Array.isArray(element)
				? (depth + 1) * multiDimProductSum(element, depth + 1)
				: element
		);
	}, 0);
}

// ***QUESTION 3 - ALGORITHM / PROBLEM SOLVING / LOGICAL REASONING

// ---ROTATED STRING (MY CUSTOM QUESTION)

// Write a function that takes two strings, "str1" and "str2", and returns true if str2 is a rotated version of str1, and false otherwise.

// For example, if 'ABCDE' is rotated by 1 element, the result is 'EABCD' (the E moves from the end to the beginning). If rotated again by 1 element, the result is 'DEABC', etc.

// Therefore, given inputs of 'ABCDE' and 'DEABC' the function should return true, but given 'ABCDE' and 'DEBCA' it should return false, because any rotation of 'ABCDE' will never produce 'DEBCA'.

function rotatedString(str1, str2) {
  // YOUR CODE HERE

}

console.log(rotatedString('ABCDE', 'ABC')); // false
console.log(rotatedString('ABCDE', 'ABCDE')); // true
console.log(rotatedString('ABCDE', 'CDEAB')); // true
console.log(rotatedString('ABCDE', 'CDAEB')); // false
console.log(rotatedString('FULLSTACK', 'STACKFULL')); // true
console.log(rotatedString('ACADEMY', 'DEMYACA')); // true

// SOLUTION:
function rotatedString(str1, str2) {
  return str1.length === str2.length && str1.concat(str1).includes(str2);
}

// -----VALID PARENTHESES

// Write a function that takes a string of parentheses '(' or ')', and determines if the order of the parentheses is valid (balanced). validParentheses should return true if the string is valid, and false if it's invalid.
// All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'.

function validParentheses(parens) {
  // YOUR CODE HERE

}

console.log(validParentheses( "()" )) //true
console.log(validParentheses( ")(()))" )) //false
console.log(validParentheses( "(" )) //false
console.log(validParentheses( "(())((()())())" )) //true
console.log(validParentheses("())(")) //false