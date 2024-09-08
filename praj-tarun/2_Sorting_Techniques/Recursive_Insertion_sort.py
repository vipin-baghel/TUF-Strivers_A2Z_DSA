def recursive_insertion(arr,low,high):
    if low>=high:
        return arr
    for i in range(len(arr)-high,-1,-1):
        if arr[i]<arr[i-1]:
            arr[i],arr[i-1] = arr[i-1],arr[i]
    recursive_insertion(arr,low,high-1)

arr = [11,4,1,3,4,2]

recursive_insertion(arr,0,len(arr)-1)

print(arr)