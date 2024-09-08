/**
 * Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.
 *
 * Link: https://takeuforward.org/arrays/find-the-missing-number-in-an-array/
 */

const find_missing = (list) => {
	let len = list.length,
		xorN = 0,
		xorList = 0;

	for (let i = 0; i < len; i++) {
		xorN ^= i + 1;
		xorList ^= list[i];
	}

	xorN ^= len + 1; // one number is missing, so len will be one less than actual

	return xorN ^ xorList;
};

console.log(find_missing([1, 2, 3, 5]));
console.log(find_missing([1, 2, 4, 5, 6]));
