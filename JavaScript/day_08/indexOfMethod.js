var arr = [100, 200, true, "ram", "raj", null, undefined];
var index = arr.indexOf(200);
console.log(index);
console.log(arr.indexOf(null));
var arr2 = [100, 200, [800, 900]];
var ind = arr2[2].indexOf(900);
console.log(ind);

var arr3 = [1, 2, 3, [5, 6, 7, [8, 9, 0]]];
// var i = arr3[3][3][1]; for print element on that position....
var i = arr3[3][3].indexOf(0);
// var i = arr3.indexOf(0); not find where is 0 and print -1...
console.log(i);
