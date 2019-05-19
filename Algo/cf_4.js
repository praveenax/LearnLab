process.stdin.resume();
process.stdin.setEncoding('utf8');


var T = 0;
var inpArr = []
process.stdin.on('data', function (chunk) {
    if (T === 0) {
        T = chunk
    } else {
        inpArr.push(Number.parseInt(chunk));
        if (inpArr.length == T) {
            process.exit();
        }
    }

});

process.on('exit', function () {

    for (var i = 0; i < inpArr.length; i++) {
        findFour(inpArr[i])
    }

});



function findFour(val) {
    var str = '' + val;
    var count = 0;
    var mapArr = str.split('');
    for (var i = 0; i < mapArr.length; i++) {
        var data = mapArr[i];
        if (data == 4) {
            count++
        }
    }

    console.log(count);
}


//findFour("15124")
