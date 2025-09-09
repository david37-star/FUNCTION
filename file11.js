#!/usr/bin/env node

Array.prototype.groupBy = function(fn) {
	let result = {};

	for (let i = 0; i < this.length; i++) {
		let key = fn(this[i]); //apply allback to element
		if (!result[key]) {
		    result[key] = [];

		}
			result[key].push(this[i]);
	}
	return result;
}

let nums = [1, 2, 3, 4, 5, 6];
console.log(nums.groupBy(x => x % 2));


let words = ["apple", "bat", "cat", "pear", "dog"];
console.log(words.groupBy(word => word.length));
