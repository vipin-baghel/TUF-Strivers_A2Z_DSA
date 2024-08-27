/**
 * Problem Statement: Print from 1 to N using Recursion
 *
 * Link: https://takeuforward.org/recursion/print-1-to-n-using-recursion/
 */

const recr = (curr, num) => {
	if (curr > num) return;
	console.log(curr);
	return recr(curr + 1, num);
};

recr(1, 5);
