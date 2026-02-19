function normal_fn(){
    console.log("normal function here...");
}

function para_fn(x,y){
    console.log(x+y);
}

function fn(a,b){
    console.log(a,b);
    console.log(typeof a, typeof b);
    b(100,200);
}
fn(5,para_fn);