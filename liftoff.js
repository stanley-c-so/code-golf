// -----LIFTOFF

// Given an integer "num", write code to print a countdown from num to 1. After the countdown is up, print the line 'Liftoff!'.

// SOLUTION

// iterative solution:
l=n=>{while(n>=0)console.log(n--||'Liftoff!')}

// recursive solution:
l=n=>{(console.log(n>0?n:'Liftoff!'),n&&l(n - 1))}

// TEST CASES

const test = require('./_test');
const testNum = [1];
let input, expected;
const func = l;
const lowestTest = 0 || 0;
const highestTest = 0 || Infinity;

// NOTE... these tests won't work because the problem asks for console.log instead of returns! will have to fix this at some point.
// in the meantime here are some pseudo tests:

l(5)
// 5
// 4
// 3
// 2
// 1
// 'Liftoff!'

l(1)
// 1
// 'Liftoff!'

l(0)
// 'Liftoff!'

// // Test case 1
// input = {
//   n: 5,
// };
// expected = '5' + '\n' + '4' + '\n' + '3' + '\n' + '2' + '\n' + '1' + '\n' + 'Liftoff!';
// test(func, input, expected, testNum, lowestTest, highestTest);

// // Test case 2
// input = {
//   n: 1,
// };
// expected = '1' + '\n' + 'Liftoff!';
// test(func, input, expected, testNum, lowestTest, highestTest);

// // Test case 3
// input = {
//   n: 0,
// };
// expected = 'Liftoff!';
// test(func, input, expected, testNum, lowestTest, highestTest);