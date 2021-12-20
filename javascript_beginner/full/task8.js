function findDivCount(a, b, n) {
  let num = 0;
  for (let i = a; i <= b; i += 1) {
    if (i % n === 0) {
      num += 1;
    }
    return num;
  }
}
console.log(findDivCount(1, 10, 2));
