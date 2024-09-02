# Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.
# Note: Two consecutive equal values are considered to be sorted.

# Input:
# array[] = {1,2,3,4,5}
# Output
#  True


def is_sorted(arr):
    result = True
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            result = False

    return result


if __name__ == "__main__":
    arr = [1, 2, 3, 4, 5, 0]
    print(is_sorted(arr))
