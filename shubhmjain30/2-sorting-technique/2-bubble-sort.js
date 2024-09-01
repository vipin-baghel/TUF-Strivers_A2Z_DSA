/**
 * Problem Statement: Given an array of N integers, write a program to implement the Bubble Sorting algorithm.
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
 * Link: https://takeuforward.org/data-structure/bubble-sort-algorithm/
 */

const bubble_sort = (list) => {
	for (let i = list.length - 1; i > 0; i--) {
		let did_swap = 0;
		for (let j = 1; j <= i; j++) {
			if (list[j] < list[j - 1]) {
				let temp = list[j];
				list[j] = list[j - 1];
				list[j - 1] = temp;
				did_swap++;
			}
			if (did_swap < 1) {
				break;
			}
		}
	}

	return list;
};

console.log(bubble_sort([13, 46, 24, 52, 20, 9]));
console.log(bubble_sort([5, 4, 3, 2, 1]));
console.log(bubble_sort([1, 2, 3, 4, 5]));
