/**
 * Problem Statement: Given an array of N integers, left rotate the array by one place.
 *
 * Link: https://takeuforward.org/data-structure/left-rotate-the-array-by-one/
 */

const rotate_list = (list) => {
	let _first = list[0],
		len = list.length,
		i = 1;

	while (i < len) {
		list[i - 1] = list[i];
		i++;
	}

	list[len - 1] = _first;

	return list;
};

console.log(rotate_list([1, 2, 3, 4, 5]));
console.log(rotate_list([2, 5, 1, 3, 0]));
