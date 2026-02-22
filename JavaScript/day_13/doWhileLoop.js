function printTenNumber(num) {
  var x = num;
  console.log("Loop started...");
  do {
    console.log(x);
    x--;
  } while (x >= 1);
  console.log("Loop stopped...");
}

printTenNumber(10);
