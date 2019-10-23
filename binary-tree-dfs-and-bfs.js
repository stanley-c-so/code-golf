// -----BINARY TREE DEPTH FIRST SEARCH AND BREADTH FIRST SEARCH

// Write a function that takes in a callback and traverses a binary tree using DFS (in-order), invoking the callback on the value at each node.

// Then do the same using BFS.

// Note: The BST class with constructor and "insert" method are already provided. The code for this comes from AlgoExpert.

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }

  // SOLUTION

  // depth first search (in order):
  d(r,c,t){if(r!==null){this.d(r.left,c);c(r);this.d(r.right,c)};return t}

  // breadth first search:
  b(r,c,t,q=r?[r]:[]){while(q.length){let n=q.shift();c(n);if(n.left)q.push(n.left);if(n.right)q.push(n.right)};return t}

}

// TEST CASES

const test = require('./_test');
const testNum = [1];
let input, expected;
// const func = 'FUNCTION_NAME_HERE';
let func;
const lowestTest = 0 || 0;
const highestTest = 0 || Infinity;

// DEPTH FIRST SEARCH (IN ORDER)
func = (new BST).d;

// Test case 1
input = {
  BST: new BST(40)
    .insert(20)
    .insert(15)
    .insert(10)
    .insert(5)
    .insert(30)
    .insert(25)
    .insert(35)
    .insert(45),
  callback: node => input.target.push(node.value),
  target: [],
};
expected = [5, 10, 15, 20, 25, 30, 35, 40, 45];
test(func.bind(input.BST), {root: input.BST, callback: input.callback, target: input.target}, expected, testNum, lowestTest, highestTest);

// BREADTH FIRST SEARCH
func = (new BST).b;

// Test case 2
input = {
  BST: new BST(40)
    .insert(20)
    .insert(15)
    .insert(10)
    .insert(5)
    .insert(30)
    .insert(25)
    .insert(35)
    .insert(45),
  callback: node => input.target.push(node.value),
  target: [],
};
expected = [40, 20, 45, 15, 30, 10, 25, 35, 5];
test(func.bind(input.BST), { root: input.BST, callback: input.callback, target: input.target }, expected, testNum, lowestTest, highestTest);
