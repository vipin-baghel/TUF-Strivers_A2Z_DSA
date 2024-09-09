/**
 * Problem Statement: Given an integer N, return all divisors of N.
 *
 * Link: https://takeuforward.org/data-structure/print-all-divisors-of-a-given-number/
 */

const find_divisors = (num) => {
	let divisors = [];
	let root = Math.floor(Math.sqrt(num));

	for (let i = 1; i <= root; i++) {
		if (num % i == 0) {
			divisors.push(i);

			if (i !== num / i) {
				divisors.push(num / i);
			}
		}
	}

	return divisors;
};

console.log(find_divisors(36));
console.log(find_divisors(51));
console.log(find_divisors(101));
