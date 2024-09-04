/**
 * Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.
 *
 * Link: https://takeuforward.org/data-structure/find-the-largest-element-in-an-array/
 */

const second_smallest_and_largest = (list) => {
	let largest = -Infinity;
	let second_largest = -Infinity;
	let smallest = Infinity;
	let second_smallest = Infinity;

	if (list.length < 2) {
		return [-1, -1];
	}

	for (let i of list) {
		if (i > largest) {
			second_largest = largest;
			largest = i;
		} else if (i > second_largest && i != largest) {
			second_largest = i;
		}
		if (i < smallest) {
			second_smallest = smallest;
			smallest = i;
		} else if (i < second_smallest && i !== smallest) {
			second_smallest = i;
		}
	}

	return [second_smallest, second_largest];
};

console.log(second_smallest_and_largest([2, 5, 1, 3, 0]));
console.log(second_smallest_and_largest([8, 10, 5, 7, 9]));
console.log(second_smallest_and_largest([1, 2, 4, 7, 7, 5]));
console.log(second_smallest_and_largest([8]));
