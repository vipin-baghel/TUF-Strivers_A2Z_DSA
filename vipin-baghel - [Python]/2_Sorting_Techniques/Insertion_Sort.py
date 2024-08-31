## Problem Statement: Implement the Insertion sorting algorithm.
# Input: N = 6, array[] = {13,46,24,52,20,9}
# Output: 9,13,20,24,46,52
#
#
# The algorithm steps are as follows:
#
# Start with the second element: Assume the first element is already sorted. Take the second element and compare it with the first.
# Insert the element: If the second element is smaller, swap it with the first. Now, the first two elements are sorted.
# Move to the next element: Take the third element and compare it with the elements before it. Insert it into its correct position among the sorted elements.
# Repeat: Continue this process for each element in the array, inserting each one into its correct position among the sorted elements.
#
# Link: https://takeuforward.org/data-structure/insertion-sort-algorithm/


def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key


if __name__ == "__main__":
    a = [13, 46, 24, 52, 20, 9]
    b = [5, 4, 3, 2, 1, 0]
    insertion_sort(a)
    insertion_sort(b)
    print(a)
    print(b)
