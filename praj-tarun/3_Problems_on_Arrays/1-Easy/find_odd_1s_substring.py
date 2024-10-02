s = '100101'
l = len(s)

res = 0

for i in range(l):
    for j in range(i+1,l+1):
        count = 0
        for x in s[i:j]:
            if x == '1':
                count+=1
        if count%2 == 1:
            res+=len(s[i:j])
            
print(res)
        
            