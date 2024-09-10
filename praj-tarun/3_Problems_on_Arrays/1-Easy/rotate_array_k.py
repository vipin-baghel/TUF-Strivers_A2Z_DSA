#using reverse algorithm
#first reverse n-k element and last k element and then the whole array

def reverse(arr,start,end):
    while start<end:
        arr[start],arr[end] = arr[end],arr[start]
        start+=1
        end-=1

def rotate_array_k_left(arr,k):
    n = len(arr)-1
    reverse(arr,0,n-k)
    reverse(arr,n-k+1,n)
    reverse(arr,0,n)

    return arr

def rotate_array_k_right(arr,k):
    n = len(arr)-1
    reverse(arr,0,k-1)
    reverse(arr,k,n)
    reverse(arr,0,n)

    return arr

arr = [1,2,3,4,5,6,7,8]

rotate_array_k_left(arr,2)
print(arr)

arr = [1,2,3,4,5,6,7,8]
rotate_array_k_right(arr,2)
print(arr)