var details = {
  brand: "Apple",
  price: 140000,
  model: "Iphone 15",
  owner: { name: "raj", city: "pune", moNumber: 9876541230 },
};

console.log(details);
console.log(details.owner);
console.log(details.owner.city);
delete details.owner.moNumber;
console.log(details);
console.log(details.owner);
console.log(details.owner.moNumber);
