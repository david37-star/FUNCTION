#!/usr/bin/env node


Array.prototype.last = function () {
	if (this.length ===0) {
		return -1;
	}
	return this[this.length - 1];
};


let num1 = [10, 20, 30];
console.log(num1.last());

let num2 = [];
console.log(num2.last());
