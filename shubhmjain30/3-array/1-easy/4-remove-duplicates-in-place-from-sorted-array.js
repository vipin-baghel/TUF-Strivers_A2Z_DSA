/**
 * Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.
 *
 * Link: https://takeuforward.org/data-structure/remove-duplicates-in-place-from-sorted-array/
 */

const remove_dups = (list) => {
	let i = 0,
		j = i + 1;

	while (j < list.length) {
		if ((list[i] ^ list[j]) == 0) {
			j++;
		} else {
			i++;
			list[i] = list[j];
			j++;
		}
	}

	i++;

	while (i < list.length) {
		list[i] = "_";
		i++;
	}

	return list;
};

console.log(remove_dups([1, 2, 3, 4, 5, 5, 6, 6, 7, 7]));
console.log(remove_dups([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4]));
console.log(remove_dups([1, 2, 3, 5, 4]));
