
function reversal(str){
    var strArr = str.split('');
    var result = '';
    strArr.map(function(item,index){
        result = item+result
    })
    
    console.log(result);
}

var str = "praveen"
reversal(str)