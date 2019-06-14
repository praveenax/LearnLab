def fetchPLocation(grid):
    for i in range(len(grid)):
        r = grid[i]
        m = r.find('m')
        if(m != -1):
            mx=m
            my=i
        
        p = r.find('p')
        if(p != -1):
            px=p
            py=i
            
    return {
        'mx':mx,
        'my':my,
        'px':px,
        'py':py,
    }

def displayPathtoPrincess(n,grid):
#print all the moves here
    
#    find mario
#     find princess
    mx=my=px=py=0 
    
    location = fetchPLocation(grid)
    print(location)
    
    isGameDone = False
    while(not(isGameDone)):
        if mx != px:
            if(mx > px):
                mx=mx-1
                print('LEFT')
            elif(mx < px):
                mx=mx+1
                print('RIGHT')

        elif my != py:
            if(my > py):
                my=my-1
                print('UP')
            elif(my < py):
                my=my+1
                print('DOWN')

        
        if mx==px and my==py:
            isGameDone = True

    
    

m = int(input())
grid = [] 
for i in range(0, m): 
    grid.append(input().strip())
    


displayPathtoPrincess(m,grid)