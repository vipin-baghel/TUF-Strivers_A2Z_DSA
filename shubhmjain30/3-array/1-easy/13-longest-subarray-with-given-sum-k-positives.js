/**
 * Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k
 *
 * Link: https://takeuforward.org/arrays/find-the-number-that-appears-once-and-the-other-numbers-twice/
 */

const longest_sum_subarray = (list, target_sum) => {
	let res = [],
		_sum = 0,
		_temp = [];

	for (let i of list) {
		if (_sum < target_sum) {
			_sum += i;
			_temp.push(i);
		} else if (_sum > target_sum) {
			_sum = 0;
			_temp = [i];
		} else {
			if (res.length < _temp.length) {
				res = _temp;
			}
		}
	}

	return res;
};

console.log(longest_sum_subarray([2, 3, 5], 5));
console.log(longest_sum_subarray([2, 3, 5, 1, 9], 10));
