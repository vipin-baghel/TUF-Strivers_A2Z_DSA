# Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.
#  N = 5, array[] = {1,2,4,5}
# Result:
#  3


def find_missing(n, arr):
    missing = []
    for i in range(1, n):
        if i not in arr:
            missing.append(i)

    return missing


if __name__ == "__main__":
    n = 5
    arr = [1, 2, 4, 5]
    print(find_missing(n, arr))
