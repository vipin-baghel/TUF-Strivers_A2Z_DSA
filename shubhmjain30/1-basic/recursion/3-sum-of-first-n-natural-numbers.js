/**
 * Problem Statement: Sum of first N Natural Numbers
 *
 * Link: https://takeuforward.org/data-structure/sum-of-first-n-natural-numbers/
 */

const recr = (num) => {
	if (num < 1) return 0;
	return num + recr(num - 1);
};

console.log(recr(10));
