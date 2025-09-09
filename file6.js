#!/usr/bin/env node

function longestConsecutive(arr) {
	if (arr.length === 0) return 0;

	let numSet = new Set(arr);
	let longest = 0;

	for (let num of numSet) {
		if(!numSet.has(num-1)) {
			let currentNum = num;
			let streak =  1;

			while (numSet.has(currentNum + 1)) {
				currentNum++;
				streak++;
			}
			longest = Math.max(longest, streak);
		}
	}
	return longest;
}



console.log(longestConsecutive([100, 81, 90, 82, 88, 57, 657]));
