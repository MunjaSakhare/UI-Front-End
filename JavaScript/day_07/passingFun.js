var details = {
  id: 101,
  brand: "Apple",
  fun: function () {
    var a = 10;
    var b = 20;
    console.log(a + b);
    return a + b;
  },
};

details.fun();
console.log(details);
console.log(details.fun());
