## Problem Statement: Given an integer N, return true if it is a palindrome else return false.
# # Example 1:
# # Input:N = 4554
# # # Output:Palindrome Number
# #
# # Example 2:
# # Input:N = 7789
# # # Output: Not Palindrome


def reverse_number(n):
    rev = 0
    while n > 0:
        rem = n % 10
        rev = rev * 10 + rem
        n = n // 10
    return rev


def check_palindrome(n):
    rev = reverse_number(n)
    if rev == n:
        return "Palindrome Number"
    else:
        return "Not Palindrome"


if __name__ == "__main__":
    n = int(input())  # taking input
    print(n == int(str(n)[::-1]))  # using string slicing to check palindrome
    print(check_palindrome(n))  # using check_palindrome() function
