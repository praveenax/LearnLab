var _ = require('lodash');

var size = 4
var firstLine = []
for (var i = 0; i < size; i++) {
    firstLine.push(i + 1)
}



firstLine = _.shuffle(firstLine);


function rand(min, max) {
    return Math.floor(Math.random() * max) + min
}

function isUnique(line) {
    var result = true
    for (var i = 0; i < size; i++) {


        var col = col_arr[i]
        if (_.includes(col, line[i])) {
            result = false
            break;
        }
    }
    return result
}

function eachColUpdate(line) {
    for (var i = 0; i < size; i++) {
        var col = col_arr[i];
        col.push(line[i])
        col_arr[i] = col
    }

}

function buildLine() {
    return _.shuffle(firstLine);
}

var col_arr = []
for (var i = 0; i < size; i++) {
    var col_sample = [];
    col_sample.push(firstLine[i])
    col_arr.push(col_sample)
}


var iterations = 0;
for (var i = 1; i < size; i++) {
    var allConditions = false
    while (!allConditions) {
        iterations++
        var line = buildLine();
        if (isUnique(line)) {
            allConditions = true;
            eachColUpdate(line)

        }
    }

}


console.log(col_arr);

for (var i = 0; i < size; i++) {
    var col = col_arr[i]
    var line = ""
    for (var j = 0; j < size; j++) {
        line += " " + col[j]
    }
    console.log(line)
}
console.log(iterations)