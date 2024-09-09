# Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.
# Input Format: N = 3, k = 5, array[] = {2,3,5}
# Result: 2


def longest_subarray(arr, k):
    sorted_arr = sorted(arr)
    sum = 0
    sub_arr = []
    for a in sorted_arr:
        sum += a
        sub_arr.append(a)
        if sum == k:
            return len(sub_arr)


if __name__ == "__main__":
    arr = [2, 3, 5]
    k = 5
    print(longest_subarray(arr, k))
