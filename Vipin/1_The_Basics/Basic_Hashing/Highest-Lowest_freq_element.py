### Problem Statement: Given an array of size N. Find the highest and lowest frequency element.
# Input: arr = {10,5,10,15,10,5};
# Output: 10, 15
# Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.


def frequency_of_array_elements(arr):
    d = {}
    for a in arr:
        if a not in d.keys():
            d[a] = 1
        else:
            d[a] += 1
    return d


if __name__ == "__main__":
    arr = [10, 5, 10, 15, 10, 5]
    freq = frequency_of_array_elements(arr)

    values = list(freq.values())
    min = min(values)
    max = max(values)

    for k, v in freq.items():
        if v == min:
            print("min : ", k)
        if v == max:
            print("max : ", k)
