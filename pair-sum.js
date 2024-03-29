// -----PAIRSUM

// Given an array of numbers "arr" which is sorted in ascending order (least to greatest), and a separate target number, "sum", determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum. 

// SOLUTION

// naive O(n^2) solution:
//p=(a,t)=>a.some((e,i,s)=>s.slice(i+1).includes(t-e))

// optimized O(n) time O(n) space solution:
//p=(a,t,i=0,m={})=>m[a[i]]||!(m[t-a[i]]=!0)||(i===a.length?!9:p(a,t,i+1,m))

// optimized O(n) time (array must be sorted) solution:
p=(a,t,l=0,r=a.length-1)=>l>=r?!9:a[l]+a[r]===t||p(a,t,...a[l]+a[r]<t?[l+1,r]:[l,r-1])

// p(a,t,...(a[l]+a[r]<t?[l+1,r]:[l,r-1]))

// TEST CASES

const test = require('./_test');
const testNum = [1];
let input, expected;
const func = p;
const lowestTest = 0 || 0;
const highestTest = 0 || Infinity;

// Test case 1
input = {
  a: [1, 1, 2, 3, 4, 5],
  t: 7,
};
expected = true;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 2
input = {
  a: [1, 2, 3, 4, 5],
  t: 10,
};
expected = false;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 3
input = {
  a: [1, 2, 3, 7, 8],
  t: 7,
};
expected = false;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 3
input = {
  a: [1, 2, 3, 4, 5],
  t: 2,
};
expected = false;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 3
input = {
  a: [1],
  t: 1,
};
expected = false;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 3
input = {
  a: [],
  t: 2,
};
expected = false;
test(func, input, expected, testNum, lowestTest, highestTest);