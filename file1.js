#!/usr/bin/env node

function reverseArray(ar) {
	let reversed = [];
	for (let i =ar.length - 1; i >= 0; i--) {
		reversed.push(ar[i]);
	}
	return reversed;
}



console.log(reverseArray([1, 2, 3, 4, 5]));
