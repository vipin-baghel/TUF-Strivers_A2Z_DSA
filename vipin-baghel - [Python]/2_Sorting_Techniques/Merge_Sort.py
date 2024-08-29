## Problem Statement: Implement the Insertion sorting algorithm.
# Input: N = 6, array[] = {13,46,24,52,20,9}
# Output: 9,13,20,24,46,52
#
#
# The algorithm steps are as follows:

# Merge sort is a classic sorting algorithm that follows the divide-and-conquer approach.
# Divide: Split the array into two halves. Keep dividing each half recursively until each subarray contains only one element.
# Conquer: Sort each of the subarrays. Since a single element is already sorted, this step is trivial.
# Merge: Combine the sorted subarrays to produce new sorted subarrays until you get a single sorted array.
# Time complexity: O(nlogn)
# Space complexity: O(n)


def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]

        merge_sort(left_half)
        merge_sort(right_half)

        i = j = k = 0

        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1


if __name__ == "__main__":
    a = [13, 46, 24, 52, 20, 9]
    b = [5, 4, 3, 2, 1, 0]
    merge_sort(a)
    merge_sort(b)
    print(a)
    print(b)
