function min(first, second) {
  let min;
  if (first < second) {
    min = first;
  }
  if (first > second) {
    min = second;
  }
  return min;
}

console.log(min(40, 100));

console.log(min(30, 50));
