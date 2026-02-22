var arr = [
  { brand: "Apple", price: 70000, model: "Iphpne 14" },
  { brand: "Apple", price: 90000, model: "Iphone 17" },
  { brand: "Samsung", price: 110000, model: "Galaxy A27" },
  { brand: "Samsung", price: 150000, model: "Galaxy A25" },
  { brand: "Vivo", price: 40000, model: "Vivo y20" },
];

console.log(arr);

var filteredArr = arr.filter(function (element) {
  return element.brand == "Apple" && element.price <= 100000;
});
console.log(filteredArr);
