## Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of the string is the same as the string
# Example 1:
# Input: Str =  “ABCDCBA”
# Output: Palindrome


def check_palindrome(str):
    if str == str[::-1]:
        return True


if __name__ == "__main__":
    print(check_palindrome("ABCDCBA"))
