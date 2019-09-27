// -----RIGHT TRIANGLE

// Create a function that returns a string representing a right triangle using '*'. The 'num' argument represents the number of rows the triangle will have.
// For example: If num is 5, return the string:
// "*****
//  ****
//  ***
//  **
//  *"
// Note: The string '\n' can be concatenated to a string to create a new line. 

// SOLUTION

// recursive solution:
r=n=>'*'.repeat(n)+(n>1?'\n'+r(n-1):'');

// TEST CASES

const test = require('./_test');
const testNum = [1];
let input, expected;
const func = r;
const lowestTest = 0 || 0;
const highestTest = 0 || Infinity;

// Test case 1
input = {
  n: 5,
};
expected = '*****' + '\n' + '****' + '\n' + '***' + '\n' + '**' + '\n' + '*';
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 2
input = {
  n: 1,
};
expected = '*';
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 3
input = {
  n: 0,
};
expected = '';
test(func, input, expected, testNum, lowestTest, highestTest);