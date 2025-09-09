#!/usr/bin/env node

function customFilter(arr, fn) {
	return arr.filter((value, index) => fn(value, index));
}

let numbers = [1, 2, 3, 4, 5, 6];
let even = customFilter(numbers, (x) => x % 2 ===0);

//filter numbers greater than thgeir index


let nums = [5, 1, 3, 7, 2]
let result = customFilter(nums, (x, i) => x > i);
console.log(result);
