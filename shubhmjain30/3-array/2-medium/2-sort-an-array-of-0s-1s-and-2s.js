/**
 * Problem Statement: Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)
 *
 * Link: https://takeuforward.org/data-structure/sort-an-array-of-0s-1s-and-2s/
 */

const sorter = (list) => {
	// Using Dutch National Flag
	let low = 0,
		mid = 0,
		high = list.length - 1;

	while (mid <= high) {
		if (list[mid] == 0) {
			[list[low], list[mid]] = [list[mid], list[low]];
			low++;
			mid++;
		} else if (list[mid] == 1) {
			mid++;
		} else {
			[list[high], list[mid]] = [list[mid], list[high]];
			high--;
		}
	}

	return list;
};

console.log(sorter([2, 0, 2, 1, 1, 0]));
console.log(sorter([2, 0, 1]));
console.log(sorter([0]));
console.log(sorter([2, 0, 1, 2, 0, 1, 1, 2]));
