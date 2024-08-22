## Problem Statement: Given an integer N, return all divisors of N.
# Example 1:
# Input:N = 36
# Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]
import math


def get_divisors_brute(n):  # brute force approach
    divisors = []
    for i in range(1, n + 1):
        if n % i == 0:
            divisors.append(i)
    return divisors
    # Time Complexity : O(n)
    # Space Complexity : O(n)


def get_divisors_optimized(n):  # optimized approach
    divisors = []
    for i in range(1, int(math.sqrt(n)) + 1):
        if n % i == 0:
            divisors.append(i)
            if i != n // i:
                divisors.append(n // i)
    return divisors
    # Time Complexity : O(sqrt(n))
    # Space Complexity : O(2*sqrt(n))


if __name__ == "__main__":
    print(get_divisors_brute(36))
    print(get_divisors_optimized(36))
