function processAreaCalc(arr) {
    var max_result = 0;
    for (var a in arr) {
        var starting_height = arr[a];
        var width = 0;
        //look for the next equal or greater height.
        //increment the width length by one
        //when the last is met. starting value * width
        var sub_arr = arr.slice(a, arr.length);

        for (var subA in sub_arr) {
            if (sub_arr[subA] >= starting_height) {
                width++;
            } else {
                break;
            }
        }

        var rect_area = starting_height * width;
        var tmp_max = max_result;
        if (tmp_max < rect_area) {
            max_result = rect_area;
        }

    }
    
    return max_result;
}

function largestRectangle(h) {

    var arr = h;

    var a = processAreaCalc(arr);
    var b = processAreaCalc(arr.reverse());
    
    if(a > b){
        return a;
    }else{
        return b;
    }

    

}

var n = 5
//var arr = [1, 2, 3, 4, 5]
var arr = [11, 11, 10, 10, 10]
//var arr = [1, 2]
var result = largestRectangle(arr)
console.log(result);