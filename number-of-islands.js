// -----NUMBER OF ISLANDS

// Given a binary matrix (2D array) of 1s (land) and 0s (water), implement a function numIslands to count the number of islands. An island is a block of land surrounded by water. It can be formed by connecting adjacent lands horizontally or vertically, but NOT diagonally. You may assume all four edges of the grid are all surrounded by water.

//[[1, 1, 1, 1, 0],
// [1, 1, 0, 1, 0],
// [1, 1, 0, 0, 0],
// [0, 0, 0, 0, 0]]
// should return 1

//[[1, 1, 0, 0, 0],
// [1, 1, 0, 0, 0],
// [0, 0, 1, 0, 0],
// [0, 0, 0, 1, 1]]
// should return 3

// SOLUTION

// recursive (DFS) solution:
//i=(g,n=0)=>{h=(r,c)=>{if(r<0||r==g.length||c<0||c==g[0].length||!g[r][c]||!g[r][c]){return}g[r][c]=0;h(r+1,c);h(r-1,c);h(r,c+1);h(r,c-1)};for(r=0;r<g.length;r++){for(c=0;c<g[0].length;c++){if(g[r][c]){n++;h(r,c)}}}return n}

// iterative (BFS) solution:
i=(g,n=0)=>{h=(r,c)=>{q=[[r,c]];while(q.length){[R,C]=q.shift();if(R>=0&&R<g.length&&C>=0&&C<g[0].length&&g[R][C]){g[R][C]=0;q.push([R+1,C]);q.push([R-1,C]);q.push([R,C+1]);q.push([R,C-1]z)}}};for(r=0;r<g.length;r++){for(c=0;c<g[0].length;c++){if(g[r][c]){n++;h(r,c)}}}return n}

// TEST CASES

const test = require('./_test');
const testNum = [1];
let input, expected;
const func = i;
const lowestTest = 0 || 0;
const highestTest = 0 || Infinity;

// Test case 1
input = {
  g: [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
};
expected = 1;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 2
input = {
  g: [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ],
};
expected = 3;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 3
input = {
  g: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
};
expected = 0;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 4
input = {
  g: [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ],
};
expected = 1;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 5
input = {
  g: [
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
  ],
};
expected = 1;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 6
input = {
  g: [
    [1, 0, 1, 0, 1],
  ],
};
expected = 3;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 7
input = {
  g: [
    [0, 0, 0, 1, 0],
  ],
};
expected = 1;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 8
input = {
  g: [
    [1],
  ],
};
expected = 1;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 9
input = {
  g: [
    [0],
  ],
};
expected = 0;
test(func, input, expected, testNum, lowestTest, highestTest);

// Test case 10
input = {
  g: [
    [],
  ],
};
expected = 0;
test(func, input, expected, testNum, lowestTest, highestTest);