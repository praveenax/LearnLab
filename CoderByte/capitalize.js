function capitalize(str) {
    var result = "";

    var strArr = str.split(' ');
    
    strArr.map(function(item,index){
        var capitalize = item[0].toUpperCase();
        var rest = '';
        if(item.length>1){
            rest = item.slice(1,item.length);   
        }
        
        result = result + capitalize + rest + ' ';
    })

    

    console.log(result);
}

//var arr = "hello*3";
var arr = "hello world";
capitalize(arr)
