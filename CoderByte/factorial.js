var n = 4;

function factorial(d){
    if(d != 0){
       return d * factorial(d-1)
    }else{
       return 1;
    }
}

var result = factorial(4);
console.log(result);
