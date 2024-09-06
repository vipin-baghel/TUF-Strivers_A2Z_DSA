/**
 * Problem Statement: Given an array, we have to find the largest element in the array.
 *
 * Link: https://takeuforward.org/data-structure/find-the-largest-element-in-an-array/
 */

const find_largest = (list) => {
	let largest = list[0];
	for (let i of list) {
		if (i > largest) {
			largest = i;
		}
	}

	return largest;
};

console.log(find_largest([2, 5, 1, 3, 0]));
console.log(find_largest([8, 10, 5, 7, 9]));
console.log(find_largest([10, 120, 99, 1233]));
