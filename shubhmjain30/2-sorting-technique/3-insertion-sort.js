/**
 * Problem Statement: Given an array of N integers, write a program to implement the Insertion sorting algorithm.
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
 * Link: https://takeuforward.org/data-structure/insertion-sort-algorithm/
 */

const insertion_sort = (list) => {
	for (let i = 0; i < list.length; i++) {
		let j = i;
		while (j > 0 && list[j] < list[j - 1]) {
			let temp = list[j - 1];
			list[j - 1] = list[j];
			list[j] = temp;
			j--;
		}
	}

	return list;
};

console.log(insertion_sort([13, 46, 24, 52, 20, 9]));
console.log(insertion_sort([5, 4, 3, 2, 1]));
