/**
 * Problem Statement: Given a number X,  print its factorial, Iterative and Recursive
 *
 * Link: https://takeuforward.org/data-structure/factorial-of-a-number-iterative-and-recursive/
 */

const iter = (num) => {
	let fact = 1;
	while (num > 1) {
		fact *= num;
		num--;
	}
	return fact;
};

const recr = (num) => {
	if (num < 1) return 1;
	return num * recr(num - 1);
};

console.log(recr(5));
console.log(iter(5));
