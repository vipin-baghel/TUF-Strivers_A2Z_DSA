/**
 * Problem Statement: Given an integer N, return true if it is a palindrome else return false.
 *
 * Link: https://takeuforward.org/data-structure/check-if-a-number-is-palindrome-or-not/
 */

const get_reversed_num = (num) => {
	let revsered_num = 0;

	while (num > 0) {
		revsered_num = revsered_num * 10 + (num % 10);
		num = Math.floor(num / 10);
	}

	return revsered_num;
};

const check_palindrome = (num) => {
	return num === get_reversed_num(num);
};

console.log(check_palindrome(4334));
console.log(check_palindrome(431234));
