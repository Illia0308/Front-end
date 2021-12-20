function getPrimes(num) {
  for (let i = 0; i <= num; i += 1) {
    if (i % 1 === i && i % i === 1) {
      console.log(i);
    }
  }
}
console.log(getPrimes(10));
