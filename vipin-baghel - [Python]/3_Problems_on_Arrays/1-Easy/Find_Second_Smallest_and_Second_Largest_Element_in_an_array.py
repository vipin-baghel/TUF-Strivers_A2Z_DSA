# Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.
# Input:
#  [1,2,4,7,7,5]
# Output:
# Second Smallest : 2
# Second Largest : 5


def find_second_smallest_largest(arr):
    if len(arr) < 2:
        return -1, -1

    unique_elements = list(set(arr))
    if len(unique_elements) < 2:
        return -1, -1

    unique_elements.sort()
    second_smallest = unique_elements[1]
    second_largest = unique_elements[-2]

    return second_smallest, second_largest


if __name__ == "__main__":
    arr = [1, 2, 4, 7, 7, 5]
    second_smallest, second_largest = find_second_smallest_largest(arr)
    print("Second Smallest:", second_smallest)
    print("Second Largest:", second_largest)
