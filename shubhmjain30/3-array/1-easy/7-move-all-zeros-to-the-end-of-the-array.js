/**
 * Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.
 *
 * Link: https://takeuforward.org/data-structure/move-all-zeros-to-the-end-of-the-array/
 */

const move_number = (list, num = 0) => {
	let i = 0, // to detect [num]
		j = 1, // to detect [non-num]
		len = list.length;

	while (j < len) {
		if (list[i] == num && list[j] != num) {
			[list[i], list[j]] = [list[j], list[i]];
			i++;
			j++;
		} else if (list[i] == num) {
			j++;
		} else {
			i++;
			j++;
		}
	}

	return list;
};

console.log(move_number([1, 0, 2, 3, 0, 4, 0, 1]));
console.log(move_number([1, 2, 0, 1, 0, 4, 0]));
