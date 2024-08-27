## Problem Statement: Implement the Selection sorting algorithm.
# Input: N = 6, array[] = {13,46,24,52,20,9}
# Output: 9,13,20,24,46,52
#
#
# The algorithm steps are as follows:
#
# First, we will select the range of the unsorted array using a loop (say i) that indicates the starting index of the range.
# The loop will run forward from 0 to n-1. The value i = 0 means the range is from 0 to n-1, and similarly, i = 1 means the range is from 1 to n-1, and so on.
# (Initially, the range will be the whole array starting from the first index.)
# Now, in each iteration, we will select the minimum element from the range of the unsorted array using an inner loop.
# After that, we will swap the minimum element with the first element of the selected range(in step 1).
# Finally, after each iteration, we will find that the array is sorted up to the first index of the range.
#
# link: https://takeuforward.org/sorting/selection-sort-algorithm/


def selection_sort(l: list):
    for i in range(0, len(l)):
        for j in range(i + 1, len(l)):
            if l[i] > l[j]:
                l[i], l[j] = l[j], l[i]
    # Time complexity: O(N^2)
    # Space complexity: O(1)


if __name__ == "__main__":
    a = [13, 46, 24, 52, 20, 9]
    b = [5, 4, 3, 2, 1, 0]
    selection_sort(a)
    selection_sort(b)
    print(a)
    print(b)
