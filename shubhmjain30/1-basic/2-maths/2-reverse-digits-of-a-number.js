/**
 * Problem Statement: Given an integer N return the reverse of the given number.
 * Note: If a number has trailing zeros, then its reverse will not include them. For e.g., reverse of 10400 will be 401 instead of 00401.
 *
 * Link: https://takeuforward.org/maths/reverse-digits-of-a-number
 */

const reverse_num_1 = (num) => {
	let revsered_num = 0;

	//handle trailing zeros, in js these are handled by default
	// while (num % 10 === 0 && num !== 0) {
	//     num = Math.floor(num / 10);
	// }

	while (num > 0) {
		revsered_num = revsered_num * 10 + (num % 10);
		num = Math.floor(num / 10);
	}

	return revsered_num;
};

console.log(reverse_num_1(12345));
console.log(reverse_num_1(123450000));
