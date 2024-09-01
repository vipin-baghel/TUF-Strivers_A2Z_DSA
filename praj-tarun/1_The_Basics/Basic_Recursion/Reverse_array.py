def reverse(arr):
    rev = []
    l=len(arr)-1
    while l>=0:
        rev.append(arr[l])
        l-=1
    print(rev)

def reverse_swap(arr):
    l=0
    r=len(arr)-1
    while l<r:
        arr[l],arr[r] = arr[r],arr[l]
        l+=1
        r-=1
    print(arr)
def reverse_r(arr,l):
    r=len(arr)-l-1
    if l>=r:
        return
    arr[l],arr[r] = arr[r],arr[l]
    reverse_r(arr,l+1)

def main():
    arr = [1,2,3,4,5]
    reverse_r(arr,0)
    print(arr)

if __name__ == "__main__":
    main()