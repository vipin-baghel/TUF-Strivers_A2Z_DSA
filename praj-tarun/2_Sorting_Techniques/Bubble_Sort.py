def bubble_sort(arr):
    i = len(arr)-1
    while i>=0:
        for j in range(i):
            if arr[j]>arr[j+1]:
                arr[j], arr[j+1] = arr[j+1],arr[j]
        i-=1
    return arr

arr = [10,3,8,5,6,1]

bubble_sort(arr)
print(arr)