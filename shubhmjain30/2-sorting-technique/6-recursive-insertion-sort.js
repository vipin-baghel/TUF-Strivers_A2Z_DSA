/**
 * Problem Statement: Given an array of N integers, write a program to implement the Recursive Insertion Sort algorithm.
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
 * Link: https://takeuforward.org/arrays/recursive-insertion-sort-algorithm/
 */

const insertion_sort = (list, start = 0) => {
	if (start > list.length) return list;

	for (let i = start; i > 0; i--) {
		if (list[i] < list[i - 1]) {
			[list[i], list[i - 1]] = [list[i - 1], list[i]];
		}
	}

	return insertion_sort(list, start + 1);
};

console.log(insertion_sort([13, 46, 24, 52, 20, 9]));
console.log(insertion_sort([5, 4, 3, 2, 1]));
