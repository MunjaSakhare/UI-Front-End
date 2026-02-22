function higherOrderFunction(name1, name2, num) {
  console.log(name1, name2, num);
  name1();
  name2();
}
higherOrderFunction(
  function () {
    let city = "Delhi";
    console.log(city);
  },
  function () {
    let city = "Mumbai";
    console.log(city);
  },
  10,
);
