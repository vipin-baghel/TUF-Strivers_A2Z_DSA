## Problem Statement: Given an integer N, return the number of digits in N.
##
## Sample Test Cases:
## Input: 12345
## Output: 5
##
import math


# brute force approach method to count digits
def count_digits(n):
    count = 0
    while n > 0:  # while loop
        n = n // 10  # floor division
        count += 1
    return count
    # Time Complexity: O(log10(N) + 1)
    # Space Complexity: O(1)


# logarithmic approach method to count digits
def count_digits_log(n):
    return int(math.log10(n) + 1)
    # Time Complexity: O(1)
    # Space Complexity: O(1)


if __name__ == "__main__":
    n = int(input())  # taking input
    print(len(str(n)))  # using builtin len() function
    print(count_digits(n))  # using brute force approach method
    print(count_digits_log(n))  # using logarithmic approach method
