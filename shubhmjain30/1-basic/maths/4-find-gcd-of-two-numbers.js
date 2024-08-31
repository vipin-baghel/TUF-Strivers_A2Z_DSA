/**
 * Problem Statement: Given two integers N1 and N2, find their greatest common divisor.
 * The Greatest Common Divisor of any two integers is the largest number that divides both integers.
 *
 * Link: https://takeuforward.org/data-structure/find-gcd-of-two-numbers/
 */

const find_gcd_1 = (num1, num2) => {
	let _num = num1 > num2 ? num2 : num1;
	_num = Math.floor(_num / 2);

	while (_num > 0) {
		if (num1 % _num == 0 && num2 % _num == 0) {
			return _num;
		}
		_num--;
	}
	return 1;
};

const find_gcd_2 = (num1, num2) => {
	if (num1 == 0) return num2;
	if (num2 == 0) return num1;

	if (num1 > num2) {
		return find_gcd_2(num1 - num2, num2);
	} else {
		return find_gcd_2(num2 - num1, num1);
	}
};

console.log(find_gcd_1(9, 12));
console.log(find_gcd_2(9, 12));
console.log(find_gcd_2(10, 40));
