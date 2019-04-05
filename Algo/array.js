'use strict';



// Complete the rotLeft function below.
function rotLeft(arr, d) {
    var new_d = arr.length-d;
    var new_arr = [];
    var output = [];
    arr.map((num,index)=>{
        var new_pos = (index+new_d)%(arr.length);
       
        new_arr.push(new_pos)   
        output.push(0);
    });
    
    new_arr.map((num,index)=>{
        output[num] = arr[index];
    });
    
    return output

}


var n = 5;
var d = 4;
var arr = [1,2,3,4,5];
rotLeft(arr,d)



