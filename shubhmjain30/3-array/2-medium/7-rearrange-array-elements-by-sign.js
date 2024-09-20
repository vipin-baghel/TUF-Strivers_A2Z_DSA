/**
 * Problem Statement: There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.
 * Note: Start the array with positive elements.
 *
 * Link: https://takeuforward.org/arrays/rearrange-array-elements-by-sign/
 */

const rearrange_by_sign_v1 = (list) => {
	let len = list.length,
		res = [],
		posIndex = 0,
		negIndex = 1;

	for (let i = 0; i < len; i++) {
		if (list[i] < 0) {
			res[negIndex] = list[i];
			negIndex += 2;
		} else {
			res[posIndex] = list[i];
			posIndex += 2;
		}
	}

	return res;
};

console.log(rearrange_by_sign_v1([1, 2, -4, -5]));
console.log(rearrange_by_sign_v1([1, 2, 3, -1, -2, -3]));
