## Problem Statement: Implement the Quick sorting algorithm.
# Input: N = 6, array[] = {13,46,24,52,20,9}
# Output: 9,13,20,24,46,52
#
#
# The algorithm steps are as follows:

# The Quicksort algorithm is a highly efficient sorting algorithm that uses a divide-and-conquer strategy.
# Choose a Pivot: Select an element from the array to be the pivot. Common choices include the first element, the last element, the middle element, or a random element.
# Partitioning: Rearrange the array so that all elements less than the pivot are on the left, and all elements greater than the pivot are on the right. The pivot is now in its correct position.
# Recursively Apply: Apply the same process to the sub-arrays formed by dividing the array at the pivot. This is done recursively until the base case is reached (sub-arrays of size 1 or 0).
# Time complexity: O(nlogn), worst case - O(n^2)
# Space complexity: O(logn)


def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)


if __name__ == "__main__":
    a = [13, 46, 24, 52, 20, 9]
    b = [5, 4, 3, 2, 1, 0]
    quick_sort(a)
    quick_sort(b)
    print(a)
    print(b)
