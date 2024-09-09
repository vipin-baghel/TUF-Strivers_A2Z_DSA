/**
 * Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.
 * An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
 *
 * Link: https://takeuforward.org/maths/check-if-a-number-is-armstrong-number-or-not/
 */

const is_armstrong = (num) => {
	let temp_num = num;
	let original_num = num;
	let total_digits = 0;
	let armstrong_num = 0;

	while (temp_num > 0) {
		temp_num = Math.floor(temp_num / 10);
		total_digits++;
	}

	while (num > 0) {
		let digit = num % 10;
		num = Math.floor(num / 10);
		armstrong_num = armstrong_num + digit ** total_digits;
	}

	return original_num == armstrong_num;
};

console.log(is_armstrong(123));
console.log(is_armstrong(153));
console.log(is_armstrong(371));
