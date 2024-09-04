# Problem Statement: Given an array, we have to find the largest element in the array.
# Input:
#  arr[] = {2,5,1,3,0};
# Output:
#  5


def largest_in_arr(arr):
    max = 0
    for a in arr:
        if max < a:
            max = a

    return max


if __name__ == "__main__":
    arr = [2, 5, 1, 13, 9]
    print(largest_in_arr(arr))
