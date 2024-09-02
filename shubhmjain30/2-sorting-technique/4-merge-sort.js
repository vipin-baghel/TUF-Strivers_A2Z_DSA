/**
 * Problem Statement:  Given an array of size n, sort the array using Merge Sort.
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
 * Link: https://takeuforward.org/data-structure/merge-sort-algorithm/
 */

const merge = (list, low, mid, high) => {
	let temp = [];

	let left = low,
		right = mid + 1;

	while (left <= mid && right <= high) {
		if (list[left] <= list[right]) {
			temp.push(list[left]);
			left++;
		} else {
			temp.push(list[right]);
			right++;
		}
	}

	while (left <= mid) {
		temp.push(list[left]);
		left++;
	}

	while (right <= high) {
		temp.push(list[right]);
		right++;
	}

	for (let i = low; i <= high; i++) {
		list[i] = temp[i - low];
	}
};

const merge_sort = (list, low, high) => {
	if (low >= high) return;

	let mid = Math.floor((low + high) / 2);

	merge_sort(list, low, mid);
	merge_sort(list, mid + 1, high);
	merge(list, low, mid, high);

	return list;
};

console.log(merge_sort([13, 46, 24, 52, 20, 9], 0, 5));
console.log(merge_sort([5, 4, 3, 2, 1], 0, 4));
