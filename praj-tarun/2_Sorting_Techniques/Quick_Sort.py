def quick_sort(arr,low,high):
    if low<high:
        pivot = partition(arr,low,high)
        quick_sort(arr,pivot+1,high)
        quick_sort(arr,low,pivot-1)


def partition(arr,low,high):
    pivot = arr[low]
    i = low
    j = high

    while i<j:
        while arr[i]<=pivot and i<high:
            i+=1
        while arr[j]>pivot and j>low:
            j-=1
        if i<j:
            arr[i],arr[j] = arr[j],arr[i]

    arr[low],arr[j] = arr[j],arr[low]
    return j


arr = [1,5,6,2,1]

quick_sort(arr,0,4)

print(arr)

'''
Time Complexity: O(N*logN), where N = size of the array.

Reason: At each step, we divide the whole array, for that logN and n steps are taken for the partition() function, so overall time complexity will be N*logN.

The following recurrence relation can be written for Quick sort : 

F(n) = F(k) + F(n-1-k) 

Here k is the number of elements smaller or equal to the pivot and n-1-k denotes elements greater than the pivot.

There can be 2 cases :

Worst Case – This case occurs when the pivot is the greatest or smallest element of the array. If the partition is done and the last element is the pivot, then the worst case would be either in the increasing order of the array or in the decreasing order of the array. 

Recurrence:
F(n) = F(0)+F(n-1)  or  F(n) = F(n-1) + F(0) 

Worst Case Time complexity: O(n2) 

Best Case – This case occurs when the pivot is the middle element or near to middle element of the array.
Recurrence :
F(n) = 2F(n/2)

Time Complexity for the best and average case: O(N*logN)

Space Complexity: O(1) + O(N) auxiliary stack space.
'''