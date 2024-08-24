## Reverse a given Array


def reverseArray(arr):  # inbuilt list split approach
    return arr[::-1]


def reverseArray_recursion(arr, startIndex, endIndex):  # recursive approach
    if startIndex >= endIndex:
        return arr
    else:
        arr[startIndex], arr[endIndex] = (
            arr[endIndex],
            arr[startIndex],
        )  # swap the elements at start and end index.
        return reverseArray_recursion(arr, startIndex + 1, endIndex - 1)


if __name__ == "__main__":
    a = [5, 6, 7, 8, 9]
    print(reverseArray(a))
    print(reverseArray_recursion(a, 0, len(a) - 1))
