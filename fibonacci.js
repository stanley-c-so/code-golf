// -----FIBONACCI

// The Fibonacci Sequence is the series of numbers:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// The next number is found by adding up the two numbers before it.

// Write a function that takes in a value, n, and returns the nth Fibonacci number.

// SOLUTION

// iterative solution:
//f=(n,a=0,b=1)=>{for(i=1;i<n;i++){[a,b]=[b,a+b]}return a}

// recursive solution with memoization:
f=(n,m={1:0,2:1})=>n<2?0:m[n]?m[n]:m[n]=f(n-1,m)+f(n-2,m)

// TEST CASES

const test = require('./_test');
const testNum = [1];
let input, expected;
const func = f;
const lowestTest = 0 || 0;
const highestTest = 0 || Infinity;

// Test case 1
input = {
  n: 1,
};
expected = 0;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 2
input = {
  n: 2,
};
expected = 1;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 3
input = {
  n: 5,
};
expected = 3;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 4
input = {
  n: 10,
};
expected = 34;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 5
input = {
  n: 100,
};
expected = 218922995834555200000;
test(func, input, expected, testNum, lowestTest, highestTest);