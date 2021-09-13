function factorial(num) {
  let sum = 1;
  for (let n = 1; n <= num; n += 1) {
    sum *= n;
  }
  return sum;
}
console.log(factorial(0));

// examples
factorial(3); // ===> 6
factorial(5); // ===> 120
factorial(0); // ===> 1
