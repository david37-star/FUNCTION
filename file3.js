#!/usr/bin/env node


function countOccurence(arr) {
	let counts = {};
	for (let i = 0; i < arr.length; i++) {
		let element = arr[i];

		if (counts[element]) {
			counts[element] += 1;
		} else {
			counts[element] = 1
		}
	}
		return counts
}


console.log(countOccurence([1, 2, 2, 2, 3, 5, 6, 7, 8]));
