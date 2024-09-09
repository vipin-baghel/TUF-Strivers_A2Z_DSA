/**
 * Problem Statement: Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.
 *
 * Link: https://takeuforward.org/data-structure/linear-search-in-c/
 */

const linear_search = (list, num) => {
	for (let i in list) {
		if (list[i] == num) {
			return i;
		}
	}

	return -1;
};

console.log(linear_search([1, 2, 3, 4, 5], 3));
console.log(linear_search([5, 4, 3, 2, 1], 6));
