## Problem Statement: Implement the Bubble sorting algorithm.
# Input: N = 6, array[] = {13,46,24,52,20,9}
# Output: 9,13,20,24,46,52
#
#
# The algorithm steps are as follows:
#
# Start at the beginning of the list.
# Compare the first two elements. If the first is greater than the second, swap them.
# Move to the next pair of elements and repeat the comparison and swap if necessary.
# Continue this process until the end of the list is reached. This completes one pass.
# Repeat the passes through the list until no swaps are needed during a pass.
#
# Link: https://takeuforward.org/data-structure/bubble-sort-algorithm/


def bubble_sort(arr: list):
    n = len(arr)
    # Traverse through all array elements
    for i in range(n):
        # Last i elements are already in place
        for j in range(0, n - i - 1):
            # Traverse the array from 0 to n-i-1
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    # Time complexity: O(N^2) - worst case, O(n) - best case
    # Space complexity: O(1)


if __name__ == "__main__":
    a = [13, 46, 24, 52, 20, 9]
    b = [5, 4, 3, 2, 1, 0]
    bubble_sort(a)
    bubble_sort(b)
    print(a)
    print(b)
