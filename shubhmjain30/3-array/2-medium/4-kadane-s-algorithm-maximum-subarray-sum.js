/**
 * Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
has the largest sum and returns its sum.
 *
 * Link: https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/
 */

const max_subarray_sum = (list) => {
	let max = -Infinity,
		sum = 0,
		len = list.length;

	for (let i = 0; i < len; i++) {
		sum += list[i];
		if (sum > max) {
			max = sum;
		}
		if (sum < 0) {
			sum = 0;
		}
	}

	return max > 0 ? max : 0;
};

console.log(max_subarray_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(max_subarray_sum([1]));
console.log(max_subarray_sum([-1]));
