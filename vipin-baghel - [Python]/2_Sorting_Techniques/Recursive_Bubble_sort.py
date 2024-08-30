## Problem Statement: Implement the Recusrsive bubble sort algorithm.
# Input: N = 6, array[] = {13,46,24,52,20,9}
# Output: 9,13,20,24,46,52
#
#
# The algorithm steps are as follows:
# Base Case: If the array size is 1, it is already sorted, so return.
# Recursive Case: Perform one pass of Bubble Sort to move the largest element to the end of the array.
# Recur: Recursively sort the remaining array (excluding the last element which is now in its correct position).
# Time complexity: O(n^2)
# Space complexity: O(n)


def bubble_sort_recursive(arr, n):
    # Base case
    if n == 1:
        return

    # One pass of bubble sort
    for i in range(n - 1):
        if arr[i] > arr[i + 1]:
            arr[i], arr[i + 1] = arr[i + 1], arr[i]

    # Largest element is fixed, recur for remaining array
    bubble_sort_recursive(arr, n - 1)


if __name__ == "__main__":
    a = [13, 46, 24, 52, 20, 9]
    b = [5, 4, 3, 2, 1, 0]
    bubble_sort_recursive(a, 6)
    bubble_sort_recursive(b, 6)
    print(a)
    print(b)
