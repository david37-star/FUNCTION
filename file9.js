#!/usr/bin/env node

function chunkArray(arr, size) {
	if (size <= 0) return []; //edge case
	let result = [];

		for (let i = 0; i < arr.length; i += size) {
			let chunk = arr.slice(i, i + size);
			result.push(chunk);
		}

		return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
