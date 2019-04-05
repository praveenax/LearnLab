function longest(str){
    var longest = "";
    
    var strArr = str.split(' ');
    
    strArr.map(function(item,index){
        var word = item.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        if(word.length > longest.length){
           longest = word;
        }
    })
    
    console.log(longest);
}

var arr = "fun&!! time";
longest(arr)