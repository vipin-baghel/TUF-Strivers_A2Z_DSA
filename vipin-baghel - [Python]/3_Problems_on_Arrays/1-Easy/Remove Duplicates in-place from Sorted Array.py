# Problem Statement: Given an integer array sorted in acsending order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.

# If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements.

# Note: Return k after placing the final result in the first k slots of the array.


def unique_elements(arr):
    return list(set(arr))


if __name__ == "__main__":
    arr = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
    print(unique_elements(arr))
