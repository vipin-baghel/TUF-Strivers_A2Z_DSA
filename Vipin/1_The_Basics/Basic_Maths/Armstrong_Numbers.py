## Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.
## An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
# Example 1:
# Input:N = 153
# Output:True
# Explanation: 13+53+33 = 1 + 125 + 27 = 153


def check_armstrong(n):
    sum = 0
    temp = n
    while temp > 0:
        digit = temp % 10
        sum += digit**3
        temp //= 10
    if n == sum:
        return True
    else:
        return False
    # Time Complexity: O(log10(N) + 1)
    # Space Complexity: O(1)


if __name__ == "__main__":
    print(check_armstrong(153))
    print(check_armstrong(123))
