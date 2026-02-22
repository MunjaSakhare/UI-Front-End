let fun = function (x, y) {
  console.log(x, y);
};
fun(10, 20);

let fun2 = function (a) {
  console.log("first anonymous function...");
  return function () {
    console.log("second anonymous function");
  };
};

let output = fun2();
console.log(output);
output();
