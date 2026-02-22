function checkPrime(num) {
  var isPrime = true;
  if (num < 1) {
    console.log("Enter positive number greater than 1.");
  } else if (num == 1) {
    console.log("1 is not prime number.");
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
      }
    }
  }
  if (num > 1) {
    if (isPrime) {
      console.log("Number is prime.");
    } else {
      console.log("Number is not prime.");
    }
  }
}

checkPrime(1);
