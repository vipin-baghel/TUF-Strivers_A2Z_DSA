## Problem Statement: Implement the recursive insertion sorting algorithm.
# Input: N = 6, array[] = {13,46,24,52,20,9}
# Output: 9,13,20,24,46,52
#
#
# The algorithm steps are as follows:
# Base Case: If the array size is 1 or smaller, it is already sorted, so return.
# Recursive Case: Recursively sort the first ( n-1 ) elements.
# Insert Last Element: Insert the last element of the array into its correct position in the sorted sub-array.
# Time complexity: O(nlogn), worst case - O(n^2)
# Space complexity: O(logn)


def insertion_sort_recursive(arr, n):
    # Base case
    if n <= 1:
        return

    # Sort first n-1 elements
    insertion_sort_recursive(arr, n - 1)

    # Insert last element at its correct position in sorted array
    last = arr[n - 1]
    j = n - 2

    # Move elements of arr[0..n-1], that are greater than last, to one position ahead
    while j >= 0 and arr[j] > last:
        arr[j + 1] = arr[j]
        j -= 1

    arr[j + 1] = last


if __name__ == "__main__":
    a = [13, 46, 24, 52, 20, 9]
    b = [5, 4, 3, 2, 1, 0]
    insertion_sort_recursive(a, 6)
    insertion_sort_recursive(b, 6)
    print(a)
    print(b)
