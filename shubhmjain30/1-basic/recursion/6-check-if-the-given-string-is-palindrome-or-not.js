/**
 * Problem Statement: Given a string, check if the string is palindrome or not.
 * A string is said to be palindrome if the reverse of the string is the same as the string.
 *
 * Link: https://takeuforward.org/data-structure/check-if-the-given-string-is-palindrome-or-not/
 */

const iter = (str) => {
	let start = 0,
		end = str.length - 1;

	while (start < end) {
		if (str[start] != str[end]) return false;

		start++;
		end--;
	}

	return true;
};

const recr = (str, start, end) => {
	let _start = start ?? 0,
		_end = end ?? str.length - 1;

	if (str[_start] != str[_end]) return false;

	if (_start >= _end) return true;

	return recr(str, _start + 1, _end - 1);
};

console.log(iter("AABBAA"));
console.log(iter("AABBAAB"));

console.log(recr("AABBAA"));
console.log(recr("AABBAAB"));
