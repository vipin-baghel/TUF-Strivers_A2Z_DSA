/**
 * Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.
 *
 * Example 1:
 * Input: N = 6, array[] = {13,46,24,52,20,9}
 * Output: 9,13,20,24,46,52
 * Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52
 *
 * Example 2:
 * Input: N=5, array[] = {5,4,3,2,1}
 * Output: 1,2,3,4,5
 * Explanation: After sorting the array is: 1, 2, 3, 4, 5
 *
 * Link: https://takeuforward.org/sorting/selection-sort-algorithm/
 */

const selection_sort = (list) => {
	for (let i = 0; i < list.length - 1; i++) {
		let minIndex = i;
		for (let j = i; j < list.length; j++) {
			if (list[j] < list[minIndex]) {
				minIndex = j;
			}
		}

		let temp = list[minIndex];
		list[minIndex] = list[i];
		list[i] = temp;
	}
	return list;
};

console.log(selection_sort([13, 46, 24, 52, 20, 9]));
console.log(selection_sort([5, 4, 3, 2, 1]));
