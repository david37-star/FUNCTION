#!/usr/bin/env node

function customMap(arr, fn) {
	return arr.map((value, index) => fn(value, index));
}
// double each number + index

let numbers = [2, 3, 4, 5];
let mapped = customMap(numbers, (x, i) => x * 2 +i);

console.log(mapped);



let nums = [4, 5, 6];
let squared = customMap(nums, (x) => x * x);
console.log(squared);

