/**
 * Problem Statement: Given an array of size N. Find the highest and lowest frequency element.
 *
 * Example 1:
 * Input: array[] = [10,5,10,15,10,5];
 * Output: 10 15
 * Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.
 *
 * Example 2:
 * Input: array[] = [2,2,3,4,4,2];
 * Output: 2 3
 * Explanation: The frequency of 2 is 3, i.e. the highest and the frequency of 3 is 1 i.e. the lowest.
 *
 * Link: https://takeuforward.org/arrays/find-the-highest-lowest-frequency-element/
 */

const count_frequency_1 = (arr) => {
	let frequency_map = {};

	for (let i of arr) {
		if (frequency_map[i]) {
			frequency_map[i] += 1;
		} else {
			frequency_map[i] = 1;
		}
	}

	let min_key = 0,
		max_key = 0,
		min_freq = arr.length,
		max_freq = 0;

	for (let [k, v] of Object.entries(frequency_map)) {
		if (v > max_freq) {
			max_key = k;
			max_freq = v;
		}
		if (v < min_freq) {
			min_key = k;
			min_freq = v;
		}
	}

	console.log(max_key, min_key);
};

(() => {
	const func_list = [count_frequency_1];
	const args = [
		[10, 5, 10, 15, 10, 5],
		[2, 2, 3, 4, 4, 2],
		[1, 1, 2, 2, 1, 2],
	];

	for (let i = 0; i < func_list.length; i++) {
		for (let j = 0; j < args.length; j++) {
			const _func = func_list[i];
			console.log(
				`\n\n\n>>>>>> RUNNING ${_func.name} with argument [${args[j]}] >>>>>> \n`
			);
			_func(args[j]);
		}
	}
})();
