def sort_arr(arr):
    hash_map = {0:0,1:0,2:0}

    for i in arr:
        hash_map[i]+=1
    j = 0
    for key,value in hash_map.items():
        arr[j:j+value] = [key]*value 
        j+=value
    print(arr)

arr = [1,2,2,0,0,0,1,1,2]

sort_arr(arr)