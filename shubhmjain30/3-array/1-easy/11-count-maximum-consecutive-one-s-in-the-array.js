/**
 * Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.
 *
 * Link: https://takeuforward.org/data-structure/count-maximum-consecutive-ones-in-the-array/
 */

const max_count = (list) => {
	let len = list.length,
		max_count = 0,
		count = 0;

	for (let i = 1; i < len; i++) {
		if ((list[i - 1] ^ list[i]) === 0) {
			count += 1;
			if (count > max_count) {
				max_count = count;
			}
		} else {
			count = 0;
		}
	}

	return max_count + 1;
};

console.log(max_count([1, 1, 0, 1, 1, 1]));
console.log(max_count([1, 0, 1, 1, 0, 1]));
