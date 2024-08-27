## Problem statement: Given an array, we have found the number of occurrences of each element in the array.
# Input: arr = {10,5,10,15,10,5};
# Output: 10 : 3
# 	      5 : 2
#         15 : 1


def frequency_of_array_elements(arr):
    d = {}
    for a in arr:
        if a not in d.keys():
            d[a] = 1
        else:
            d[a] += 1
    return d


if __name__ == "__main__":
    print(frequency_of_array_elements([10, 5, 10, 15, 10, 5]))
