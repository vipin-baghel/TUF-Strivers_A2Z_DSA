# Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.
# Input: prices = {1, 1, 0, 1, 1, 1}
# Output: 3


def consecutive_ones(arr):
    max_consecutive = 0
    c = 0
    for a in arr:
        if a == 1:
            c += 1
        else:
            c = 0
        max_consecutive = max(max_consecutive, c)

    return max_consecutive


if __name__ == "__main__":
    arr = [1, 1, 0, 1, 1, 1, 0, 1]
    print(consecutive_ones(arr))
