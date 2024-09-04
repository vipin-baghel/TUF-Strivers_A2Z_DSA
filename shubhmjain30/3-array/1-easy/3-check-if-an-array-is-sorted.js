/**
 * Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.
 *
 * Link: https://takeuforward.org/data-structure/check-if-an-array-is-sorted/
 */

const is_sorted = (list) => {
	for (let i = 1; i < list.length; i++) {
		if (list[i] < list[i - 1]) {
			return false;
		}
	}

	return true;
};

console.log(is_sorted([5, 4, 3, 2, 1]));
console.log(is_sorted([1, 2, 3, 4, 5]));
console.log(is_sorted([1, 2, 3, 5, 4]));
