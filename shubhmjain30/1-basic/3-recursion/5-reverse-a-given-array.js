/**
 * Problem Statement: You are given an array. The task is to reverse the array and print it.
 *
 * Link: https://takeuforward.org/data-structure/reverse-a-given-array/
 */

const iter = (arr) => {
	let start = 0,
		end = arr.length - 1;

	while (start <= end) {
		let temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}

	return arr;
};

const recr = (arr, start, end) => {
	let _start = start ?? 0,
		_end = end ?? arr.length - 1;

	if (_start >= _end) return arr;

	let temp = arr[_start];
	arr[_start] = arr[_end];
	arr[_end] = temp;

	return recr(arr, _start + 1, _end - 1);
};

console.log(iter([6, 5, 4, 3, 2, 1]));
console.log(recr([8, 7, 6, 5, 4, 3, 2, 1]));
