def merge_sort(arr,low,high):
    if low == high:
        return
    mid = (low+high)//2
    merge_sort(arr,low,mid)
    merge_sort(arr,mid+1,high)
    merge(arr,low,mid,high)

def merge(arr,low,mid,high):
    left = low
    right = mid+1
    temp = []
    while left<=mid and right<=high:
        if arr[left]<=arr[right]:
            temp.append(arr[left])
            left+=1
        else:
            temp.append(arr[right])
            right+=1
    while left<=mid:
        temp.append(arr[left])
        left+=1
    while right<=high:
        temp.append(arr[right])
        right+=1
    for i in range(low,high+1):
        arr[i] = temp[i-low]
    


arr = [1,2,6,5,1]

merge_sort(arr,0,4)

print(arr)

#Time complexity: O(nlogn) 

#Reason: At each step, we divide the whole array, for that logn and we assume n steps are taken to get sorted array, so overall time complexity will be nlogn

#Space complexity: O(n)  

#Reason: We are using a temporary array to store elements in sorted order.
