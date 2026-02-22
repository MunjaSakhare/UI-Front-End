function add(x, y) {
  var res = x + y;
  return res;
}

var output = add(10, 20);
console.log(output);

function sub(x, y) {
  var res = x - y;
  return res;
}

var subOut = sub(90, 20);
console.log(subOut);

function mul(x, y) {
  var res = x * y;
  return res;
}

var mulOut = mul(50, 10);
console.log(mulOut);

function div(x, y) {
  var res = x / y;
  return res;
}

var divOut = div(50, 20);
console.log(divOut);

function modulus(x, y) {
  var res = x % y;
  return res;
}

var modulusOut = modulus(100, 11);
console.log(modulusOut);

function exponent(x, y) {
  var res = x ** y;
  return res;
}
var exponentOut = exponent(20, 5);
console.log(exponentOut);

function preIncreament(x, y) {
  var res = x + ++y;
  return res;
}
var preIncreamentOut = preIncreament(20, 5);
console.log(preIncreamentOut);

function postIncreament(x, y) {
  var res = x + y++;
  return res;
}
var postIncreamentOut = postIncreament(20, 5);
console.log(postIncreamentOut);

function preDecreament(x, y) {
  var res = x + --y;
  return res;
}
var preDecreamentOut = preDecreament(20, 5);
console.log(preDecreamentOut);

function postDecreament(x, y) {
  var res = x + y--;
  return res;
}
var postDecreamentOut = postDecreament(20, 5);
console.log(postDecreamentOut);
