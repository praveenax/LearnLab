var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var inputLines = [];
rl.on('line', function (line) {
    //  console.log(line);
    inputLines.push(line);
}).on('close', function () {
    //    process.exit(0);

    processInput();
});

function checkFor4(num) {
    var inputStr = "" + num;
    if (inputStr.indexOf(4) != -1) {
        return {
            result: false,
            index: inputStr.length - 1 - inputStr.indexOf(4)
        }
    } else {
        return {
            result: true
        }
    }
}

function splitNumber(num, index) {
    new Promise(function (resolve, reject) {
        //    console.log(num);
        //check if number has 4.
        var isPrintable = false;
        //    console.log(Math.pow(10,index));
        var a = num - (Math.pow(10, index));
        var b = num - a;
        //    console.log(checkFor4(a));

        if (!checkFor4(a).result) {
            //call splitNumber again
            //        console.log(num);
            splitNumber(a, checkFor4(a).index).then(function(obj){
                console.log(obj);
            })
            b = num - new_a
        } else {

            console.log(a + "---" + b);
            resolve( {
                num: num,
                a: a,
                b: b
            });
        }
    });


}

function processInput() {
    var n = parseInt(inputLines[0]);
    var output = [];
    var inputNumbers = [];
    for (var i = 1; i <= n; i++) {
        inputNumbers.push(parseInt(inputLines[i]));
        output.push(splitNumber(parseInt(inputLines[i]), 0, 0))
    }
    
    Promise.all(output).then(function(out){
        console.log(out);
    })
//    console.log(output);
}
