var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var inputLines = [];
rl.on('line', function(line) {
//  console.log(line);
    inputLines.push(line);
}).on('close',function(){
//    process.exit(0);
    
    processInput();
});

function checkFor4(num){
    var inputStr = ""+num;
    if(inputStr.indexOf(4) != -1){
        return {
            result:false,
            index:inputStr.length - 1 - inputStr.indexOf(4)
        }
    }else{
        return{
            result:true
        }
    }
}

function splitNumber(num,a,b){
//    console.log(num);
    //check if number has 4.
    var isPrintable = false;
//    console.log(checkFor4(num));
    
    if(!checkFor4(num).result){
       //call splitNumber again
//        console.log(num);
    }else{
        
    }
    
}

function processInput(){
    var n = parseInt(inputLines[0]);
    
    var inputNumbers = [];
    for(var i=1;i<=n;i++){
        inputNumbers.push(parseInt(inputLines[i]));
        splitNumber(parseInt(inputLines[i]))
    }
    
//    console.log(inputNumbers);
}