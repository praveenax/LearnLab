function find(x,y)
{
    console.log('x',x)
    console.log('y',y)
    A = [1,2,3]
    if(x>y) return 1;
    ans = Math.pow(A[x],find(x+1,y))
    console.log(ans);
    return ans
}

console.log(find(1,2));