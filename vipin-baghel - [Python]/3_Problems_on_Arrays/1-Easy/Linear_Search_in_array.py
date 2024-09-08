# Problem Statement: Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.
# Input: arr[]= 1 2 3 4 5, num = 3
# Output: 2


def linear_search(arr, n):
    for i in range(len(arr)):
        if n == arr[i]:
            return i


if __name__ == "__main__":
    arr = [1, 2, 3, 4, 5]
    n = 3
    print(linear_search(arr, n))
