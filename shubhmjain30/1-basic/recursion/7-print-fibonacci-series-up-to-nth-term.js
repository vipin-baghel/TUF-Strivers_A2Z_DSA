/**
 * Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term
 *
 * Link: https://takeuforward.org/arrays/print-fibonacci-series-up-to-nth-term/
 */

const iter = (num) => {
	let start = 0;
	let arr = [0, 1];

	while (start < num) {
		arr.push(arr[start] + arr[start + 1]);
		start++;
	}

	return arr;
};

const recr = (num, list = [0, 1]) => {
	if (list.length >= num + 2) return list;

	list.push(list[list.length - 1] + list[list.length - 2]);
	return recr(num, list);
};

console.log(iter(5));
console.log(recr(5));

console.log(iter(10));
console.log(recr(10));
