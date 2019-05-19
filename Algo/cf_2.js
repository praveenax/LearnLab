process.stdin.resume();
process.stdin.setEncoding('utf8');

function printOutput(data){
    process.stdout.write(data);
}

function check(inp){
    var ret = 0;
    if(inp % 4 === 0){
       ret = inp + 1;
    }else{
        ret = inp - 1;
    }
    return ret;
}

process.stdin.on('data', function (chunk) {
//    console.log(chunk);
    var inpVal = parseInt(chunk);
    data = ''+check(inpVal);
    printOutput(data);
    process.exit();
});
