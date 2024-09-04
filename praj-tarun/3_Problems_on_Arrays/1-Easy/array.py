def largest_element(arr):
    res=arr[0]
    n = len(arr)

    for i in range(1,n):
        if arr[i]>res:
            res = arr[i]
    return res

def second_smallest_largest(arr):
    s = arr[0]
    s2 = arr[1]
    l = arr[0]
    l2 = arr[1]
    n = len(arr)
    
    for i in range(1,n):
        if arr[i]>l:
            l2 = l
            l = arr[i]
        elif arr[i]>l2 and arr[i] != l:
            l2 = arr[i]

        if arr[i]<s:
            s2 = s
            s = arr[i]
        elif arr[i]<s2 and arr[i] != s:
            s2 = arr[i] 

    print("smallest: ",s)
    print("largest: ",l)

    print("second smallest: ",s2)
    print("second largest: ",l2)

def is_array_sorted(arr):
    n = len(arr)

    for i in range(n-1):
        if arr[i+1] < arr[i]:
            print(False)
            return
    print(True)


def remove_duplicates(arr):
    n = len(arr)-1
    while n>0:
        if arr[n] == arr[n-1]:
            arr.pop(n)
        n-=1
    print(arr)

#--------------------------------------------

def main():
    arr = [1,2,3,4,4,5,5,5]

    remove_duplicates(arr)


if __name__ == "__main__":
    main()