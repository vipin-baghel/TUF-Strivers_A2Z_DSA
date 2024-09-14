# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# arr[] = {2,6,5,8,11}, target = 14
# result = [1, 3]


def two_sum_solution(arr, target):  # O(N^2)
    for i in range(len(arr)):
        for j in range(i, len(arr)):
            if arr[i] + arr[j] == target:
                return [i, j]


def two_sum_solution_hashing(arr, target):  # O(N)
    my_dict = {}
    for i in range(len(arr)):
        var_complement = target - arr[i]
        if var_complement not in my_dict.keys():
            my_dict[var_complement] = i
        else:
            return [i, my_dict[var_complement]]


if __name__ == "__main__":
    arr = [2, 6, 5, 8, 11]
    target = 14

    print(two_sum_solution(arr, target))
    print(two_sum_solution(arr, target))
