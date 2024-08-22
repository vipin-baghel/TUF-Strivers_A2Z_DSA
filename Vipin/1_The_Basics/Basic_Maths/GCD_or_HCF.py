## Problem Statement: Given two integers N1 and N2, find their greatest common divisor.
# Example:
# Input:N1 = 9, N2 = 12
# Output:3


def gcd(n1, n2):
    if n1 < n2:
        n1, n2 = n2, n1
    if n1 % n2 == 0:
        return n2
    return gcd(n2, n1 % n2)
    # Time Complexity: O(log(min(n1, n2)))
    # Space Complexity: O(1)


if __name__ == "__main__":
    print(gcd(9, 12))
    print(gcd(18, 9))
    print(gcd(1800, 5000))
