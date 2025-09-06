#!/usr/bin/env node

function secondLargest(arr) {
	if (arr.length < 2) {
		return null; //not enough element
	}
	let first = -Infinity, second = -Infinity
	for (let num of arr) {
		if (num > first) {
			second = first;
			first = num
		} else if (num > second && num < first) {
			second = num;
		}
	}
	return second === -Infinity ? null : second;

}



console.log(secondLargest([1, 2, 3, 4, 7, 89, 78]));
