# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# arr[] = {2,6,5,8,11}, target = 14
# result = [1, 3]


def two_sum_solution(arr, target):
    for i in range(len(arr) - 1):
        for j in range(i, len(arr) - 1):
            if arr[i] + arr[j] == target:
                return [i, j]


if __name__ == "__main__":
    arr = [2, 6, 5, 8, 11]
    target = 14
    arr2 = [2, 6, 5, 8, 11]
    target2 = 15
    print(two_sum_solution(arr, target))
    print(two_sum_solution(arr2, target2))
