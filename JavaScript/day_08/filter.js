var arr = [100, 200, 300, 400, 500, 600, 700, 800, 900];
console.log(arr);

var filteredArr = arr.filter(function (element, index) {
  return element >= 500;
});

console.log(filteredArr);
