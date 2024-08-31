/**
 * Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.
 *
 * Link: https://takeuforward.org/data-structure/check-if-a-number-is-prime-or-not/
 */

const is_prime = (num) => {
	let divisor_count = 0;
	let root = Math.floor(Math.sqrt(num));

	for (let i = 1; i <= root; i++) {
		if (num % i == 0) {
			divisor_count++;
		}
	}

	return !(divisor_count > 1);
};

console.log(is_prime(11));
console.log(is_prime(17));
console.log(is_prime(36));
console.log(is_prime(101));
