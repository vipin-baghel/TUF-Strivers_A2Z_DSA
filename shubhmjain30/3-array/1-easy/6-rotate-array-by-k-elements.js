/**
 * Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.
 *
 * Link: https://takeuforward.org/data-structure/rotate-array-by-k-elements/
 */

const rotate_list = (list, direction = "LEFT", steps = 1) => {
	let temp,
		len = list.length,
		isLeftShift = direction == "LEFT";

	for (let i = 0; i < steps; i++) {
		temp = isLeftShift ? list[0] : list[len - 1];

		for (let j = 1; j < len; j++) {
			if (isLeftShift) {
				list[j - 1] = list[j];
			} else {
				list[len - j] = list[len - j - 1];
			}
		}

		if (isLeftShift) {
			list[len - 1] = temp;
		} else {
			list[0] = temp;
		}
	}

	return list;
};

console.log(rotate_list([1, 2, 3, 4, 5]));
console.log(rotate_list([1, 2, 3, 4, 5], "RIGHT", 3));
console.log(rotate_list([1, 2, 3, 4, 5], "LEFT", 2));
console.log(rotate_list([2, 5, 1, 3, 0], "RIGHT", 3));
console.log(rotate_list([2, 5, 1, 3, 0], "LEFT", 2));
