/**
 * Problem statement: Given an array, we have found the number of occurrences of each element in the array.
 *
 * Example 1:
 * Input: arr[] = [10,5,10,15,10,5];
 * Output: 10  3
 * 	        5  2
 *         15  1
 * Explanation: 10 occurs 3 times in the array
 * 	            5 occurs 2 times in the array
 *              15 occurs 1 time in the array
 *
 * Example2:
 * Input: arr[] = [2,2,3,4,4,2];
 * Output: 2  3
 *         3  1
 *         4  2
 * Explanation: 2 occurs 3 times in the array
 * 	            3 occurs 1 time in the array
 *              4 occurs 2 time in the array
 *
 * Link: https://takeuforward.org/data-structure/count-frequency-of-each-element-in-the-array/
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

	for (let [k, v] of Object.entries(frequency_map)) {
		console.log(k, v);
	}
};

(() => {
	const func_list = [count_frequency_1];
	const args = [
		[1, 2, 1, 2, 1, 1, 1, 3],
		[10, 5, 10, 15, 10, 5],
		[2, 2, 3, 4, 4, 2],
		[8, 6, 4, 8, 6, 3, 1, 3],
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
