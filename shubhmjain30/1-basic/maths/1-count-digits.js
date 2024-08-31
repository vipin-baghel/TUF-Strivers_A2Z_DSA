/**
 * Problem Statement: Given an integer N, return the number of digits in N.
 *
 * Example 1:
 * Input:N = 12345
 * Output:5
 * Explanation:  The number 12345 has 5 digits.
 * Example 2:
 * Input:N = 7789
 * Output: 4
 * Explanation: The number 7789 has 4 digits.
 *
 * Link: https://takeuforward.org/data-structure/count-digits-in-a-number/
 */

let count_digits_1 = (num) => {
	let count = 0;
	while (num > 0) {
		if (num % 10 >= 0) {
			count++;
		}
		num = Math.floor(num / 10);
	}
	console.log(count);
};

let count_digits_2 = (num) => {
	console.log(Math.floor(Math.log10(num)) + 1);
};

(() => {
	const func_list = [count_digits_1, count_digits_2];
	const args = [12345, 99999999, 1000000, 222];

	for (let i = 0; i < func_list.length; i++) {
		for (let j = 0; j < args.length; j++) {
			const _func = func_list[i];
			console.log(
				`\n\n\n>>>>>> RUNNING ${_func.name} with argument ${args[j]} >>>>>> \n`
			);
			_func(args[j]);
		}
	}
})();
