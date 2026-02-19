function fn(a,b){
    console.log(a,b);
    a();
}
fn(function(){
    console.log("hello, anonymous function here...");
},10);