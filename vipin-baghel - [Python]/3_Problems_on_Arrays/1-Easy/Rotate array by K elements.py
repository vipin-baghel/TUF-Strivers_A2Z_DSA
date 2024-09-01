# Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

# Input: array[] = {1,2,3,4,5,6,7} , k=2 , right
# Output: 6 7 1 2 3 4 5
# Explanation: array is rotated to right by 2 position


def rotate(arr, k, direction):

    if direction == "left":
        new_arr = arr[k:]
        new_arr.append(arr[:k])
        return new_arr

    if direction == "right":
        new_arr = arr[len(arr) - k :]
        new_arr += arr[: len(arr) - k]
        return new_arr


if __name__ == "__main__":
    arr = [1, 2, 3, 4, 5, 6, 7]
    k = 2
    direction = "right"
    print(rotate(arr, k, direction))
