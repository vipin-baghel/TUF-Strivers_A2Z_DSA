/**
 * Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
has the largest sum and prints the subarray.
 *
 * Link: https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/
 */

const max_sum_subarray = (list) => {
	let len = list.length,
		max = -Infinity,
		sum = 0,
		start_index = -1,
		max_sum_subarray_start_index = -1,
		max_sum_subarray_end_index = -1;

	for (let i = 0; i < len; i++) {
		if (sum === 0) {
			start_index = i;
		}
		sum += list[i];

		if (sum > max) {
			max = sum;
			max_sum_subarray_start_index = start_index;
			max_sum_subarray_end_index = i;
		}

		if (sum < 0) {
			sum = 0;
		}
	}

	return max > 0
		? list
				.slice(
					max_sum_subarray_start_index,
					max_sum_subarray_end_index + 1
				)
				.join(", ")
		: 0;
};

console.log(max_sum_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(max_sum_subarray([1]));
console.log(max_sum_subarray([-1]));
