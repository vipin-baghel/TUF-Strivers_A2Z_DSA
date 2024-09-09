# Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
# Input:
# arr1 = {1,2,3,4,5,6,7,8,9,10}
# arr2 = {2,3,4,4,5,11,12}
# Output:
#  {1,2,3,4,5,6,7,8,9,10,11,12}


def union_array(arr1, arr2):  # my solution
    for a in arr1:
        if a in arr2:
            continue
        else:
            arr2.append(a)
    return sorted(arr2)


if __name__ == "__main__":
    arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    arr2 = [2, 3, 4, 4, 5, 11, 12]
    print(union_array(arr1, arr2))
