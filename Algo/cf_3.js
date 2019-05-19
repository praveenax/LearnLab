process.stdin.resume();
process.stdin.setEncoding('utf8');

function printOutput(data) {
    process.stdout.write(data);
}

var T = 0;
var inpArr = []
process.stdin.on('data', function (chunk) {
    if (T === 0) {
        T = chunk
    } else {
        inpArr.push(parseInt(chunk));
        if (inpArr.length == T) {
            process.exit();
        }
    }

});

process.on('exit', function () {
    inpArr.map(function (val, index) {
        findSqRoot(val)
    })
});

function findSqRoot(val) {
    printOutput(''+Math.round(Math.sqrt(val))+'\n');
}
