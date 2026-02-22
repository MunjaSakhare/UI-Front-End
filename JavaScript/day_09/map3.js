var arr = [100, 200, 300, 400, 500, 600, 700, 800, 900];
console.log(arr);
var newArr = arr.map(function (element, index) {
  //   console.log(element, index);
  return element % 9;
});

console.log(newArr);
