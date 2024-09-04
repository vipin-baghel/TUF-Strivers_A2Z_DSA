# Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.
# Input:
#  1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
# Output:
#  1 ,2 ,3 ,4 ,1 ,0 ,0 ,0


def move_zeros(arr):
    arr_without_zero = []
    arr_with_zero = []
    for a in arr:
        if a == 0:
            arr_with_zero.append(a)
        else:
            arr_without_zero.append(a)
    return arr_without_zero + arr_with_zero


def move_zeros_opt(a):
    j = -1
    n = len(a)
    # Place the pointer j
    for i in range(n):
        if a[i] == 0:
            j = i
            break

    # No non-zero elements
    if j == -1:
        return a

    # Move the pointers i and j and swap accordingly
    for i in range(j + 1, n):
        if a[i] != 0:
            a[i], a[j] = a[j], a[i]
            j += 1

    return a


if __name__ == "__main__":
    arr = [1, 0, 2, 3, 0, 4, 0, 1]
    print(move_zeros(arr))
    print(move_zeros_opt(arr))
