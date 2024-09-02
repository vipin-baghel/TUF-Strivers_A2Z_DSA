/**
 * Problem Statement: Given an array of N integers, write a program to implement the Recursive Bubble Sort algorithm.
 *
 * Example 1:
 * Input: N = 6, array[] = {13,46,24,52,20,9}
 * Output: 9,13,20,24,46,52
 * Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52
 *
 * Example 2:
 * Input: N = 5, array[] = {5,4,3,2,1}
 * Output: 1,2,3,4,5
 * Explanation: After sorting the array is: 1, 2, 3, 4, 5
 *
 * Link: https://takeuforward.org/arrays/recursive-bubble-sort-algorithm/
 */

const bubble_sort = (list, length) => {
	if (length <= 1) return list;

	let swapped = false;
	for (let i = 0; i < length - 1; i++) {
		if (list[i] > list[i + 1]) {
			[list[i], list[i + 1]] = [list[i + 1], list[i]];
			swapped = true;
		}
	}

	// If no elements were swapped, the list is already sorted
	if (!swapped) return list;

	// Recursively sort the remaining list
	return bubble_sort(list, length - 1);
};

console.log(bubble_sort([5, 4, 3, 2, 1], 5)); // [1, 2, 3, 4, 5]
console.log(bubble_sort([13, 46, 24, 52, 20, 9], 6)); // [9, 13, 20, 24, 46, 52]
console.log(bubble_sort([1, 2, 3, 4, 5], 5)); // [1, 2, 3, 4, 5]
