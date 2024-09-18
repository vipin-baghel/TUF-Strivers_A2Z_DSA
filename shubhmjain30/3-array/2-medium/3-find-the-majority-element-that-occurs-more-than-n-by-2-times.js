/**
 * Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.
 *
 * Link: https://takeuforward.org/data-structure/find-the-majority-element-that-occurs-more-than-n-2-times/
 */

const majority_element = (list) => {
	let len = list.length,
		element,
		count = 0,
		element_count = 0;

	for (let i = 0; i < len; i++) {
		if (count === 0) {
			element = list[i];
			count += 1;
		} else if (element === list[i]) {
			count += 1;
		} else {
			count -= 1;
		}
	}

	for (let i = 0; i < len; i++) {
		if (element === list[i]) {
			element_count += 1;
		}
	}

	if (element_count > Math.floor(len / 2)) {
		return element;
	}

	return -1;
};

console.log(majority_element([3, 2, 3]));
console.log(majority_element([2, 2, 1, 1, 1, 2, 2]));
console.log(majority_element([4, 4, 2, 2, 3, 4, 4, 3, 2, 4]));
