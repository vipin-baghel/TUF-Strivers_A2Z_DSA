#variant 1
def two_sum(arr,s):
    hash_map = {x: 0 for x in arr}
    for i in arr:
        try:
            if hash_map[s-i]==0:
                return True
        except:
            pass
    return False
    
arr = [1,2,4,5]
s = 11

result = two_sum(arr,s)
print(result)

#variant 2
def two_sum_index(arr,s):
    hash_map = {}
    j = 0
    for i in arr:
        hash_map[i] = j
        try:
            index = hash_map[s-i] 
            print(index,j)
            return
        except:
            pass
        j+=1
    print(-1,-1)

arr = [1,2,3,4,5,6]
s = 9
two_sum_index(arr,s)