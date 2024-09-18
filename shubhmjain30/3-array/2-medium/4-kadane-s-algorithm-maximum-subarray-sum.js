/**
 * Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
has the largest sum and returns its sum and prints the subarray.
 *
 * Link: https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/
 */

const max_subarray_sum = (list) => {
	let max = -Infinity,
		sum = 0,
		len = list.length,
		start_index = -1,
		res_start_index = -1,
		res_end_index = -1;

	for (let i = 0; i < len; i++) {
		if (sum === 0) {
			start_index = i;
		}
		sum += list[i];
		if (sum > max) {
			max = sum;
			res_start_index = start_index;
			res_end_index = i;
		}
		if (sum < 0) {
			sum = 0;
		}
	}
	console.log("res_start_index", res_start_index);
	console.log("res_end_index", res_end_index);

	return max > 0 ? [max, res_start_index, res_end_index] : [0, -1, -1]; //[max-sum, max-sum-subarray-start-index, max-sum-subarray-end-index]
};

console.log(max_subarray_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(max_subarray_sum([1]));
console.log(max_subarray_sum([-1]));
