def recursive_bubble(arr,low,high):
    if low>=high:
        return arr
    for i in range(low,high):
        if arr[i]>arr[i+1]:
            arr[i],arr[i+1]=arr[i+1],arr[i]
    recursive_bubble(arr,low,high-1)

arr = [11,4,1,3,4,2]

recursive_bubble(arr,0,len(arr)-1)

print(arr)