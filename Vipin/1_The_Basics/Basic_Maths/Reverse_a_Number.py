## Problem Statement: Given an integer N return the reverse of the given number.
## Note: If a number has trailing zeros, then its reverse will not include them. For e.g., reverse of 10400 will be 401 instead of 00401.


def reverse_number(n):
    rev = 0
    while n > 0:
        rem = n % 10
        rev = rev * 10 + rem
        n = n // 10
    return rev
    # Time Complexity: O(log10N + 1)
    # Space Complexity: O(1)


if __name__ == "__main__":
    n = int(input())  # taking input
    print(int(str(n)[::-1]))  # reverse the number using string slicing
    print(reverse_number(n))  # reverse the number using reverse_number() function
