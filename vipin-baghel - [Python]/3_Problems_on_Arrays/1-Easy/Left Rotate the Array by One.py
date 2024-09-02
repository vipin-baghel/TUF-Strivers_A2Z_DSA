# Problem Statement: Given an array of N integers, left rotate the array by one place.
# Input:
# array[] = {1,2,3,4,5}
# Output:
#  2,3,4,5,1


def left_rotate(arr):
    new_arr = arr[1:]
    new_arr.append(arr[0])
    return new_arr


if __name__ == "__main__":
    arr = [1, 2, 3, 4, 5]
    print(left_rotate(arr))
