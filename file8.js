#!/usr/bin/env node

function customReduce(nums, fn, init) {
	let val = init

	for (let i = 0; i < nums.length; i++) {
		val = fn(val, nums[i]);
	}
	return val;
}

let numbers = [1, 2, 3, 4, 5];
let sum = customReduce(numbers, (acc, curr) => acc + curr, 0);
console.log(sum);


//handle empty array

console.log(customReduce([], (acc, curr) => acc + curr, 100));
