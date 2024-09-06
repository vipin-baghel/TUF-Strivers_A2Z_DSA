def selection_sort(arr):

    for i in range(len(arr)-1):
        min=i
        for j in range(i+1,len(arr)):
            if arr[min]>arr[j]:
                min = j
        arr[i],arr[min]=arr[min],arr[i]


arr = [1,4,5,3,5,6]

selection_sort(arr)

print(arr)
