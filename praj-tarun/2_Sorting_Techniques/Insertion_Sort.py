def insertion_sort(arr):
    for i in range(1,len(arr)):
        j = i
        while j>0 and arr[j]<arr[j-1]:
                arr[j-1],arr[j] = arr[j],arr[j-1]
                j-=1
    return arr

arr = [10,3,8,5,6,1]

insertion_sort(arr)

print(arr)

#complexities: 
# Time: wrost/average-O(n^2), best-O(n)
# space complerity : O(1)
