// -----LESS THAN ONE

// Write a function that will take a number, "num", and divide it by 2 until it's less than 1. Once num is less than 1, return num.

// SOLUTION

// recursive solution:
l=n=>n<1?n:l(n/2)

// TEST CASES

const test = require('./_test');
const testNum = [1];
let input, expected;
const func = l;
const lowestTest = 0 || 0;
const highestTest = 0 || Infinity;

// Test case 1
input = {
  n: 1,
};
expected = 0.5;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 2
input = {
  n: 25,
};
expected = 0.78125;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 3
input = {
  n: 66,
};
expected = 0.515625;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 4
input = {
  n: 87,
};
expected = 0.6796875;
test(func, input, expected, testNum, lowestTest, highestTest);