/**
 * Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
 *
 * Link: https://takeuforward.org/data-structure/union-of-two-sorted-arrays/
 */

const union = (list1, list2) => {
	let list = [],
		i = 0,
		j = 0,
		_lastPushed;

	while (i < list1.length && j < list2.length) {
		while (_lastPushed == list1[i]) {
			i++;
		}
		while (_lastPushed == list2[j]) {
			j++;
		}
		if (list1[i] < list2[j]) {
			list.push(list1[i]);
			_lastPushed = list1[i];
			i++;
		} else if (list1[i] > list2[j]) {
			list.push(list2[j]);
			_lastPushed = list2[j];
			j++;
		} else {
			list.push(list1[i]);
			_lastPushed = list1[i];
			i++;
			j++;
		}
	}

	while (i < list1.length) {
		list.push(list1[i]);
		i++;
	}

	while (j < list2.length) {
		list.push(list2[j]);
		j++;
	}

	return list;
};

console.log(union([1, 2, 3, 4, 5], [2, 3, 4, 4, 5]));
console.log(union([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]));
