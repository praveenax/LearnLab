console.log("ADV");

var val = 1;
const PromTest = (data) =>{
    return new Promise((resolve,reject) =>{
        
        console.log("test");
        
        if(data == 1){
            resolve("axp");
        }else{
            setTimeout(function(){
                reject("wooooo!");
            },2000);
            
        }
        
    });
}


const fun = (val) =>{
    PromTest(val).then(value=>{
        console.log("Done: "+value);
    }).catch(err=>{
       console.log("Err: "+err); 
    });
}

fun(1);
fun(2);
fun(3);

