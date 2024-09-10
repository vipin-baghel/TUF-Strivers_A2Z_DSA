/**
 * Problem Statement: Given an array of integers arr[] and an integer target.
 *
 * Link: https://takeuforward.org/data-structure/two-sum-check-if-a-pair-with-given-sum-exists-in-array/
 */

const two_sum = (list, target_sum) => {
	let len = list.length,
		sum_map = {}; // key: target_sum - curr_value, value: curr_value_index

	for (let i = 0; i < len; i++) {
		if (sum_map[list[i]]) {
			return [sum_map[list[i]], i];
		} else {
			sum_map[target_sum - list[i]] = i;
		}
	}

	return [-1, -1];
};

console.log(two_sum([2, 6, 5, 8, 11], 14));
console.log(two_sum([2, 6, 5, 8, 11], 15));
