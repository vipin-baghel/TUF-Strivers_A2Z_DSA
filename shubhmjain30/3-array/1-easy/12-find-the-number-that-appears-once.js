/**
 * Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.
 *
 * Link: https://takeuforward.org/arrays/find-the-number-that-appears-once-and-the-other-numbers-twice/
 */

const freq = (list) => {
	let len = list.length,
		res = 0;

	for (let i = 0; i < len; i++) {
		res ^= list[i];
	}

	return res;
};

console.log(freq([2, 2, 1]));
console.log(freq([4, 1, 2, 1, 2]));
