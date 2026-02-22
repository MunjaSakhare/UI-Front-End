function myFun(x, y) {
  let res = x + y;
  return function () {
    console.log(res);
  };
}
let output = myFun(10, 20);
console.log(output);
output();
