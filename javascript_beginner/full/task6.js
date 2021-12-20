function increaser(a, index) {
  let sum = 0;
  if (a > index) {
    sum = a + index;
  } else {
    return a;
  }
  return sum;
}
console.log(increaser(5, 2));
