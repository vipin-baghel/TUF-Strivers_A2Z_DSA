def bubble_sort(arr):
    i = len(arr)-1
    while i>=0:
        #optimization for sorted array
        swap=0
        for j in range(i):
            if arr[j]>arr[j+1]:
                arr[j], arr[j+1] = arr[j+1],arr[j]
                swap=1
        if swap == 0:
            #sorted array, for loop oran only once
            break
        i-=1
    return arr

arr = [10,3,8,5,6,1]

bubble_sort(arr)
print(arr)


#complexities: 
# Time: n^2
#with optimization best will be O(n)
# space complerity : O(1)