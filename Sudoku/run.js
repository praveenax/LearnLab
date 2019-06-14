//program to generate sudoku grid

var _ = require('lodash');

var all_nums = [1, 2]

var x_0 = [];
var x_1 = [];

var y_0 = [];
var y_1 = [];


//scramble the input
var map = {}
var allArr = [];
var xValue=2, yValue = 2;
console.log(xValue);
for (var i = 0; i < xValue; i++) {
    for (var j = 0; j < yValue; j++) {
        map[i+'_'+j] = 0;
        allArr.push(0);
    }

}
console.log(map);
console.log(allArr);

//write the first line using a scrambled 
var output = {};
allArr=[]
for (var i = 0; i < xValue; i++) {
    for (var j = 0; j < yValue; j++) {
        var r = _.shuffle(all_nums)[0];
        map[i+'_'+j] = r;
        allArr.push(r);
    }

}

console.log(map);
console.log(allArr);