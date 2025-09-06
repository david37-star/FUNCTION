#!/usr/bin/env node


function customMap(arr, fn) {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		result.push(fn(arr[i], i));
	}
	return result;
}

let numbers = [1, 2, 3, 4, 5];

let doubled = customMap(numbers, function(num, index) {
	return num * 2;
});
console.log(doubled);

let plusIndex = customMap(numbers, (num, i) => num + i);
console.log(plusIndex);
