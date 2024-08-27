/**
 * Problem Statement: Print from N to 1 using Recursion
 *
 * Link: https://takeuforward.org/recursion/print-n-to-1-using-recursion/
 */

const recr = (curr, num) => {
	if (curr < 1) return;
	console.log(curr);
	recr(curr - 1, num);
};

recr(5, 1);
