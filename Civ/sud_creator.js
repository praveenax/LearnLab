var _ = require('lodash');

// var firstLine = [1,2,3,4,5,6,7,8,9]
var firstLine = [1,2,3]

firstLine = _.shuffle(firstLine);

console.log(firstLine)

function rand(min,max){
    return Math.floor(Math.random()*max) + min
}

var col1 = []
var col2 = []
var col3 = []

col1.push(firstLine[0])
col2.push(firstLine[1])
col3.push(firstLine[2])

var iterations = 0;
for(var i=1;i<3;i++){
    var allConditions = false
    while(!allConditions){
        iterations++
        var line = _.shuffle(firstLine);
        if(!_.includes(col1,line[0]) && !_.includes(col2,line[1]) && !_.includes(col3,line[2])){
            allConditions = true;
            col1.push(line[0])
            col2.push(line[1])
            col3.push(line[2])
        }
    }
    
}

console.log(col1)
console.log(col2)
console.log(col3)
console.log(iterations)