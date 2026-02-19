function return_fn(a, b) {
  var res = a + b;
  return res;
  console.log("hello, how are you..."); //it  will not execute because of its written next line of the return statement....
}

var output = return_fn(500, 100);
console.log(output);
