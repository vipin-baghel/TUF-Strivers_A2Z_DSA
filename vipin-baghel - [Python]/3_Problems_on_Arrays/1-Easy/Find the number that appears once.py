# Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.
# Input Format:
#  arr[] = {2,2,1}
# Result:
#  1


def find_single_occurance(arr):
    d = {}
    for a in arr:
        if a not in d.keys():
            d[a] = 1
        else:
            d[a] += 1

    for k, v in d.items():
        if v == 1:
            return k


if __name__ == "__main__":
    arr = [2, 2, 1, 1, 3, 3, 4, 4, 5]
    print(find_single_occurance(arr))
