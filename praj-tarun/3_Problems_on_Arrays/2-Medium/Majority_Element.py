def majoruty_element(arr):
    n = len(arr)
    s = set(arr)
    hash_map = {x:0 for x in s}

    for i in range(n):
        hash_map[arr[i]]+=1
        if hash_map[arr[i]]>n//2:
            print(arr[i])
            return
    return

arr = [2,2,1,1,1,2,2]

majoruty_element(arr)