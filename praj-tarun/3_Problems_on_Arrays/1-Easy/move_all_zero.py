def move_zero(arr):
    i = 0
    j = 0
    n = len(arr)-1
    while i<=n and j<=n:
        if arr[i] == 0 and arr[j] !=0:
            arr[i],arr[j] = arr[j],arr[i]
            i+=1
        if arr[i] != 0:
            i+=1
        j+=1
    print(arr)
    
arr = [0,0,0,0,1,0,0,4,5,0,9]

move_zero(arr)